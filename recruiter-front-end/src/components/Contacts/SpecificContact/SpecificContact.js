import React from 'react';
import { Card, Button, Modal } from 'semantic-ui-react';
import EditContact from './EditContact';

class SpecificContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  handleModalOpen = () => this.setState({ modalOpen: true });

  handleModalClose = () => {
    this.setState({ modalOpen: false }, () => this.props.refreshContacts());
  };

  render() {
    return (
      <Card>
        <Card.Content>
          {/* <Card.Header>{this.props.contact.name}</Card.Header> */}
          <Card.Header content={this.props.contact.name} />
          <Card.Meta>{this.props.contact.email}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Modal
              trigger={
                <Button basic color="blue" onClick={this.handleModalOpen}>
                  Edit
                </Button>
              }
              open={this.state.modalOpen}
              onClose={this.handleModalClose}
            >
              <Modal.Content>
                <EditContact
                  contactname={this.props.contact.name}
                  contactemail={this.props.contact.email}
                  contactid={this.props.contact.id}
                  handleModalClose={this.handleModalClose}
                />
              </Modal.Content>
            </Modal>
            <Button
              basic
              color="red"
              onClick={() => this.props.deleteContact(this.props.contact.id)}
            >
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default SpecificContact;
