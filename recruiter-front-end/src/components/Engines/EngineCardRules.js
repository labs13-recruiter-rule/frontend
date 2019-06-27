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


const token = sessionStorage.getItem('token')
const tokenHeader = { headers: { token: `${token}` } };


    Axios.get(
      `https://recruiter-back-end.herokuapp.com/engines/${this.props.engineRule}/rules`,
      tokenHeader,
    )
      .then(res => {
        this.setState({ rules: res.data }, () => {
          // console.log(
          //   this.state.rules,
          //   'from this state rules enginecard rules',
          // )

          // console.log()
          ;
        });
      })
      .catch(err => {
        // console.log();
      });
  }

  render() {
    return (
      <>
        <Segment basic>
          <Card.Content>
            <Grid className="engineCardRuleGrid">
              <GridColumn width={4}>
                <Header
                  as="h3"
                  className="ruleHeader"
                  content={`Total Rules: ${this.state.rules.length}`}
                  subheader={
                    this.props.fallbackEmail
                      ? `Fallback: ${this.props.fallbackEmail}`
                      : null
                  }
                />
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
              this.state.rules.map((rule, i = 0) => (
                <Segment raised>
                  {/* <h2>rule for sending a candidate to: {ruleAgain.rule.event.params.contact}</h2> */}
                  {rule.ruleNotParsed && rule.ruleNotParsed.contactEmail ? (
                    <Segment basic>
                      <Header
                        as="h3"
                        content={`Rule ${i + 1}`}
                        subheader={`Send to ${rule.ruleNotParsed.contactEmail}`}
                      />
                    </Segment>
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
                    <Segment secondary>
                      <Header as="h4">Skills</Header>
                      {rule.ruleNotParsed.skills.map(rule => (
                        <List.Item>{rule}</List.Item>
                      ))}
                    </Segment>
                  ) : null}

                  {rule.ruleNotParsed &&
                  rule.ruleNotParsed.education &&
                  rule.ruleNotParsed.education.length > 0 ? (
                    <Segment secondary>
                      <Header as="h4">Minimum Education</Header>

                      <List.Item>{rule.ruleNotParsed.education[0]}</List.Item>
                    </Segment>
                  ) : null}

                  {rule.ruleNotParsed &&
                  rule.ruleNotParsed.majors &&
                  rule.ruleNotParsed.majors.length > 0 ? (
                    <Segment secondary>
                      <Header as="h4">Majors</Header>

                      {rule.ruleNotParsed.majors.map(rule => (
                        <List.Item>{rule}</List.Item>
                      ))}
                    </Segment>
                  ) : null}

                  {rule.ruleNotParsed && rule.ruleNotParsed.minExp ? (
                    <Segment secondary>
                      <Header as="h4">Minimum Experience</Header>

                      <List.Item>
                        {`${rule.ruleNotParsed.minExp} years`}
                      </List.Item>
                    </Segment>
                  ) : null}
                  {rule.ruleNotParsed && rule.ruleNotParsed.maxExp ? (
                    <Segment secondary>
                      <Header as="h4">Maximum Experience</Header>

                      <List.Item>
                        {`${rule.ruleNotParsed.maxExp} years`}
                      </List.Item>
                    </Segment>
                  ) : null}
                </Segment>
              ))
            ) : (
              <div>
                <h1>No Rules Set</h1>
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
