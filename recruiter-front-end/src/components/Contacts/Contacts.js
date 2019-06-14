import React from 'react';
import User from '../User';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/index';
import { Link } from 'react-router-dom';
import { Card, Container } from 'semantic-ui-react';
class Contacts extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
    };
  }
  componentDidMount() {
    let url = process.env.REACT_APP_BACKEND_URL;
    this.props.getUsers(url);
    // this.setState({
    //   contacts: this.props.contacts,
    // });
  }

  getContacts = () => {
    let url = process.env.REACT_APP_BACKEND_URL;
    this.props.getContacts(url);
  };

  render() {
    this.state.contacts.length < 1 ? (
      <Container fluid>
        {' '}
        <p>You don't have any contacts yet.</p>{' '}
      </Container>
    ) : (
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

const mapStateToProps = state => {
  return {
    users: state.users,
    error: state.error,
  };
};

export default connect(
  mapStateToProps,
  { getUsers },
)(Users);
