import React from 'react';
import { Card,  Button, Modal } from 'semantic-ui-react';

class ExampleContact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header content="You don't have any contacts yet." />
        </Card.Content>
      </Card>
    );
  }
}

export default ExampleContact;
