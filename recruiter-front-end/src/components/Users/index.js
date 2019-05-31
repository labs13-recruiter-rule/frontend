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
    console.log("users in cdm", this.props.getUsers());
    let url = process.env.BACKEND_URL;
    this.props.getUsers();
    this.setState({
      users: this.state.users
    });
    console.log("CDM HIT", this);
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
