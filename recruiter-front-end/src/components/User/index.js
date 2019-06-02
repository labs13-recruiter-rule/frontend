import React from "react";
import { Card, Image } from "semantic-ui-react";

class User extends React.Component {
  render() {
    return (
      <Card>
        {/* <Image 
          size='medium' 
          src={this.props.user.profile_photo} /> */}
        <Card.Content>
          <Card.Header>
            {this.props.user.first_name} {this.props.user.last_name}
          </Card.Header>
          <Card.Meta>{this.props.user.email}</Card.Meta>
          <Card.Meta>{this.props.user.phone_number}</Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}

export default User;
