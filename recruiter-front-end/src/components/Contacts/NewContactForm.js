import React from 'react';
import { Button, Form, Container } from 'semantic-ui-react';
import Axios from 'axios';

const token = sessionStorage.getItem('token');

class NewContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createContact = e => {
    Axios.post(
      'https://recruiter-back-end.herokuapp.com/contacts/',
      this.state,
      {
        headers: {
          token: `${token}`,
        },
      },
    )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container className="form-container">
        <Form>
          <Form.Field>
            <label htmlFor="name">Name</label>
            <input
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              name="name"
              placeholder="Name"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="email">Email</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="Email"
            />
          </Form.Field>
        </Form>
      </Container>
    );
  }
}

export default NewContact;
