import React from "react";
import fire from "./../config/fire";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

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
      <div>
        <form>
          <input
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            name="email"
            placeholder="Enter email"
          />
          <input
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            name="password"
            placeholder="Password"
          />

          <button type="submit" onClick={this.login}>
            Login
          </button>
          <button onClick={this.signup}>Signup</button>
        </form>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fire.auth()} />
      </div>
    );
  }
}

export default Login;
