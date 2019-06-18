import React from 'react';
import { Form, Button, Container, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createGroup } from '../../actions';

class CreateGroupForm extends React.Component {
  state = {
    addressee_type: '', // group name
  };

  createGroup = () => {
    this.props.createGroup();
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
                value={this.state.addressee_type}
                type="text"
                name="addressee_type"
                placeholder="Admin/Supervisor/Manager/Director/VP"
              />
            </Form.Field>
            {/* <Link style={linkStyles} to="/new-rule/skills">
              <Button style={primaryButton} onClick={this.handleSubmit}>
                Next <Icon name="arrow right" size="small" />
              </Button>
            </Link> */}

            <Button type="submit" onClick={this.createGroup}>
              Create Group
            </Button>
          </Form>
        )}
      </Container>
    );
  }
}

const mapStateToProps = ({ group }) => ({
  group,
});

export default connect(
  mapStateToProps,
  { createGroup },
)(CreateGroupForm);
