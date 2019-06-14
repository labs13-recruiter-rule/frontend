import React from 'react'
import { Message } from 'semantic-ui-react';

const DefaultContactMessage = () => (
  <Message negative>
    <Message.Header>A Default Contact Is Required</Message.Header>
    <p>
      If a candidate does not match the rules for the Sales Manager contact
      group where should we send them?
    </p>
  </Message>
);

export default DefaultContactMessage;
