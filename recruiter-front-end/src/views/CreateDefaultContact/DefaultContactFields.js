import React from './node_modules/react';
import { Form, Button } from './node_modules/semantic-ui-react';

const flexContainer = {
  display: 'flex',
  flexDirection: 'column',
};

const DefaultContactFields = () => (
  <Form style={flexContainer}>
    <Form.Field>
      <label>Name</label>
      <input placeholder="First Name" />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder="Last Name" />
    </Form.Field>
    <Button type="submit">Add Default Contact</Button>
  </Form>
);

export default DefaultContactFields;
