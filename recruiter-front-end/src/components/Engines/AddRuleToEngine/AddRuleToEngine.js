import React from 'react';
import {
  Grid,
  Progress,
  Step,
  Button,
  Header,
  Icon,
  Form,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const token = sessionStorage.getItem('token');
const tokenHeader = { headers: { token: `${token}` } };

const flexContainer = {
  display: 'flex',
  flexDirection: 'column',
};

const primaryButton = {
  margin: '50px 0',
  height: '4rem',
  width: '150px',
  fontSize: '1.35rem',
  fontWeight: '900',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const linkStyles = {
  textAlign: 'center',
  color: 'rgba(0,0,0,.87)',
};

class AddRuleToEngine extends React.Component {
  state = {
    engineID: null,
    engineName: '',
    newRule: {
      skills: [],
      education: [],
      majors: [],
      minExp: null,
      maxExp: null,
      contactEmail: [],
      contactName: '',
    },
  };

  handleSubmit = () => {
    Axios.post(
      'https://recruiter-back-end.herokuapp.com/engines',
      { engine_name: this.state.engine },
      tokenHeader,
    )
      .then(res => {
        this.props.candidateEngine(res.data.newEngine.id);
        // console.log('posted handlesubmit newengine', res.data.newEngine.id);
      })
      .catch(err => {
        // console.log('from error handlesubmit', err);
      });
  };

  setEngineForNewRule = () => {
    // console.log('se hit');
    this.props.setEngineForNewRule(this.props.props.location.state.engineID);
  };

  continueEngineSet = () => {
    // console.log('se hit pre pre');
    this.setEngineForNewRule();
  };

  render() {
    return (
      <Grid columns={12} style={{ marginTop: '25px' }}>
        {console.log('from prop loc', this.props.props.location.state.engineID)}
        <Grid.Row centered>
          <Grid.Column width={1} />
          <Grid.Column width={10} centered style={flexContainer}>
            <Progress percent={10} />
            <Step.Group widths={6}>
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to="/engine/new-rule/contacts">
                    <Step.Title>Rule Contacts</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to="/engine/new-rule/education">
                    <Step.Title>Education</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
              <Step>
                <Link style={linkStyles} to="/engine/new-rule/skills">
                  <Step.Title>Skills</Step.Title>
                </Link>
              </Step>
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to="/engine/new-rule/experience">
                    <Step.Title>Experience</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to="/engine/new-rule/confirmation">
                    <Step.Title>Confirmation</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
            </Step.Group>
            <Grid style={{ marginTop: '25px' }}>
              <Grid.Row>
                <Grid.Column />
                <Grid.Column width={14}>
                  <Header as="h4" textAlign="center">
                    Press next to continue adding a new rule to the engine named <strong>{' '}
                    {this.props.props.location.state.engineName} </strong>
                  </Header>
                </Grid.Column>
                <Grid.Column />
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={2} verticalAlign="middle"></Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid.Column
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <Button
                style={primaryButton}
                onClick={this.continueEngineSet}
                as={Link}
                to={{
                  pathname: '/engine/new-rule/contacts',
                  state: {
                    engineName: this.props.props.location.state.engineName,
                  },
                }}
              >
                Next <Icon name="arrow right" size="small" />
              </Button>
            </Grid.Column>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
      </Grid>
    );
  }
}

export default AddRuleToEngine;
