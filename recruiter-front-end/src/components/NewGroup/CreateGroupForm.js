import React from 'react';
import { Form, Button, Container, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createGroup } from '../../actions';

class CreateGroupForm extends React.Component {
  state = {
    addressee_type: '',
    group_name: '',
  };

  createGroup = () => {
    this.setState({ addressee_type: this.state.group_name });
    this.props.createGroup(this.state.addressee_type);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const primaryButton = {
      margin: '50px',
      height: '5rem',
      width: '300px',
      fontSize: '1.25rem',
      fontStyle: 'italic',
    };

    const linkStyles = {
      textAlign: 'center',
      color: 'rgba(0,0,0,.87)',
    };

    return (
      <Container className="form-container">
        {this.state.addressee_type.length > 0 ? (
          <div>
            <p>{this.state.addressee_type}</p>
            <Button>Change Group Name</Button>
          </div>
        ) : (
          <Form onSubmit={this.createGroup}>
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
            {/* <Link style={linkStyles} to="/new-rule/skills">
              <Button style={primaryButton} onClick={this.handleSubmit}>
                Next <Icon name="arrow right" size="small" />
              </Button>
            </Link> */}
          </Form>
        )}
      </Container>
    );
  }
}

const mapStateToProps = ({ addressee_type }) => ({
  addressee_type,
});

export default connect(
  mapStateToProps,
  { createGroup },
)(CreateGroupForm);
