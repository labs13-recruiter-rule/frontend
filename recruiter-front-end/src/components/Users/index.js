import React from 'react';
import User from '../User';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/index.js';

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    let url = process.env.REACT_APP_BACKEND_URL;
    this.props.getUsers(url);
    console.log('FROM PROPS USERS', this.props.users);
    // this.setState({
    //   users: this.props.users,
    // });
  }

  render() {
    // return this.state.users ? (
    return (
      <div>
        {this.props.users &&
          this.props.users.map(user => <User user={user} key={user.id} />)}
        {/* {console.log('from env index', process.env.REACT_APP_BACKEND_URL)}
        {console.log('test word', process.env.REACT_APP_TESTWORD)} */}
      </div>
      // ) : (
      //   <div>
      //     <p>LOADING</p>
      //   </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    error: state.error,
  };
};

export default connect(
  mapStateToProps,
  { getUsers },
)(Users);
