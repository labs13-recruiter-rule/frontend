import React from 'react';
import { Form, Button, Container } from 'semantic-ui-react';
import axios from 'axios';

const token = sessionStorage.getItem('token');

class CreateGroupForm extends React.Component {
  state = {
    addressee_type: '',
    group_name: '',
  };

  createGroup = () => {
    console.log('token', token);
    this.setState({ addressee_type: this.state.group_name });
    axios
      .post(
        'https://recruiter-back-end.herokuapp.com/groups/',
        this.state.addressee_type,
        { headers: { token: `${token}` } },
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
        {this.state.addressee_type.length > 0 ? (
          <div>
            <p>{this.state.addressee_type}</p>
            <Button>Change Group Name</Button>
          </div>
        ) : (
          <Form>
            <Form.Field>
              <label htmlFor="name">Contact Group Name</label>
              <input
                onChange={this.handleChange}
                value={this.state.group_name}
                type="text"
                name="group_name"
                placeholder="Admin/Supervisor/Manager/Director/VP"
              />
            </Form.Field>
            <Button type="submit" onClick={this.createGroup}>
              Create Group
            </Button>
          </Form>
        )}
      </Container>
    );
  }
}

export default CreateGroupForm;
