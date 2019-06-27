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
import { Link, Route, Switch, Router } from 'react-router-dom';
import { AddRuleToEngine } from './AddRuleToEngine';
import history from '../../history';


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

  componentDidMount() {
    if (!token || !tokenHeader) {
const token = sessionStorage.getItem('token');
const tokenHeader = { headers: { token: `${token}` } };
    }
  }


  deleteRule = (engineid, ruleid) => {
    // console.log(engineid, ruleid, 'e, r');
    this.props
      .deleteRule(engineid, ruleid)
      .then(() => this.props.getRules(engineid))
      .catch(err => {
        // console.log(err, 'error from .catch in deleteRule in enginecard.js');
      });
  };

  deleteEngine = () => {
    Axios.delete(
      `https://recruiter-back-end.herokuapp.com/engines/${this.props.engine.id}`,
      tokenHeader,
    )
      .then(res => console.log())
      .catch(error => console.log());
  };

  open = () => this.setState({ open: true });
  handleCancel = () => this.setState({ open: false });
  handleConfirm = () => {
    this.deleteEngine();
    this.handleCancel();
  };

  addNewRuleToEngine = () => {
    //
  };

  render() {
    return (
      <>
        <Card centered color="blue">
          {/* <Card.Content> */}
          <Card.Content>
            <Header as="h2" content={this.props.engine.engine_name} />
            {/* <Button>Add Rule</Button> */}
            <Link
              to={{
                pathname: '/engine/new-rule/',
                state: {
                  engineName: this.props.engine.engine_name,
                  // engineID: this.props.engine.id,
                  engineID: this.props.engine.id,
                },
              }}
            >
              Add New Rule To Engine
            </Link>
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
