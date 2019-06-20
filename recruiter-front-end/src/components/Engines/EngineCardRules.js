import React from 'react';
import { Segment, Card } from 'semantic-ui-react';

const EngineCardRules = props => {
  return (
    <>
      <Segment>
        <Card.Content>
          <h1>rule: {props.count}</h1>
          <h1>{props.rule.event.type}</h1>
          <h1>{props.rule.event.params.contact}</h1>
        </Card.Content>
      </Segment>
    </>
  );
};

export default EngineCardRules;
