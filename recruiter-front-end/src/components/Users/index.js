import React from "react";
import User from "../User";
import { connect } from "react-redux";
import { getUsers } from "../../actions/index.js";

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    this.props.getUsers();
    this.setState({
      users: this.props.users
    });
  }

  render() {
    // return this.state.users ? (
    return (
      <div>
        {this.state.users && this.state.users.map(user => <User user={user} />)}
      </div>
      // ) : (
      //   <div>
      //     <p>LOADING</p>
      //   </div>
    );
  }
}

const mapStateToProps = ({ users, error }) => ({
  users,
  error
});

export default connect(
  mapStateToProps,
  { getUsers }
)(Users);
