import React from 'react';
import fire from './../config/fire';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Button, Form, Container, Header } from 'semantic-ui-react';
import axios from 'axios';
// import './'

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      const newUser = authResult.additionalUserInfo.isNewUser;
      const token = authResult.user._lat;

      if (newUser) {
        console.log('from register token', token);
        axios
          .post(process.env.REACT_APP_BACKEND_REGISTER, { token })
          .then(res => console.log('from register res', res))
          .catch(error => {
            console.log('from register error', error);
          });
      } else {
        console.log('from login token', token);
        axios
          .post(process.env.REACT_APP_BACKEND_LOGIN, { token })
          .then(res => console.log('from register res', res))
          .catch(error => {
            console.log('from register error', error);
          });
      }
    },
  },
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
      .then(res => {
        axios
          .post(process.env.REACT_APP_BACKEND_LOGIN, {
            token: res.user._lat,
          })
          .then(res => console.log('from register res', res))
          .catch(error => {
            console.log('from register error', error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  };

  signup = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        axios
          .post(process.env.REACT_APP_BACKEND_REGISTER, {
            token: res.user._lat,
          })
          .then(res => console.log('from register res', res))
          .catch(error => {
            console.log('from register error', error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <Container>
        <Header size="huge">Recruiter Rule</Header>
        <Form>
          <Form.Field>
            <label htmlFor="email">Email</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="Email"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="password">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Field>
          <Form.Field>
            <Button type="submit" onClick={this.login}>
              Login
            </Button>
            <Button onClick={this.signup}>Signup</Button>
          </Form.Field>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fire.auth()} />
        </Form>
      </Container>
    );
  }
}

export default Login;
