import React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  Container,
  Button,
  Header,
  Segment,
  Modal,
} from 'semantic-ui-react';
import { getContacts, deleteContact } from '../../actions';
import SpecificContact from './SpecificContact/SpecificContact';
import NewContactForm from './NewContactForm';

class Contacts extends React.Component {
  state = {
    contacts: [],
    modalOpen: false,
  };

  componentDidMount() {
    this.props.getContacts();
  }

  delContact = contact_id => {
    this.props.deleteContact(contact_id);
  };

  editContact() {
    console.log('edit contact? also nah lol');
  }

  addContact() {
    console.log('added nope lol');
  }

  handleModalOpen = () => this.setState({ modalOpen: true });

  handleModalClose = () =>
    this.setState({ modalOpen: false }, () => this.props.getContacts());

  render() {
    if (this.props.contacts.length < 1) {
      return (
        <Container fluid>
          {' '}
          <p>You don't have any contacts yet.</p>{' '}
        </Container>
      );
    } else {
      return (
        <Container fluid>
          <Segment clearing>
            <Header
              as="h3"
              content="Manage your contacts"
              subheader="If you do not have any, add them here"
              floated="left"
            />
            {/* <Header attached="top" content="manage" floated="right" /> */}
            <Modal
              trigger={
                <Button
                  color="green"
                  floated="right"
                  onClick={this.handleModalOpen}
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
          </Segment>
          <Segment attached>
            <Card.Group itemsPerRow={4}>
              {this.props.contacts.map(contact => (
                <SpecificContact
                  contact={contact}
                  key={contact.id}
                  deleteContact={this.delContact}
                  refreshContacts={() => this.props.getContacts()}
                />
              ))}
            </Card.Group>
          </Segment>
        </Container>
      );
    }
  }
}

const mapStateToProps = ({ contacts }) => ({
  contacts,
});

export default connect(
  mapStateToProps,
  { getContacts, deleteContact },
)(Contacts);
