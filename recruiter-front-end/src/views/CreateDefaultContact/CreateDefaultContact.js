import React from 'react';
import { Grid, Divider, Form, Input, Container } from 'semantic-ui-react';

const flexContainer = {
  display: 'flex',
  flexDirection: 'column',
};

const center = {
  textAlign: 'center',
};

function CreateDefaultContact() {
  return (
    <Container>
      <h2 className="ui header" style={center}>
        Default Contact
      </h2>
      <Form></Form>
    </Container>
  );
}

export default CreateDefaultContact;
