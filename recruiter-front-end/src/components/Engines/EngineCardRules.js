import React from 'react';
import {
  Segment,
  Card,
  Icon,
  Header,
  Grid,
  GridColumn,
} from 'semantic-ui-react';

const EngineCardRules = props => {
  return (
    <>
      <Segment>
        <Card.Content>
          <Grid className="engineCardRuleGrid">
            <GridColumn width={4}>
              <Header as="h3" className="ruleHeader">
                rule: {props.count}
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
                  props.deleteRule(
                    props.engineRule.engine_id,
                    props.engineRule.id,
                  )
                }
              />
            </GridColumn>
          </Grid>
          {/* </Segment.Group>
          <Segment.Group> */}

          <h3>{props.rule.event.type}</h3>
          <h3>{props.rule.event.params.contact}</h3>
        </Card.Content>
      </Segment>
    </>
  );
};

export default EngineCardRules;
