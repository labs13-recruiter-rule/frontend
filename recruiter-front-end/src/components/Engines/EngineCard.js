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

  componentDidMount() {
    this.props.getRules(this.props.engine.id);
  }

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
          <Header.Subheader as="h2">
            {this.props.rules && this.props.rules.length === 1
              ? `${this.props.rules.length} Rule`
              : //   : `${this.props.rules.length} Rules`}
              this.props.rules && this.props.rules.length > 1
              ? `${this.props.rules.length} Rules`
              : `No Rules Added`}
          </Header.Subheader>
        </Card.Content>

        {/* </Card.Content> */}
        {this.props.rules.length < 1 ? (
          'No Rules'
        ) : (
          <Segment>
            {this.props.rules.map((rule, i) => (
              <EngineCardRules
                rule={rule.rule}
                key={rule.id}
                engineRule={rule}
                count={i + 1}
                deleteRule={this.deleteRule}
              />
            ))}
          </Segment>
        )}
      </Card>
    );
  }
}

const mapStateToProps = ({ rules }) => ({
  rules,
});

export default connect(
  mapStateToProps,
  { getRules, deleteRule },
)(EngineCard);
