import React from 'react';
import {
  Grid,
  Dropdown,
  Header,
  Step,
  Progress,
  Button,
  Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const flexContainer = {
  display: 'flex',
  flexDirection: 'column'
};

const centerIt = {
  display: 'flex',
  flexDirection: 'column',
  padding: '4rem',
  alignItems: 'center',
  justifyContent: 'center'
}


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

const token = sessionStorage.getItem('token');
const tokenHeader = { headers: { token: `${token}` } };

class CandidateEngine extends React.Component {
  state = {
    engines: [],
    engine: '',
  };

  componentDidMount() {
    Axios.get('https://recruiter-back-end.herokuapp.com/engines', tokenHeader)
      .then(res => this.setState({ engines: res.data }))
      .catch(error => console.log(error));
  }

  handleChange = (e, { value }) => {
    console.log('CandidateEngine handleEngine', e);
    this.setState(prevState => ({ engine: value }));
  };

  handleSubmit = e => {
    console.log('CandidateEngine handleSubmit', this.state.engine);
    this.props.candidateEngine(this.state.engine);
  };

  render() {
    return (
      <Grid columns={12}>
        <Grid.Row centered>
          <Grid.Column width={1} />
          <Grid.Column width={10} centered style={flexContainer}>
            <Progress percent={10} />
            <Step.Group widths={6}>
              <Step active link href="/new-candidate/engine">
                <Step.Content>
                  <Step.Title>Engine</Step.Title>
                </Step.Content>
              </Step>
              <Step link href="/new-candidate/contact">
                <Step.Content>
                  <Step.Title>Contact</Step.Title>
                </Step.Content>
              </Step>
              <Step link href="/new-candidate/education">
                <Step.Content>
                  <Step.Title>Education</Step.Title>
                </Step.Content>
              </Step>
              <Step link href="/new-candidate/skills">
                <Step.Content>
                  <Step.Title>Skills</Step.Title>
                </Step.Content>
              </Step>
              <Step link href="/new-candidate/experience">
                <Step.Content>
                  <Step.Title>Experience</Step.Title>
                </Step.Content>
              </Step>
              <Step link href="/new-candidate/confirm">
                <Step.Content>
                  <Step.Title>Confirm</Step.Title>
                </Step.Content>
              </Step>
            </Step.Group>
            {this.state.engines.length > 0 ? (
              <>
                {' '}
                <Header textAlign="center">
                  Which rule engine do you want to run the candidate through?
                </Header>{' '}
                <Dropdown
                  placeholder="Select Rule Engine"
                  fluid
                  selection
                  value={this.state.engine}
                  onChange={this.handleChange}
                  options={this.state.engines.map(engine => {
                    return {
                      key: engine.id,
                      text: engine.engine_name,
                      value: engine.id,
                    };
                  })}
                />{' '}
              </>
            ) : (
              <Grid style={flexContainer}>
                <Header as="h3">
                  {' '}
                  You don't have any engines created yet. You must create an engine before sending a candidate.{' '}
                </Header>
                <Button style={primaryButton} as={Link} to="/new-rule/engine">
                  Create Engine
                </Button>
              </Grid>
            )}
            <Grid.Row style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                style={primaryButton}
                onClick={this.handleSubmit}
                as={Link}
                to="/new-candidate/contact"
              >
                Next <Icon name="arrow right" size="small" />
              </Button>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
      </Grid>
    );
  }
}

export default CandidateEngine;
