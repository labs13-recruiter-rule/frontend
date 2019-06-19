import React from 'react';
import { Button, Form, Container, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateContact } from '../../../actions';
import { withRouter } from 'react-router-dom';

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {
        name: this.props.contactname,
        email: this.props.contactemail,
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

  submitEdittedContact = e => {
    this.props
      .updateContact(this.props.contactid, this.state.contact)
      .then(() => this.props.handleModalClose())
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Container className="form-container">
        <Form onSubmit={this.submitEdittedContact}>
          <Form.Field>
            <Form.Input
              label="name"
              onChange={this.handleChange}
              type="text"
              name="name"
              defaultValue={this.props.contactname}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              label="email"
              onChange={this.handleChange}
              type="email"
              name="email"
              defaultValue={this.props.contactemail}
            />
          </Form.Field>
          <Button color="green" type="submit">
            Update
          </Button>
          <Button
            color="red"
            type="button"
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
  { updateContact },
)(withRouter(EditContact));
