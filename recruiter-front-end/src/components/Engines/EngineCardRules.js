import React from 'react';
import {
  Segment,
  Card,
  Icon,
  Header,
  Grid,
  GridColumn,
  List,
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
                  rule: {this.state.rules.length}
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
                  {rule.ruleNotParsed && rule.ruleNotParsed.contactEmail ? (
                    <div>
                      <h4>Send to {rule.ruleNotParsed.contactEmail}</h4>
                    </div>
                  ) : null}
                  {/* <div>{console.log('rule,ruleNP', rule)}</div> */}
                  {/* <div>
                    {ruleAgain.rule.conditions.all.map(condition => (
                      <p>{condition.value}</p>
                    ))}
                  </div> */}

                  {/* {rule.ruleNotParsed &&
                  rule.ruleNotParsed.skills &&
                  rule.ruleNotParsed.skills.length > 0
                    ? (<h3>Skills</h3>,
                      rule.ruleNotParsed.skills.map(rule => (
                        <div>
                          <h3>{rule}</h3>
                        </div>
                      )))
                    : null} */}

                  {rule.ruleNotParsed &&
                  rule.ruleNotParsed.skills &&
                  rule.ruleNotParsed.skills.length > 0 ? (
                    <Segment>
                      <Header as="h3">Skills</Header>
                      {rule.ruleNotParsed.skills.map(rule => (
                        <List.Item>{rule}</List.Item>
                      ))}
                    </Segment>
                  ) : null}

                  {rule.ruleNotParsed &&
                  rule.ruleNotParsed.education &&
                  rule.ruleNotParsed.education.length > 0 ? (
                    <Segment>
                      <Header as="h3">Minimum Education</Header>

                      <List.Item>{rule.ruleNotParsed.education[0]}</List.Item>
                    </Segment>
                  ) : null}

                  {rule.ruleNotParsed &&
                  rule.ruleNotParsed.majors &&
                  rule.ruleNotParsed.majors.length > 0 ? (
                    <Segment>
                      <Header as="h3">Majors</Header>

                      {rule.ruleNotParsed.majors.map(rule => (
                        <List.Item>{rule}</List.Item>
                      ))}
                    </Segment>
                  ) : null}

                  {rule.ruleNotParsed && rule.ruleNotParsed.maxExp ? (
                    <Segment>
                      <Header as="h3">Maximum Experience</Header>

                      <List.Item>
                        {`${rule.ruleNotParsed.maxExp} years`}
                      </List.Item>
                    </Segment>
                  ) : null}
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
