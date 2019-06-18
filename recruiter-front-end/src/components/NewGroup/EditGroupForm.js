import React from 'react';
import { Form, Button, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateGroup } from '../../actions';

class EditGroupForm extends React.Component {
  state = {
    addressee_type: '',
    groupcontact_id: null,
  };

  updateGroup = () => {
    this.props.updateGroup(this.state.groupcontact_id);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container className="form-container">
        <Form>
          <Form.Field>
            <label htmlFor="name">Contact Group Name</label>
            <input
              onChange={this.handleChange}
              value={this.state.addressee_type}
              type="text"
              name="addressee_type"
              placeholder={this.state.addressee_type}
            />
          </Form.Field>
          <Button type="submit" onClick={this.createGroup}>
            Create Group
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = ({ addressee_type }) => ({
  addressee_type,
});

export default connect(
  mapStateToProps,
  { updateGroup },
)(EditGroupForm);
