import React from 'react';
import User from '../User';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/index';
import { Link, Route } from 'react-router-dom';
import {
  Card,
  Container,
  Button,
  Header,
  Segment,
  Modal,
} from 'semantic-ui-react';
import { getContacts } from '../../actions';
import SpecificContact from './SpecificContact';
import NewContactForm from './NewContactForm';

class Contacts extends React.Component {
  state = {
    contacts: [],
    modalOpen: false,
  };

  componentDidMount() {
    this.props.getContacts();
  }

  delContact() {
    console.log('deleted? nah lol');
  }

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
                <SpecificContact contact={contact} key={contact.id} />
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
  { getContacts },
)(Contacts);
