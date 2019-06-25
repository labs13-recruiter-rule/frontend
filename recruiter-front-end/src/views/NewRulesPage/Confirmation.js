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
  Dropdown
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const token = sessionStorage.getItem('token');
const tokenHeader = { headers: { token: `${token}` } };

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fallbackName: '',
      fallbackEmail: '',
      invalidEmail: false,
      // userContacts: []
    };
  }

  // componentDidMount() {
  //   axios
  //     .get('https://recruiter-back-end.herokuapp.com/contacts', tokenHeader)
  //     .then(res => {
  //       this.setState({ userContacts: res.data });
  //     })
  //     .catch(error => console.log(error));
  // }


  handleSubmit = e => {
    if (this.state.fallbackEmail === '') {
      e.preventDefault();
      this.setState({ invalidEmail: true });
    } else {
      e.preventDefault();
      this.props.fallbackName(this.state.fallbackName);
      this.props.fallbackEmail(this.state.fallbackEmail);
      //  submitRule calls parseMyRule() in App.js
      this.props.submitRule();
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
                    <Step.Title>Contacts</Step.Title>
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
            <Header as="h3" style={center}>
              If a candidate does not meet the education, skills and experience
              requirements to be sent to any of the contacts in this rule
              engine, where should we send them?
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
             /> */ }
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <Form.Input
                  label="Name"
                  value={this.state.fallbackName}
                  onChange={this.handleName}
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                />
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
              </Form.Field>
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
                  type="submit"
                  as={Link}
                  to="/"
                >
                  Submit
                </Button>
              </Grid.Column>
            </Form>
            <Modal open={this.state.invalidEmail} size="small">
              <Header icon="warning sign" content="Invalid email" />
              <Modal.Content>
                <p>
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
