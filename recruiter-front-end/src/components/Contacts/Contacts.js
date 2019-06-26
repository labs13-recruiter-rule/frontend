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
import ExampleContact from './SpecificContact/ExampleContact';

class Contacts extends React.Component {
  state = {
    contacts: [],
    modalOpen: false,
    exampleContact: {
      name: 'Jane Exampleson',
      email: 'example@email.com',
      id: 28384747,
    },
  };

  componentDidMount() {
    this.props.getContacts();
  }

  delContact = contact_id => {
    this.props.deleteContact(contact_id);
  };

  handleModalOpen = () => this.setState({ modalOpen: true });

  handleModalClose = () =>
    this.setState({ modalOpen: false }, () => this.props.getContacts());

  render() {
    return (
      <Container fluid>
        <Segment clearing>
          <Header
            as="h3"
            content="Manage Contacts"
            subheader="Contacts that you add will be available to receive candidates from your engines"
            floated="left"
          />

          <Modal
            size="tiny"
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
        {this.props.contacts.length < 1 ? (
          <Segment attached>
            <Card.Group>
              <ExampleContact
                contact={this.state.exampleContact}
                key={this.state.exampleContact.id}
              />
            </Card.Group>
          </Segment>
        ) : (
          <Segment attached>
            <Card.Group itemsPerRow={3} stackable doubling>
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
        )}
      </Container>
    );
  }
}
// }

const mapStateToProps = ({ contacts }) => ({
  contacts,
});

export default connect(
  mapStateToProps,
  { getContacts, deleteContact },
)(Contacts);
