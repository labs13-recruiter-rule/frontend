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
const tokenHeader = { headers: { token } };

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

class NewEngineRuleView extends React.Component {
  state = {
    engines: [],
    engine: '',
  };

  componentDidMount() {
    Axios.get('https://recruiter-back-end.herokuapp.com/engines', tokenHeader)
      .then(res => this.setState({ engines: res.data }))
      .catch(error => console.log(error));
  }

  handleEngineName = e => {
    this.setState({ engine: e.target.value });
  };

  handleSubmit = () => {
    console.log('token header', tokenHeader)
    Axios.post(
      'https://recruiter-back-end.herokuapp.com/engines',
      { engine_name: this.state.engine },
      tokenHeader,
    )
      .then(res => {
        this.props.candidateEngine(res.data.newEngine.id);
        console.log('posted handlesubmit newengine', res.data.newEngine.id);
      })
      .catch(err => {
        console.log('from error handlesubmit', err);
      });
  };

  render() {
    return (
      <Grid columns={12} style={{ marginTop: '25px' }}>
        <Grid.Row centered>
          <Grid.Column width={1} />
          <Grid.Column width={10} centered style={flexContainer}>
            <Progress percent={10} />
            <Step.Group widths={6}>
              <Step active>
                <Step.Content>
                  <Link style={linkStyles} to="/new-rule/engine">
                    <Step.Title>Engine</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to="/new-rule/contacts">
                    <Step.Title>Rule Contacts</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to="/new-rule/education">
                    <Step.Title>Education</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
              <Step>
                <Link style={linkStyles} to="/new-rule/skills">
                  <Step.Title>Skills</Step.Title>
                </Link>
              </Step>
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to="/new-rule/experience">
                    <Step.Title>Experience</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to="/new-rule/confirmation">
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
                    Create your first rule engine. What would you like to name
                    your engine?
                  </Header>

                  <Form>
                    <Form.Field>
                      <Form.Input
                        label="Engine Name"
                        value={this.state.engine}
                        onChange={this.handleEngineName}
                        type="text"
                        name="engine_name"
                        placeholder="Example Engine"
                      />
                    </Form.Field>
                  </Form>
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
                onClick={this.handleSubmit}
                as={Link}
                to="/new-rule/contacts"
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

export default NewEngineRuleView;
