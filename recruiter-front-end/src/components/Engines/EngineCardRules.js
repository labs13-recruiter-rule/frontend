import React from 'react';
import {
  Segment,
  Card,
  Icon,
  Header,
  Grid,
  GridColumn,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getRules, deleteRule } from '../../actions/ruleActions';

class EngineCardRules extends React.Component {
  state = {
    rulesToUse: [],
  };
  componentDidMount() {
    this.props
      .getRules(this.props.engineRule)
      .then(() => {
        this.setState({ rulesToUse: this.props.rules });
        // console.log('CDM LAST', res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <Segment>
          <Card.Content>
            <Grid className="engineCardRuleGrid">
              <GridColumn width={4}>
                <Header as="h3" className="ruleHeader">
                  rule: {this.props.count}
                </Header>
              </GridColumn>
              {/* <GridColumn floated="right"></GridColumn> */}
              <GridColumn width={4} textAlign="right">
                <Icon name="edit" color="blue" size="large" />
                <Icon
                  name="trash alternate"
                  color="red"
                  size="large"
                  onClick={() =>
                    this.props.deleteRule(
                      this.props.engineRule.engine_id,
                      this.props.engineRule.id,
                    )
                  }
                />
              </GridColumn>
            </Grid>
            {/* </Segment.Group>
          <Segment.Group> */}

            {this.state.rulesToUse && this.state.rulesToUse.length > 0 ? (
              this.state.rulesToUse.map(ruleAgain => (
                <div>
                  <h1>{ruleAgain.id}</h1>
                </div>
              ))
            ) : (
              <div>
                <h1>no rules</h1>
              </div>
            )}

            {/* <h3>{this.props.rule.event.params.contact}</h3> */}
          </Card.Content>
        </Segment>
      </>
    );
  }
}
const mapStateToProps = ({ rules }) => ({
  rules,
});
export default connect(
  mapStateToProps,
  { getRules, deleteRule },
)(EngineCardRules);
