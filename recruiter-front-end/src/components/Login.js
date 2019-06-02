import React from "react";
import fire from "./../config/fire";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Button, Checkbox, Form, Container, Header } from 'semantic-ui-react'
// import './'

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  };

  signup = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .then(u => {
        console.log(u);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <Container>
        <Header size='huge'>Recruiter Rule</Header>
        <Form>
          <Form.Field>
            <label htmlFor='email'>Email</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="Email" 
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='password'>Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Field>
          <Form.Field>
            <Button type="submit" onClick={this.login}>Login</Button>
            <Button onClick={this.signup}>Signup</Button>
          </Form.Field>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fire.auth()} />
        </Form>
      </Container>


    );
  }
}

export default Login;
