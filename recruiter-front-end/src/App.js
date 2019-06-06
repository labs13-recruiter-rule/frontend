import React from "react";
import "./App.css";
import Users from "./components/Users";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import User from "./components/User";
import NewCandidate from "./components/NewCandidate/NewCandidate";
import fire from "./config/fire";
import {
	Menu,
	Button,
	Checkbox,
	Form,
	Container,
	Header
} from "semantic-ui-react";

class App extends React.Component {
	state = {
		user: {}
	};

	componentDidMount() {
		this.authListener();
	}

	authListener() {
		fire.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({ user });
			} else {
				this.setState({
					user: null
				});
			}
		});
	}

	logout() {
		fire.auth().signOut();
	}

	createCandidate() {
		console.log("hi");
	}

	render() {
		// console.log(this.props)
		return (
			<Container>
				<Router>
					{this.state.user ? (
						[
							<>
								<Menu>
									<Menu.Item>
										<Button onClick={this.logout}>logout</Button>
									</Menu.Item>
									<Menu.Item>
										<Link to="/new-candidate">New Candidate</Link>
									</Menu.Item>
									<Menu.Item>
										<Link to="/contacts">Contacts</Link>
									</Menu.Item>
								</Menu>
								<Header>Recruiter Rule</Header>
								<Route exact path="/" component={Users} />
								<Route exact path="/db" component={Dashboard} />
								<Route
									exact
									path="/id"
									render={props => {
										console.log(props);
										return <div>UserId: {props.match.params.id}</div>;
									}}
								/>
								<Route exact path="/new-candidate" component={NewCandidate} />
								<Route exact path="/contacts" component={NewCandidate} />
							</>
						]
					) : (
						<Login />
					)}
				</Router>
			</Container>
		);
	}
}

export default App;
