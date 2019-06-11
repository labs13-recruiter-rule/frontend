import React from "react";
//! { User, connect, getUsers, Link } DEFINED BUT NEVER USED
/* import User from "../User";
import { connect } from "react-redux";
import { getUsers } from "../../actions/index.js";
import { Link } from 'react-router-dom' */

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  componentDidMount() {

  }


  render() {
    // return this.state.users ? (
      console.log(this.props)
    return (
      <div>
        Dashboard
      </div>
    );
  }
}

export default Dashboard

// const mapStateToProps = state => {
//   return {
//     users: state.users,
//     error: state.error
//   };
// };

// export default connect(
//   mapStateToProps,
//   { getUsers }
// )(Users);
