import React from 'react';
import { Button, Form, Container, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addContact } from '../../actions';
import { withRouter } from 'react-router-dom';

class NewContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {
        name: '',
        email: '',
      },
    };
  }

  handleChange = e => {
    this.setState({
      contact: {
        ...this.state.contact,
        [e.target.name]: e.target.value,
      },
    });
  };

  createContact = e => {
    this.props
      .addContact(this.state.contact)
      .then(() => this.props.handleModalClose());
  };

  render() {
    return (
      <Container className="form-container">
        <Form onSubmit={this.createContact}>
          <Form.Field>
            <label htmlFor="name">Name</label>
            <input
              value={this.state.contact.name}
              onChange={this.handleChange}
              type="text"
              name="name"
              placeholder="Name"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="email">Email</label>
            <input
              value={this.state.contact.email}
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
)(withRouter(NewContact));
