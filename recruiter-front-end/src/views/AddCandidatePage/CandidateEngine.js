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

  handleEngine = (e, { value }) => {
    this.setState({ engine: value });
  };

  handleSubmit = e => {
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
                  <Step.Title>Experience</Step.Title>
                </Step.Content>
              </Step>
              <Step link href="/new-candidate/experience">
                <Step.Content>
                  <Step.Title>Contacts</Step.Title>
                </Step.Content>
              </Step>
            </Step.Group>
            {this.state.engines.length > 0 ? (
              <>
                {' '}
                <Header>
                  Which rule engine do you want to run the candidate through?
                </Header>{' '}
                <Dropdown
                  placeholder="Select Rule Engine"
                  onChange={this.handleEngine}
                  fluid
                  clearable
                  selection
                  //   value={this.state.engine}
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
              <>
                <p>
                  {' '}
                  You don't have any engines created yet. Before you can send a
                  candidate using Recruiter Rule Engine, you need to create an
                  engine and add some rules.{' '}
                </p>{' '}
                <Button style={primaryButton} as={Link} to="/engines">
                  Create Engine
                </Button>{' '}
              </>
            )}

            <Grid.Row style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                style={primaryButton}
                as={Link}
                onClick={this.handleSubmit}
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
