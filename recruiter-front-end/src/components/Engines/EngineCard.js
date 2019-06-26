import React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  Icon,
  Container,
  Button,
  Confirm,
  Header,
  Segment,
} from 'semantic-ui-react';
import { getRules, deleteRule } from '../../actions/ruleActions';
import EngineCardRules from './EngineCardRules';
import Axios from 'axios';

const token = sessionStorage.getItem('token');
const tokenHeader = { headers: { token: `${token}` } };

class EngineCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      engine2: '',
      open: false,
    };
  }

  // componentDidMount() {
  //   this.props.getRules(this.props.engine.id).then(() => {
  //     console.log('from cdm', this.props.rules);
  //   });
  // }

  deleteRule = (engineid, ruleid) => {
    console.log(engineid, ruleid, 'e, r');
    this.props
      .deleteRule(engineid, ruleid)
      .then(() => this.props.getRules(engineid))
      .catch(err => {
        console.log(err, 'error from .catch in deleteRule in enginecard.js');
      });
  };

  deleteEngine = () => {
    Axios.delete(
      `https://recruiter-back-end.herokuapp.com/engines/${this.props.engine.id}`,
      tokenHeader,
    )
      .then(res => console.log(res))
      .catch(error => console.log(error));
  };

  open = () => this.setState({ open: true });
  handleCancel = () => this.setState({ open: false });
  handleConfirm = () => {
    this.deleteEngine();
    this.handleCancel();
  };

  render() {
    return (
      <>
        <Card centered color="blue">
          {/* <Card.Content> */}
          <Card.Content>
            <Header as="h2" content={this.props.engine.engine_name} />
            {/* <Icon
                  name="trash alternate"
                  color="red"
                  size="large"
                  onClick={this.open}
                />
            <Confirm open={this.state.open} 
          content={`Are you sure you want to delete the ${this.props.engine.engine_name} engine?`}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm} /> */}
          </Card.Content>
          {/* </Card.Content> */}
          <Segment attached>
            <EngineCardRules
              engineRule={this.props.engine.id}
              deleteRule={this.deleteRule}
              fallbackName={this.props.engine.fallbackName}
              fallbackEmail={this.props.engine.fallbackEmail}
            />
          </Segment>
        </Card>
      </>
    );
  }
}

const mapStateToProps = ({}) => ({});

export default connect(
  mapStateToProps,
  { getRules, deleteRule },
)(EngineCard);
