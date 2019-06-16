import React from 'react';
import User from '../User';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/index';
import { Link } from 'react-router-dom';
import { Card, Container } from 'semantic-ui-react';
import Axios from 'axios';

const token = sessionStorage.getItem('token');

class Contacts extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
    };
  }
  componentDidMount() {
    this.getUsers();
    // this.setState({
    //   contacts: this.props.contacts,
    // });
  }

  getContacts = () => {
    Axios.get('https://recruiter-back-end.herokuapp.com/contacts/', {
      headers: {
        token: `${token}`,
      },
    })
      .then(res => this.setState({ contacts: res.data }))
      .catch(error => console.log(error));
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

export default Contacts;
