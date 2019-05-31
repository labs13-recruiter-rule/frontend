import React from "react";
import "./App.css";
import Users from "./components/Users";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Recruiter Rule</h1>
          <Users />
        </header>
      </div>
    );
  }
}

export default App;
