import React from "react";
import "./App.css";
import Users from "./components/Users";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import User from "./components/User";


class App extends React.Component {
  render() {
    // console.log(this.props)
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Recruiter Rule</h1>
          </header>
          <Route exact path='/' component={Users} />
          <Route 
          exact 
          path='/:id' 
          render={
            props => {
              console.log(props)
              return <div>UserId: {props.match.params.id}</div>
            }
          } />
          {/* <Users /> */}
        </div>
      </Router>
    );
  }
}

export default App;
