import React from 'react';
import {
  Grid,
  Button,
  Modal,
  Header,
  Icon,
  Progress,
  Step,
  Form,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const token = sessionStorage.getItem('token');
const tokenHeader = { headers: { token: `${token}` } };

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fallbackName: '',
      fallbackEmail: '',
      invalidEmail: false,
      hasContactEmail: true,
    };
  }

  componentDidMount() {
    console.log('Confirmation this.props', this.props);
    // if (this.props.rule.contactEmail.length === 0) {
    //   this.setState({ hasContactEmail: false });
    // }
  }

  addFallback = e => {
    e.preventDefault();
    Axios.put(`https://recruiter-back-end.herokuapp.com/engines/${this.props.engine_id}`, {fallbackName: this.state.fallbackName, fallbackEmail: this.state.fallbackEmail } , tokenHeader)
    .then(res => console.log(res)).catch(err=> console.log(err))
  }

  handleSubmit = e => {
    // check if an email is valid
    function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    if (validateEmail(this.state.fallbackEmail)) {
      e.preventDefault();
      this.props.fallbackName(this.state.fallbackName);
      this.props.fallbackEmail(this.state.fallbackEmail);
      //  submitRule calls parseMyRule() in App.js
      this.props.submitRule();
    } else {
      e.preventDefault();
      this.setState({ invalidEmail: true });
    }
  };

  handleName = e => {
    this.setState({ fallbackName: e.target.value });
  };

  handleEmail = e => {
    this.setState({ fallbackEmail: e.target.value });
  };

  render() {
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

    const center = {
      textAlign: 'center',
    };

    return (
      <Grid columns={12} style={{ marginTop: '25px' }}>
        <Grid.Row centered>
          <Grid.Column width={1} />
          <Grid.Column width={10} centered style={flexContainer}>
            <Progress percent={92} />
            <Step.Group widths={6}>
              <Step>
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
                  <Step.Content>
                    <Step.Title>Skills</Step.Title>
                  </Step.Content>
                </Link>
              </Step>
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to="/new-rule/experience">
                    <Step.Title>Experience</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
              <Step active>
                <Step.Content>
                  <Link style={linkStyles} to="/new-rule/confirmation">
                    <Step.Title>Confirmation</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
            </Step.Group>
            <Modal open={!this.state.hasContactEmail} size="small">
              <Header icon="warning sign" content="Invalid contact email" />
              <Modal.Content>
                <p style={{ center }}>
                  A valid email is required to create a rule. Please add a
                  contact name and email. This contact will recieve an email
                  when a candidate meets the requirements for your rule engine.
                </p>
              </Modal.Content>
              <Modal.Actions>
                <Button
                  color="green"
                  onClick={() => this.setState({ hasContactEmail: true })}
                  as={Link}
                  to={'/new-rule/contacts'}
                >
                  <Icon name="checkmark" /> Okay
                </Button>
              </Modal.Actions>
            </Modal>

            {this.props.rule.contactEmail.length === 0 ? null : (
              <p style={center}>
                If a candidate passes these rules then they will be sent to{' '}
                {this.props.rule.contactEmail[0]}
              </p>
            )}

            {this.props.rule.education.length === 0 ? null : (
              <p style={center}>
                Minimum level of education required is a{' '}
                {this.props.rule.education[0]}
              </p>
            )}

            {this.props.rule.majors.length === 0 ? null : (
              <p style={center}>
                The candidate must have majored in{' '}
                {this.props.rule.majors
                  .join(', ')
                  .replace(/,(?!.*,)/gim, ' and')}
              </p>
            )}

            {this.props.rule.minExp === null ? null : (
              <p style={center}>
                The experience required for this rule is at least{' '}
                {this.props.rule.minExp} years of experience
              </p>
            )}

            {this.props.rule.maxExp === null ? null : (
              <p style={center}>
                The maximum experience allowed for this rule is{' '}
                {this.props.rule.maxExp} years of experience
              </p>
            )}

            {this.props.rule.skills.length === 0 ? null : (
              <p style={center}>
                The skills required for this rule are{' '}
                {this.props.rule.skills
                  .join(', ')
                  .replace(/,(?!.*,)/gim, ' and')}
              </p>
            )}
            <Header as="h3" style={center}>
              If a candidate does not meet the education, skills and experience
              requirements listed above, where should we send them?
            </Header>
            {/* <Dropdown
              placeholder="Select Contact"
              fluid
              selection
              onChange={this.handleChange}
              value={this.state.contacts}
              options={this.state.userContacts.map(contact => {
                return {
                  key: contact.id,
                  text: contact.name + ' | ' + contact.email,
                  value: contact.email
                };
              })}
             /> */}
            <Form>
              <Form.Field>
                <Form.Input
                  label="Name"
                  value={this.state.fallbackName}
                  onChange={this.handleName}
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                />
                <p>{this.state.fallbackName}</p>
              </Form.Field>
              <Form.Field required>
                <Form.Input
                  label="Email"
                  value={this.state.fallbackEmail}
                  onChange={this.handleEmail}
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                />
              <p>{this.state.fallbackEmail}</p>
              </Form.Field>

              <Button onClick={this.addFallback}>Add Fallback Contact</Button>
              </Form> 
              <Grid.Column
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Button style={primaryButton} as={Link} to="/new-rule/skills">
                  <Icon name="arrow left" size="small" />
                  Back
                </Button>
                <Button
                  style={primaryButton}
                  onClick={this.handleSubmit}
                  as={Link}
                  to="/new-rule/success"
                >
                  Submit
                </Button>
              </Grid.Column>
            
            <Modal open={this.state.invalidEmail} size="small">
              <Header icon="warning sign" content="Invalid email" />
              <Modal.Content>
                <p style={{ center }}>
                  A valid email is required to create a rule. Please add a
                  fallback name and email. This contact will recieve an email
                  when a candidate does <strong>not</strong> meet the conditions
                  for your rule engine.
                </p>
              </Modal.Content>
              <Modal.Actions>
                <Button
                  color="green"
                  onClick={() => this.setState({ invalidEmail: false })}
                >
                  <Icon name="checkmark" /> Okay
                </Button>
              </Modal.Actions>
            </Modal>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
      </Grid>
    );
  }
}

export default Confirmation;
