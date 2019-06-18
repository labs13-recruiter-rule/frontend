import React from 'react';
import { Button, Form, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addContact } from '../../actions';

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
    this.props.addContact(
      'https://recruiter-back-end.herokuapp.com/contacts/',
      this.state,
    );
  };

  render() {
    return (
      <Container className="form-container">
        <Form onSubmit={this.createContact}>
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
          <Button type="submit">Add Contact</Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = ({ contact }) => ({
  contact,
});

export default connect(
  mapStateToProps,
  { addContact },
)(NewContact);
