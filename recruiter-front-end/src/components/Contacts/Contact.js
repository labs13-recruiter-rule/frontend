import React from 'react';
import { Card } from 'semantic-ui-react';

const Contact = () => {
  return (
    <Card style={{ margin: '10px' }}>
      {/* <Image 
      size='medium' 
      src={this.props.user.profile_photo} /> */}
      <Card.Content>
        <Card.Header>{this.props.userContact.name}</Card.Header>
        <Card.Meta>{this.props.userContact.email}</Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default Contact;
