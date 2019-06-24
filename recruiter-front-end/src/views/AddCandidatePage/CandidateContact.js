import React from 'react';
import {
  Grid,
  Form,
  Input,
  Step,
  Progress,
  Button,
  Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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

const SkillsTags = () => <Input placeholder="Enter Skill" />;

class CandidateContactInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      candidateLinkedIn: '',
    };
  }

  handleName = e => {
    this.setState({ name: e.target.value });
  };

  handleEmail = e => {
    this.setState({ email: e.target.value });
  };

  handleLinkedIn = e => {
    this.setState({ candidateLinkedIn: e.target.value });
  };

  handleSubmit = e => {
    this.props.candidateName(this.state.name);
    this.props.candidateEmail(this.state.email);
    this.props.candidateLinkedIn(this.state.candidateLinkedIn);
  };

  render() {
    return (
      <Grid columns={12} style={{ marginTop: '25px' }}>
        <Grid.Row centered>
          <Grid.Column width={1} />
          <Grid.Column width={10} centered style={flexContainer}>
            <Progress percent={30} />
            <Step.Group widths={6}>
              <Step link href="/new-candidate/engine">
                <Step.Content>
                  <Step.Title>Engine</Step.Title>
                </Step.Content>
              </Step>
              <Step active link href="/new-candidate/contact">
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
            <Form>
              <Form.Field>
                <Form.Input
                  label="Name"
                  value={this.state.name}
                  onChange={this.handleName}
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label="Email"
                  value={this.state.email}
                  onChange={this.handleEmail}
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label="LinkedIn"
                  value={this.state.candidateLinkedIn}
                  onChange={this.handleLinkedIn}
                  type="LinkedIn"
                  name="LinkedIn"
                  placeholder="linkedin.com/username"
                />
              </Form.Field>
            </Form>
            <Grid.Row style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
                style={primaryButton}
                as={Link}
                to="/new-candidate/engine"
              >
                <Icon name="arrow left" size="small" />
                Back
              </Button>
              <Button
                style={primaryButton}
                as={Link}
                onClick={this.handleSubmit}
                to="/new-candidate/education"
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

export default CandidateContactInfo;
