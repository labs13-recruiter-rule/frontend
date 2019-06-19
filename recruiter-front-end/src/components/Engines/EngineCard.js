import React from 'react';
import { connect } from 'react-redux';
import { Card, Container, Button, Header, Segment } from 'semantic-ui-react';
import { getRules } from '../../actions/ruleActions';

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

  render() {
    return (
      <Card>
        <Card.Content>{this.props.engine.engine_name}</Card.Content>
        {this.props.rules.length < 1 ? (
          'No Rules'
        ) : (
          <Segment>
            {this.props.rules.map(rule => (
              <>
                <h1>{rule.conditions}</h1>
                <h2>{rule.user_id}</h2>
              </>
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
  { getRules },
)(EngineCard);
