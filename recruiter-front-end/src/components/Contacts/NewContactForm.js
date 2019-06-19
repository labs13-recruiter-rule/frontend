import React from 'react';
import { Button, Form, Container, Segment } from 'semantic-ui-react';
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
            <Form.Input
              label="Name"
              value={this.state.contact.name}
              onChange={this.handleChange}
              type="text"
              name="name"
              placeholder="Jane Doe"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              label="Email"
              value={this.state.contact.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="example@email.com"
            />
          </Form.Field>
          <Button color="green" type="submit">
            Submit Contact
          </Button>
          <Button
            color="red"
            type="button"
            floated="right"
            onClick={() => this.props.handleModalClose()}
          >
            Cancel
          </Button>
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
