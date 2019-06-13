import React from 'react';
import { Button, Form, Container } from 'semantic-ui-react';
import Axios from 'axios';

class NewCandidate extends React.Component {
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
      'https://recruiter-back-end.herokuapp.com/users/1/contacts',
      this.state,
    )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container className="form-container">
        <p>You have no contacts. Add your first contact</p>
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
          <Button type="submit" onClick={this.createContact}>
            Create Contact
          </Button>
        </Form>
      </Container>
    );
  }
}

export default NewCandidate;
