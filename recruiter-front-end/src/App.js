import React from "react";
import "./App.css";
import Users from "./components/Users";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import User from "./components/User";
import { connect } from "react-redux";
import NewCandidate from "./components/NewCandidate/NewCandidate";
import fire from "./config/fire";
import { Button, Checkbox, Form, Container, Header } from "semantic-ui-react";
import { getUserIdfromUUID, addUserToSQL } from "./actions";
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

  logout() {
    fire.auth().signOut();
  }

  createCandidate() {
    console.log("hi");
  }

  render() {
    // console.log(this.props)
    return (
      <Container>
        <Router>
          {this.state.user ? (
            [
              <Button onClick={this.logout}>logout</Button>,
              <Link to="/new-candidate">New Candidate</Link>,
              <Header>Recruiter Rule</Header>,
              <Route exact path="/" component={Users} />,
              <Route exact path="/db" component={Dashboard} />,
              <Route
                exact
                path="/id"
                render={props => {
                  console.log(props);
                  return <div>UserId: {props.match.params.id}</div>;
                }}
              />,
              <Route exact path="/new-candidate" component={NewCandidate} />
            ]
          ) : (
            <Login />
          )}{" "}
          {/**this ternary function is what determines whether someone is in the app or not. It's a higher level component essentially. We can also abstract this away and put the first item after the ? inside its own component and it will work as long as it's in there */}
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
