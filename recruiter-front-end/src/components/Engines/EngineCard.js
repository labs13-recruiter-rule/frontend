import React from 'react';
import { connect } from 'react-redux';
import { Card, Container, Button, Header, Segment } from 'semantic-ui-react';
import { getRules } from '../../actions/ruleActions';
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

  render() {
    return (
      <Card centered color="blue">
        {/* <Card.Content> */}
        <Header as="h2" content={this.props.engine.engine_name} />
        <Header.Subheader>
          {this.props.rules && this.props.rules.length > 1
            ? `${this.props.rules.length} Rules`
            : `${this.props.rules.length} Rule`}
        </Header.Subheader>

        {/* </Card.Content> */}
        {this.props.rules.length < 1 ? (
          'No Rules'
        ) : (
          <Segment>
            {this.props.rules.map(rule => (
              <EngineCardRules rule={rule.rule} key={rule.id} />
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
