import React from 'react';
import User from '../User';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/index';
import { Link } from 'react-router-dom';
import { Card, Container } from 'semantic-ui-react';
import { getContacts } from '../../actions';

class Contacts extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: this.props.contacts,
    };
  }

  getContacts = () => {
    this.props.getContacts();
    console.log(this.state.contacts);
  };
  render() {
    if (this.state.contacts.length < 1) {
      return (
        <Container fluid>
          {' '}
          <p>You don't have any contacts yet.</p>{' '}
        </Container>
      );
    } else {
      return (
        <Container fluid>
          <Card.Group>
            {this.state.contacts.map(contact => (
              <Card>{contact}</Card>
            ))}
          </Card.Group>
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
