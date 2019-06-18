import React from 'react';
import { Button, Form, Container, Grid } from 'semantic-ui-react';
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
    this.props.addContact(this.state);
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
          <Grid>
            <Grid.Row style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                type="submit"
                style={{
                  margin: '20px 0 0',
                  height: '4rem',
                  width: '200px',
                  fontSize: '1.35rem',
                  fontWeight: '900',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Add Contact
              </Button>
            </Grid.Row>
          </Grid>
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
