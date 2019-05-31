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
    this.getUsers();
    this.setState({
      users: this.props.users
    });
  }

  getUsers = () => {
    let url = process.env.REACT_APP_BACKEND_URL;
    this.props.getUsers(url);
  };

  render() {
    // return this.state.users ? (
    return (
      <div>
        {this.state.users &&
          this.state.users.map(user => <User key={user.id} user={user} />)}
        {console.log("from env index", process.env.REACT_APP_BACKEND_URL)}
        {console.log("from proc", process.env)}
        {console.log("test word", process.env.REACT_APP_TESTWORD)}
      </div>
      // ) : (
      //   <div>
      //     <p>LOADING</p>
      //   </div>
    );
  }
}

const mapStateToProps = ({ users, error }) => {
  return {
    users,
    error
  };
};

export default connect(
  mapStateToProps,
  { getUsers }
)(Users);
