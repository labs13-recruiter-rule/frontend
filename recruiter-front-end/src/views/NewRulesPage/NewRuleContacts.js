import React from 'react';
import {
  Grid,
  Progress,
  Step,
  Modal,
  Button,
  Dropdown,
  Header,
  Icon,
  Form,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const token = sessionStorage.getItem('token');
const tokenHeader = {headers: {token: `${token}`}} 

class ContactsClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newContactName: '',
      newContactEmail: '',
      contacts: []
    };
  }

  componentDidMount() {
    axios.get('https://recruiter-back-end.herokuapp.com/contacts', tokenHeader).then(res => this.setState({contacts: res.data})).catch(error => console.log(error))
  }

  handleName = e => {
    this.setState({ newContactName: e.target.value });
  };

  handleEmail = e => {
    this.setState({ newContactEmail: e.target.value });
  };

  handleSubmit = e => {
    this.props.contactName(this.state.newContactName);
    this.props.contactEmail(this.state.newContactEmail);
  };

  render() {
    const flexContainer = {
      display: 'flex',
      flexDirection: 'column',
    };

    const center = {
      textAlign: 'center',
    };

    const linkStyles = {
      textAlign: 'center',
      color: 'rgba(0,0,0,.87)',
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

    return (
      <Grid columns={12} style={{ marginTop: '25px' }}>
        <Grid.Row centered>
          <Grid.Column width={1} />
          <Grid.Column width={10} centered style={flexContainer}>
            <Progress percent={70} />
            <Step.Group widths={6}>
            <Step>
                      <Step.Content>
                        <Link style={linkStyles} to="/new-rule/engine">
                          <Step.Title>Create Rule Engine</Step.Title>
                        </Link>
                      </Step.Content>
                    </Step>
                    <Step active>
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
                <Step.Content>
                  <Link style={linkStyles} to="/new-rule/skills">
                    <Step.Title>Skills</Step.Title>
                  </Link>
                </Step.Content>
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
            <Header as="h3" style={center}>
              Choose a contact for the rule you'll create on the following pages. Choose from existing contacts or add a new contact, and then you'll decide what qualifications a candidate needs to meet to be sent to that contact.
            </Header>
            <Dropdown  placeholder="Select Contacts"
    fluid
    selection
    options={this.state.contacts.map(contact=> {return {'key': contact.id, 'text': contact.name + " | " + contact.email, 'value': contact.id }})} /> 
            <Form>
              <Form.Field>
                <Form.Input
                  label="Name"
                  value={this.state.newContactName}
                  onChange={this.handleName}
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label="Email"
                  value={this.state.newContactEmail}
                  onChange={this.handleEmail}
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                />
              </Form.Field>
            </Form>
            <Grid.Column
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Button style={primaryButton} as={Link} to="/new-rule/engine">
                <Icon name="arrow left" size="small" />
                Back
              </Button> 
              <Button
                style={primaryButton}
                onClick={this.handleSubmit}
                as={Link}
                to="/new-rule/education"
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

export default ContactsClass;
