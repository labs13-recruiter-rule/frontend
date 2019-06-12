import React from "react";
import "./App.css";
import Users from "./components/Users";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
//! import User from "./components/User"; DEFINED BUT NEVER USED
import { connect } from "react-redux";
import NewCandidate from "./components/NewCandidate/NewCandidate";
import RuleMain from "./components/RuleView/RuleMain";
import Contacts from "./components/Contacts/Contacts";
import Mailer from "./components/Mailer";
import fire from "./config/fire";
import { Menu, Button, Container, Header } from "semantic-ui-react";

class App extends React.Component {
  state = {
    user: {},
    user_id: null
  };

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        //this.addToSql();
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
  // addToSql = () => {
  //   let url = process.env.REACT_APP_BACKEND_URL;
  //   let uuid = fire.auth().currentUser.uid;
  //   const googleData = {
  //     display_name: fire.auth().currentUser.displayName, // pull of google object
  //     firebase_uuid: fire.auth().currentUser.uid, // pull off google object
  //     email: fire.auth().currentUser.email, // pull off google object
  //     profile_photo: fire.auth().currentUser.photoURL, // pull off google object
  //     everything: fire.auth().currentUser
  //   };
  //   this.props.addUserToSQL(url);
  //   this.props.getUserIdfromUUID(url, uuid);
  // };

  render() {
    return (
      <Container>
        <Router>
          {this.state.user ? (
            [
              <>
                <Menu>
                  <Menu.Item>
                    <Button onClick={this.logout}>logout</Button>
                  </Menu.Item>

                  <Menu.Item>
                    <Link to="/new-candidate">New Candidate</Link>
                  </Menu.Item>

                  <Menu.Item>
                    <Link to="/mailer">Mailer</Link>
                  </Menu.Item>

                  <Menu.Item>
                    <Link to="/rules">Rules</Link>
                  </Menu.Item>
                </Menu>
                <Header textAlign="center">Recruiter Rule</Header>
                <Route exact path="/" component={Users} />
                <Route exact path="/db" component={Dashboard} />
                <Route
                  exact
                  path="/id"
                  render={props => {
                    console.log(props);
                    return <div>UserId: {props.match.params.id}</div>;
                  }}
                />
                <Route exact path="/new-candidate" component={NewCandidate} />
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/mailer" component={Mailer} />
                <Route exact path="/rules" component={RuleMain} />
              </>
            ]
          ) : (
            <Login />
          )}
        </Router>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    user_id: state.user_id
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
