import React from "react";

class User extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.user.first_name} {this.props.user.last_name}
        </h1>
        {/* <h2>{this.props.user.email}</h2>
        <h2>{this.props.user.phone_number}</h2> */}
      </div>
    );
  }
}

export default User;
