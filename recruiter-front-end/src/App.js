import React from "react";
import "./App.css";
import Users from "./components/Users";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import User from "./components/User";
import fire from "./config/fire";
import { Button, Checkbox, Form, Container, Header } from 'semantic-ui-react'


class App extends React.Component {
  state = {
    user: {}
  };

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({
          user: null
        });
      }
    });
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    // console.log(this.props)
    return (
      <Container>
        <Router>
          {this.state.user ? (
            [
              <Button onClick={this.logout}>logout</Button>,
              <Header>Recruiter Rule</Header>,
              <Route exact path="/" component={Users} />,
              <Route exact path="/db" component={Dashboard} />,
              <Route
                exact
                path="/:id"
                render={props => {
                  console.log(props);
                  return <div>UserId: {props.match.params.id}</div>;
                }}
              />
            ]
          ) : (
            <Login />
          )}
        </Router>
      </Container>
    );
  }
}

export default App;
