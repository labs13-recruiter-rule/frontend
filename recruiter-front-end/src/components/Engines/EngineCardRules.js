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
import Axios from 'axios';

const token = sessionStorage.getItem('token');
const tokenHeader = { headers: { token: `${token}` } };

class EngineCardRules extends React.Component {
  state = {
    rules: [],
  };

  componentDidMount() {
    // this.props
    //   .getRules(this.props.engineRule)
    //   .then(() => {
    //     this.setState({ rules: this.props.rules }, () => {
    //       console.log(this.state.rules);
    //     });
    //     // console.log('CDM LAST', res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    Axios.get(
      `https://recruiter-back-end.herokuapp.com/engines/${this.props.engineRule}/rules`,
      tokenHeader,
    )
      .then(res => {
        this.setState({ rules: res.data }, () => {
          console.log(
            this.state.rules,
            'from this state rules enginecard rules',
          );
        });
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

            {this.state.rules && this.state.rules.length > 0 ? (
              this.state.rules.map(rule => (
                <div>
                  {/* <h2>rule for sending a candidate to: {ruleAgain.rule.event.params.contact}</h2> */}
                  <h2>
                    rule for sending a candidate to:{' '}
                    {rule.ruleNotParsed.contactEmail}
                  </h2>
                  <h3>Skills</h3>
                  <div>
                    {rule.ruleNotParsed.conditions.all.map(condition => (
                      <p>{condition.value}</p>
                    ))}
                  </div>
                  {/* <div>
                    {ruleAgain.rule.conditions.all.map(condition => (
                      <p>{condition.value}</p>
                    ))}
                  </div> */}
                  <h3>Degree</h3>
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
