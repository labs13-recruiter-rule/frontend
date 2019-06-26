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
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NewContactForm from '../../components/Contacts/NewContactForm';
const token = sessionStorage.getItem('token');
const tokenHeader = { headers: { token: `${token}` } };

class ContactsClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newContactName: '',
      newContactEmail: '',
      userContacts: [],
      selectedContacts: [],
      contact: [],
      modalOpen: false,
      contactSelected: true,
    };
  }

  componentDidMount() {
    this.getContacts();
  }

  getContacts() {
    axios
      .get('https://recruiter-back-end.herokuapp.com/contacts', tokenHeader)
      .then(res => {
        this.setState({ userContacts: res.data });
      })
      .catch(error => console.log(error));
  }

  handleModalOpen = () => this.setState({ modalOpen: true });

  handleModalClose = () =>
    this.setState({ modalOpen: false }, () => this.getContacts());

  handleName = e => {
    this.setState({ newContactName: e.target.value });
  };

  handleEmail = e => {
    this.setState({ newContactEmail: e.target.value });
  };

  handleChange = (e, { value }) => {
    this.setState({ selectedContacts: value });
  };

  handleSubmit = e => {
    if (this.state.selectedContacts.length === 0) {
      e.preventDefault();
      this.setState({ contactSelected: false });
    } else {
      this.props.contactName(this.state.newContactName);
      this.props.contactEmail(this.state.newContactEmail);
      this.props.contactContacts(this.state.selectedContacts);
    }
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
        <Modal open={!this.state.contactSelected} size="small">
          <Header icon="warning sign" content="Invalid conctacts" />
          <Modal.Content>
            <p style={{ center }}>
              Please select more or more contacts or add a contact to continue.
              This contact or these contacts will receive an email when a
              candidate meets the conditions for your rule engine.
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              color="green"
              onClick={() => this.setState({ contactSelected: true })}
            >
              <Icon name="checkmark" /> Okay
            </Button>
          </Modal.Actions>
        </Modal>

        <button
          onClick={() => console.log('NewRuleContacts this.state', this.state)}
        >
          NewRuleContacts this.state
        </button>
        <Grid.Row centered>
          <Grid.Column width={1} />
          <Grid.Column width={10} centered style={flexContainer}>
            <Progress percent={25} />
            <Step.Group widths={6}>
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to="/new-rule/engine">
                    <Step.Title>Engine</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
              <Step active>
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
              Choose contacts for your first rule. On the following pages, you
              will select the education, experience, and skills requirements a
              candidate must meet to be sent to be sent to the contacts.
            </Header>

            {this.state.userContacts.length > 0 ? (
              <>
                <Dropdown
                  placeholder="Select Contacts"
                  style={{ width: '50%', margin: '20px auto' }}
                  fluid
                  multiple
                  selection
                  onChange={this.handleChange}
                  value={this.state.contacts}
                  options={this.state.userContacts.map(contact => {
                    return {
                      key: contact.id,
                      text: contact.name + ' | ' + contact.email,
                      value: contact.email,
                    };
                  })}
                />{' '}
              </>
            ) : (
              <></>
            )}
            {/**need to actually make it record the ones that the user chose and add them to the rule request */}
            {/* <Form>
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
            </Form> */}
            <Modal
              size="mini"
              trigger={
                <Button
                  color="green"
                  onClick={this.handleModalOpen}
                  style={{ width: '50%', margin: '0 auto' }}
                >
                  Add Contact
                </Button>
              }
              open={this.state.modalOpen}
              onClose={this.handleModalClose}
            >
              <Modal.Content>
                <NewContactForm handleModalClose={this.handleModalClose} />
              </Modal.Content>
            </Modal>
            <p
              style={{
                width: '90%',
                margin: '35px auto 0',
                textAlign: 'center',
                lineHeight: '1.75',
              }}
            >
              <strong>Note:</strong> If you select more than one contact for a
              rule, those contacts will be sent an email together as a group. If
              you don't want the contacts to receive an email together, create a
              separate rule with the same candidate requirements for each
              contact and they will be sent separately. You will have the
              opportunity to add more rules to this engine after creating your
              first one.
            </p>
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
