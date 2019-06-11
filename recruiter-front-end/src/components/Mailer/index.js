import React from "react";
import { Button, Form, Container } from "semantic-ui-react";
import Axios from "axios";

class Mailer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: ""
		};
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	sendEmail = e => {
		const recipients = this.setState.email;
		Axios.post("localhost:4000/mailer/", { recievers: recipients })
			.then(res => console.log(res))
			.catch(err => console.log(err));
	};

	render() {
		return (
			<Container className="form-container">
				<p>Enter the recipient emails separated by a comma</p>
				<Form>
					<Form.Field>
						<label htmlFor="email">Email</label>
						<input
							value={this.state.email}
							onChange={this.handleChange}
							type="text"
							name="email"
							placeholder="Email"
						/>
					</Form.Field>
					<Button type="submit" onClick={this.sendEmail}>
						Send Email
					</Button>
				</Form>
			</Container>
		);
	}
}

export default Mailer;
