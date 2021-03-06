import React from 'react';
import { Card } from 'semantic-ui-react';

class User extends React.Component {
  render() {
    return (
      <Card style={{ margin: '10px' }}>
        {/* <Image 
          size='medium' 
          src={this.props.user.profile_photo} /> */}
        <Card.Content>
          <Card.Header>{this.props.user.display_name}</Card.Header>
          <Card.Meta>{this.props.user.email}</Card.Meta>
          <Card.Meta>{this.props.user.phone_number}</Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}

export default User;
