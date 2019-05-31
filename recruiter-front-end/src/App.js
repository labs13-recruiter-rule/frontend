import React from "react";
import "./App.css";
import Users from "./components/Users";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import User from "./components/User";
import fire from "./config/fire";

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
      <Router>
        {this.state.user ? (
          <div className="App">
            <button onClick={this.logout}>logout</button>
            <header className="App-header">
              <h1>Recruiter Rule</h1>
            </header>
            <Route exact path="/" component={Users} />
            <Route
              exact
              path="/:id"
              render={props => {
                console.log(props);
                return <div>UserId: {props.match.params.id}</div>;
              }}
            />
            {/* <Users /> */}
          </div>
        ) : (
          <Login />
        )}
      </Router>
    );
  }
}

export default App;
