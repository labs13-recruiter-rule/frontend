import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import { connect } from 'react-redux';
import NewUserLandingPage from './views/NewUserLandingPage/NewUserLandingPage';
import Contacts from './components/Contacts/Contacts';
import Education from './views/NewRulesPage/Education';
import Skills from './views/NewRulesPage/Skills';
import Experience from './views/NewRulesPage/Experience';
import CheckoutContainer from './components/Checkout/CheckoutContainer';
import NewRuleContacts from './views/NewRulesPage/NewRuleContacts';
import Confirmation from './views/NewRulesPage/Confirmation';
import AddCandidatePage from './views/AddCandidatePage/AddCandidatePage';
import CandidateContact from './views/AddCandidatePage/CandidateContact';
import CandidateEducation from './views/AddCandidatePage/CandidateEducation';
import CandidateSkills from './views/AddCandidatePage/CandidateSkills';
import CandidateExperience from './views/AddCandidatePage/CandidateExperience';
import NewContactForm from './components/Contacts/NewContactForm';
import fire from './config/fire';
import { Menu, Container, Segment, Responsive } from 'semantic-ui-react';
import history from './history';
import EngineDash from './components/Engines/EngineDash';
import { parseRule, addRule } from './actions/ruleActions';
import CandidateEngine from './views/AddCandidatePage/CandidateEngine';
import NewEngine from './views/NewRulesPage/NewEngine';
import CandidateConfirm from './views/AddCandidatePage/CandidateConfirm';
import CandidateSend from './views/AddCandidatePage/CandidateSend';
import EngineSuccess from './views/NewRulesPage/EngineCreationSuccess';

const token = sessionStorage.getItem('token');
const tokenHeader = { headers: { token: `${token}` } };

class App extends React.Component {
  state = {
    user: {},
    user_id: null,
    rules: [],
    rule: {
      skills: [],
      education: [],
      majors: [],
      minExp: null,
      maxExp: null,
      contactEmail: [],
      contactName: '',
    },
    candidate: {
      name: '',
      email: '',
      candidateLinkedIn: '',
      major: [],
      skills: [],
      experience: null,
      education: [],
    },
    engine: null,
    engine_id: null,
    selectedContacts: [],
  };

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        sessionStorage.setItem('token', user._lat);
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

  createNewRule = e => {
    this.setState(prevState => ({
      ...prevState,
      rules: [],
    }));
  };

  candidateEngine = e => {
    this.setState({ ...this.state, engine: e });
  };

  contactContacts = e => {
    this.setState({
      ...this.state,
      rule: {
        ...this.state.rule,
        contactEmail: e,
      },
    });
  };

  minEducation = e => {
    const educationLevel = [
      'high school / GED',
      'some college',
      "Associate's degree",
      "Bachelor's degree",
      "Master's degree",
      'PhD',
    ];
    switch (e) {
      case '':
        this.setState(prevState => ({
          rule: { ...prevState, education: educationLevel },
        }));
        break;
      case 'high school / GED':
        this.setState(prevState => ({
          rule: { ...this.state.rule, education: educationLevel },
        }));
        break;
      case 'some college':
        this.setState(prevState => ({
          rule: { ...this.state.rule, education: educationLevel.slice(1, 6) },
        }));
        break;
      case "Associate's degree":
        this.setState(prevState => ({
          rule: { ...this.state.rule, education: educationLevel.slice(2, 6) },
        }));
        break;
      case "Bachelor's degree":
        this.setState(prevState => ({
          rule: { ...this.state.rule, education: educationLevel.slice(3, 6) },
        }));
        break;
      case "Master's degree":
        this.setState(prevState => ({
          rule: { ...this.state.rule, education: educationLevel.slice(4, 6) },
        }));
        break;
      case 'PhD':
        this.setState(prevState => ({
          rule: { ...this.state.rule, education: educationLevel.slice(5, 6) },
        }));
        break;
    }
  };

  majors = e => {
    this.setState(prevState => ({
      ...prevState,
      rule: {
        ...prevState.rule,
        majors: e,
      },
    }));
  };

  skills = e => {
    this.setState(prevState => ({
      ...prevState,
      rule: {
        ...prevState.rule,
        skills: e,
      },
    }));
  };

  newRule = e => {
    this.setState(prevState => ({
      ...prevState,
      rules: [...prevState.rules, prevState.rule],
      rule: {
        skills: [],
        education: [],
        majors: [],
        minExp: null,
        maxExp: null,
        contactEmail: [],
        contactName: '',
      },
    }));
  };

  fallbackName = e => {
    this.setState(prevState => ({
      ...prevState,
      rule: {
        ...prevState.rule,
        fallbackName: e,
      },
    }));
  };

  fallbackEmail = e => {
    this.setState(prevState => ({
      ...prevState,
      rule: {
        ...prevState.rule,
        fallbackEmail: e,
      },
    }));
  };

  parseMyRule() {
    this.props
      .parseRule(this.state.rule)
      .then(() => {
        this.props
          .addRule(
            `https://recruiter-back-end.herokuapp.com/engines/${this.state.engine}/rules/`,
            this.props.parsedRule,
          )
          .then(() => {
            console.log('rule submitted good');
          })
          .catch(() => {
            console.log('rule did not submit well');
          });
      })
      .catch(err => {
        console.log('from error parse', err);
      });
  }
  // .addRule(
  //   `https://recruiter-back-end.herokuapp.com/engines/${this.state.engine}/rules/`,
  //   {rule: this.props.parsedRule, ruleNotParsed: this.state.rule},
  // )
  minExp = e => {
    this.setState(prevState => ({
      ...prevState,
      rule: {
        ...prevState.rule,
        minExp: e,
      },
    }));
  };

  maxExp = e => {
    this.setState(prevState => ({
      ...prevState,
      rule: {
        ...prevState.rule,
        maxExp: e,
      },
    }));
  };

  contactName = e => {
    this.setState({
      rule: {
        ...this.state.rule,
        contactName: e,
      },
    });
  };

  contactEmail = e => {
    this.setState({
      rule: {
        ...this.state.rule,
        contactEmail: e,
      },
    });
  };

  candidateEngine = e => {
    this.setState(prevState => ({
      ...prevState,
      engine: e,
    }));
  };

  candidateName = e => {
    this.setState(prevState => ({
      ...prevState,
      candidate: {
        ...prevState.candidate,
        name: e,
      },
    }));
  };

  candidateEmail = e => {
    this.setState(prevState => ({
      ...prevState,
      candidate: {
        ...prevState.candidate,
        email: e,
      },
    }));
  };

  candidateLinkedIn = e => {
    this.setState(prevState => ({
      ...prevState,
      candidate: {
        ...prevState.candidate,
        candidateLinkedIn: e,
      },
    }));
  };

  candidateEducation = e => {
    this.setState(prevState => ({
      ...prevState,
      candidate: {
        ...prevState.candidate,
        education: [e],
      },
    }));
  };

  candidateMajor = e => {
    this.setState(prevState => ({
      ...prevState,
      candidate: {
        ...prevState.candidate,
        major: e,
      },
    }));
  };

  candidateSkills = e => {
    this.setState(prevState => ({
      ...prevState,
      candidate: {
        ...prevState.candidate,
        skills: e,
      },
    }));
  };

  candidateExperience = e => {
    this.setState(prevState => ({
      ...prevState,
      candidate: {
        ...prevState.candidate,
        experience: e,
      },
    }));
  };

  appState = () => {
    console.log('App.js this.state', this.state);
  };

  render() {
    return (
      <Router history={history}>
        <Container>
          {this.state.user ? (
            [
              <>
                <Segment.Group>
                  <Responsive as={Segment} maxWidth={522}>
                    <Menu
                      vertical
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        textAlign: 'center',
                      }}
                    >
                      <Menu.Item as={Link} to="/">
                        Home
                      </Menu.Item>
                      <Menu.Item as={Link} to="/engines">
                        Engines
                      </Menu.Item>
                      <Menu.Item as={Link} to="/contacts">
                        My Contacts
                      </Menu.Item>
                      <Menu.Item as={Link} to="/new-candidate/engine">
                        Send Candidate
                      </Menu.Item>
                      <Menu.Item as={Link} to="/" onClick={this.logout}>
                        Logout
                      </Menu.Item>
                    </Menu>
                  </Responsive>
                  <Responsive as={Segment} minWidth={523} maxWidth={736}>
                    <Menu
                      compact
                      style={{ display: 'flex', justifyContent: 'center' }}
                    >
                      <Menu.Item as={Link} to="/">
                        Home
                      </Menu.Item>
                      <Menu.Item as={Link} to="/engines">
                        Engines
                      </Menu.Item>
                      <Menu.Item as={Link} to="/contacts">
                        My Contacts
                      </Menu.Item>
                      <Menu.Item as={Link} to="/new-candidate/engine">
                        Send Candidate
                      </Menu.Item>
                      <Menu.Item as={Link} to="/" onClick={this.logout}>
                        Logout
                      </Menu.Item>
                    </Menu>
                  </Responsive>
                  <Responsive as={Segment} minWidth={737}>
                    <Menu>
                      <Menu.Item as={Link} to="/">
                        Home
                      </Menu.Item>
                      <Menu.Item as={Link} to="/engines">
                        Engines
                      </Menu.Item>
                      <Menu.Item as={Link} to="/contacts">
                        My Contacts
                      </Menu.Item>
                      <Menu.Item as={Link} to="/new-candidate/engine">
                        Send Candidate
                      </Menu.Item>
                      <Menu.Item
                        as={Link}
                        to="/"
                        onClick={this.logout}
                        position="right"
                      >
                        Logout
                      </Menu.Item>
                    </Menu>
                  </Responsive>
                </Segment.Group>
                {/* <button onClick={() => this.appState()}>
                  App.js this.state
                </button> */}
                <Route
                  exact
                  path="/"
                  render={() => (
                    <NewUserLandingPage createNewRule={this.createNewRule} />
                  )}
                />
                <Route exact path="/db" component={Dashboard} />
                <Route
                  exact
                  path="/id"
                  render={props => {
                    return <div>UserId: {props.match.params.id}</div>;
                  }}
                />
                <Route
                  exact
                  path="/engines"
                  //   component={EngineDash}
                  render={() => (
                    <EngineDash createNewRule={this.createNewRule} />
                  )}
                />
                <Route
                  exact
                  path="/new-candidate/engine"
                  render={() => (
                    <CandidateEngine candidateEngine={this.candidateEngine} />
                  )}
                />
                <Route
                  exact
                  path="/new-rule/engine"
                  component={props => (
                    <NewEngine candidateEngine={this.candidateEngine} />
                  )}
                />
                <Route
                  exact
                  path="/new-rule/contacts"
                  component={props => (
                    <NewRuleContacts
                      contactName={this.contactName}
                      contactEmail={this.contactEmail}
                      contactContacts={this.contactContacts}
                    />
                  )}
                />
                <Route
                  exact
                  path="/new-rule/education"
                  component={props => (
                    <Education
                      minEducation={this.minEducation}
                      majors={this.majors}
                    />
                  )}
                />
                <Route
                  exact
                  path="/new-rule/skills"
                  component={props => <Skills skills={this.skills} />}
                />
                <Route
                  exact
                  path="/new-rule/experience"
                  component={props => (
                    <Experience
                      minExp={this.minExp}
                      maxExp={this.maxExp}
                      newRule={this.newRule}
                    />
                  )}
                />
                <Route
                  exact
                  path="/new-rule/confirmation"
                  component={props => (
                    <Confirmation
                      fallbackName={this.fallbackName}
                      fallbackEmail={this.fallbackEmail}
                      rule={this.state.rule}
                      rules={this.state.rules}
                      engine_id={this.state.engine}
                      contacts={this.state.selectedContacts}
                      submitRule={() => this.parseMyRule()}
                    />
                  )}
                />
                <Route
                  exact
                  path="/new-rule/success"
                  component={EngineSuccess}
                />
                <Route exact path="/contacts/add" component={NewContactForm} />
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/checkout" component={CheckoutContainer} />
                <Route
                  exact
                  path="/new-candidate/"
                  component={AddCandidatePage}
                />
                <Route
                  exact
                  path="/new-candidate/contact"
                  component={props => (
                    <CandidateContact
                      candidateName={this.candidateName}
                      candidateEmail={this.candidateEmail}
                      candidateLinkedIn={this.candidateLinkedIn}
                    />
                  )}
                />
                <Route
                  exact
                  path="/new-candidate/education"
                  component={props => (
                    <CandidateEducation
                      candidateEducation={this.candidateEducation}
                      candidateMajor={this.candidateMajor}
                    />
                  )}
                />
                <Route
                  exact
                  path="/new-candidate/skills"
                  component={props => (
                    <CandidateSkills candidateSkills={this.candidateSkills} />
                  )}
                />
                <Route
                  exact
                  path="/new-candidate/experience"
                  component={props => (
                    <CandidateExperience
                      candidateExperience={this.candidateExperience}
                    />
                  )}
                />
                <Route
                  exact
                  path="/new-candidate/confirm"
                  render={() => (
                    <CandidateConfirm
                      candidate={this.state.candidate}
                      sendCandidate={this.sendCandidate}
                      parseRules={this.parseMyRule}
                      engine={this.state.engine}
                      fallbackName={this.fallbackName}
                      fallbackEmail={this.fallbackEmail}
                    />
                  )}
                />
                <Route
                  exact
                  path="/new-candidate/send"
                  component={CandidateSend}
                />
              </>,
            ]
          ) : (
            <Login />
          )}
          <footer>&copy; Recruiter Rules 2019</footer>
        </Container>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    user_id: state.user_id,
    parsedRule: state.parsedRule,
  };
};

export default connect(
  mapStateToProps,
  { parseRule, addRule },
)(App);
