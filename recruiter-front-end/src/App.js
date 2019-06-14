import React from 'react';
import './App.css';
import Users from './components/Users';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Login from './components/Login';
import { connect } from 'react-redux';
import NewUserLandingPage from './views/NewUserLandingPage/NewUserLandingPage';
import NewContactGroup from './views/NewContactGroup/NewContactGroup';
import Education from './views/NewRulesPage/Education';
import Skills from './views/NewRulesPage/Skills';
import Experience from './views/NewRulesPage/Experience';
import Contacts from './components/Contacts/NewContactForm';
import AddCandidatePage from './views/AddCandidatePage/AddCandidatePage';
import Mailer from './components/Mailer';
import fire from './config/fire';
import { Menu, Button, Container } from 'semantic-ui-react';
import DefaultContactMessage from './views/CreateDefaultContact/DefaultContactMessage';

class App extends React.Component {
  state = {
    user: {},
    user_id: null,
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
          user: null,
        });
      }
    });
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <Container>
        <Router>
          {this.state.user ? (
            [
              <>
                <Menu>
                  <Menu.Item>
                    <Button>
                      <NavLink style={{ color: 'rgba(0,0,0,.6)' }} to="/">
                        Home
                      </NavLink>
                    </Button>
                  </Menu.Item>
                  <Menu.Item>
                    <Button>
                      <NavLink
                        style={{ color: 'rgba(0,0,0,.6)' }}
                        to="/add-candidate"
                      >
                        Add Candidate
                      </NavLink>
                    </Button>
                  </Menu.Item>
                  <Menu.Item>
                    <Button>
                      <NavLink style={{ color: 'rgba(0,0,0,.6)' }} to="/mailer">
                        Mailer
                      </NavLink>
                    </Button>
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button onClick={this.logout}>logout</Button>
                  </Menu.Item>
                </Menu>
                <Route exact path="/" component={NewUserLandingPage} />
                <Route exact path="/db" component={Dashboard} />
                <Route exact path="/test" component={DefaultContactMessage} />
                <Route
                  exact
                  path="/id"
                  render={props => {
                    console.log(props);
                    return <div>UserId: {props.match.params.id}</div>;
                  }}
                />
                <Route
                  exact
                  path="/add-candidate"
                  component={AddCandidatePage}
                />
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/mailer" component={Mailer} />
                <Route
                  exact
                  path="/new-contact-group"
                  component={NewContactGroup}
                />
                <Route exact path="/new-rule/education" component={Education} />
                <Route exact path="/new-rule/skills" component={Skills} />
                <Route
                  exact
                  path="/new-rule/experience"
                  component={Experience}
                />
              </>,
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
    user_id: state.user_id,
  };
};

export default connect(
  mapStateToProps,
  {},
)(App);
