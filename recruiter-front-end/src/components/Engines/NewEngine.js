import React from 'react';
import { Form, Button, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addEngine } from '../../actions';

class NewEngine extends React.Component {
  state = {
    engine: {
      engine_name: '',
    },
  };

  handleChange = e => {
    this.setState({
      engine: {
        ...this.state.engine,
        [e.target.name]: e.target.value,
      },
    });
  };

  createEngine = e => {
    // console.log('from ne state', this.state.engine);
    this.props
      .addEngine(this.state.engine)
      .then(() => this.props.handleModalClose());
  };

  render() {
    return (
      <Form onSubmit={this.createEngine}>
        <Form.Field>
          <Form.Input
            label="Engine Name"
            value={this.state.engine.engine_name}
            onChange={this.handleChange}
            type="text"
            name="engine_name"
            placeholder="JavaScript FE Engineers"
          />
        </Form.Field>
        <Button color="green" type="submit">
          Save Engine
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
    );
  }
}

const mapStateToProps = ({ engine }) => ({
  engine,
});

export default connect(
  mapStateToProps,
  { addEngine },
)(NewEngine);
