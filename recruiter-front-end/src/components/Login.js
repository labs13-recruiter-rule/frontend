import React from 'react';
import fire from './../config/fire';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Button, Form, Container, Header, Modal, Image } from 'semantic-ui-react';
import axios from 'axios';
import MarketingPage from './MarketingPage';
import './Login.css';
// import './'

const center = {
  textAlign: 'center',
}; 

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      const newUser = authResult.additionalUserInfo.isNewUser;
      const token = authResult.user._lat;

      sessionStorage.setItem('token', token);
      if (newUser) {
        axios
          .post(process.env.REACT_APP_BACKEND_REGISTER, { token })
          .then(res => console.log('loginjs register new user success', res))
          .catch(error => {
            console.log('from register error', error);
          });
      } else {
        axios
          .post(process.env.REACT_APP_BACKEND_LOGIN, { token })
          .then(res => console.log('loginjs login non new user success'))
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
        sessionStorage.setItem('token', res.user._lat);
        axios
          .post(process.env.REACT_APP_BACKEND_LOGIN, {
            token: res.user._lat,
          })
          .then(res => console.log('from register res', res))
          .catch(error => {
            console.log('from login backend register signinwithemailandpassword error', error);
          });
      })
      .catch(error => {
        console.log('login signinwithemailandpassword err', error);
      });
  };

  signup = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        sessionStorage.setItem('token', res.user._lat);
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
        <MarketingPage /> 
        <div className="modal-container">
        <Modal tiny trigger={<Button className='button-center'>Sign up or Login Now!</Button>} centered={false}>
    <Modal.Header>Welcome to Recruiter Rules!</Modal.Header>
    <Modal.Content image>
      
      <Modal.Description>
      <Form className='form-style'>
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
            <div className="button-container">
            <Button type="submit" onClick={this.login}>
              Login
            </Button>
            <Button onClick={this.signup}>Signup</Button>
            </div>
          </Form.Field>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fire.auth()} />
        </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
  </div>
      </Container>
    );
  }
}

export default Login;
