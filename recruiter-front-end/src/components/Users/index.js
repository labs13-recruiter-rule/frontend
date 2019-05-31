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
    let url = process.env.REACT_APP_BACKEND_URL;
    this.props.getUsers(url);
    this.setState({
      users: this.props.users
    });
  }

  render() {
    // return this.state.users ? (
    return (
      <div>
        {this.state.users && this.state.users.map(user => <User user={user} />)}
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

const mapStateToProps = ({ users, error }) => ({
  users,
  error
});

export default connect(
  mapStateToProps,
  { getUsers }
)(Users);
