import React from 'react';
import { Form, Button, Container } from 'semantic-ui-react';
import axios from 'axios';

class EditGroupForm extends React.Component {
  state = {
    addressee_type: '',
    group_name: '',
  };

  updateGroup = () => {
    this.setState({ addressee_type: this.state.group_name });
    axios
      .put(
        'https://recruiter-back-end.herokuapp.com/groups/',
        this.state.addressee_type,
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
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
              value={this.state.group_name}
              type="text"
              name="group_name"
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

export default EditGroupForm;
