import React from 'react';
import { Segment, Card } from 'semantic-ui-react';

const EngineCardRules = props => {
  return <h1>{props.rule.conditions.priority}</h1>;
};

export default EngineCardRules;
