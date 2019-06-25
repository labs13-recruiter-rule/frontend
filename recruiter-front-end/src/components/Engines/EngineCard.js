import React from 'react';
import { connect } from 'react-redux';
import { Card, Container, Button, Header, Segment } from 'semantic-ui-react';
import { getRules, deleteRule } from '../../actions/ruleActions';
import EngineCardRules from './EngineCardRules';

class EngineCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      engine2: '',
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

  render() {
    return (
      <Card centered color="blue">
        {/* <Card.Content> */}
        <Card.Content>
          <Header as="h2" content={this.props.engine.engine_name} />
        </Card.Content>
        {/* </Card.Content> */}
        <Segment>
          <EngineCardRules
            engineRule={this.props.engine.id}
            deleteRule={this.deleteRule}
          />
        </Segment>
      </Card>
    );
  }
}

const mapStateToProps = ({}) => ({});

export default connect(
  mapStateToProps,
  { getRules, deleteRule },
)(EngineCard);
