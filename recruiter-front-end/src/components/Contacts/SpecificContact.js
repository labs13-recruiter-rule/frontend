import React from 'react';
import { Card, Container, Button } from 'semantic-ui-react';

function SpecificContact(props) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.contact.name}</Card.Header>
        <Card.Meta>{props.contact.email}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="blue">
            Edit
          </Button>
          <Button basic color="red">
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default SpecificContact;
