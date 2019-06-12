import React from "react";
import User from "../User";
import { connect } from "react-redux";
import { getUsers } from "../../actions/index.js";
import { Link } from "react-router-dom";
import { Card, Container } from "semantic-ui-react";
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
    console.log("FROM PROPS USERS", this.props.users);
    // this.setState({
    //   users: this.props.users,
    // });
  }

  getUsers = () => {
    let url = process.env.REACT_APP_BACKEND_URL;
    this.props.getUsers(url);
  };

  render() {
    // return this.state.users ? (
    return (
      <Container fluid>
        <Card.Group>
          {this.props.users &&
            this.props.users.map(user => (
              <Link to={`/${user.id}`} key={user.id}>
                <User user={user} />
              </Link>
            ))}
          {/* {console.log('from env index', process.env.REACT_APP_BACKEND_URL)}
        {console.log('test word', process.env.REACT_APP_TESTWORD)} */}
        </Card.Group>
      </Container>

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
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getUsers }
)(Users);
