import React from "react";
import { Button, Checkbox, Form, Container, Header } from "semantic-ui-react";

class NewCandidate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			title: "",
			yearsOfExperience: "",
			skills: "",
			education: "",
			industry: "",
			languages: "",
			certifications: "",
			volunteer: "",
			publications: "",
			hasBio: "",
			hasPicture: ""
		};
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<Container>
				<Header size="huge">New Candidate</Header>
				<Form>
					<Form.Field>
						<label htmlFor="name">Name</label>
						<input
							value={this.state.name}
							onChange={this.handleChange}
							type="name"
							name="name"
							placeholder="Name"
						/>
					</Form.Field>
					<Form.Field>
						<label htmlFor="title">Title</label>
						<input
							value={this.state.title}
							onChange={this.handleChange}
							type="title"
							name="title"
							placeholder="Title"
						/>
					</Form.Field>
					<Form.Field>
						<label htmlFor="email">Email</label>
						<input
							value={this.state.email}
							onChange={this.handleChange}
							type="email"
							name="email"
							placeholder="Email"
						/>
					</Form.Field>
					<Form.Field>
						<label htmlFor="skills">Skills</label>
						<input
							value={this.state.skills}
							onChange={this.handleChange}
							type="skills"
							name="skills"
							placeholder="Skills"
						/>
					</Form.Field>
					<Form.Field>
						<label htmlFor="education">Education</label>
						<input
							value={this.state.education}
							onChange={this.handleChange}
							type="education"
							name="education"
							placeholder="Education"
						/>
					</Form.Field>
					<Form.Field>
						<label htmlFor="industry">Industry</label>
						<input
							value={this.state.industry}
							onChange={this.handleChange}
							type="industry"
							name="industry"
							placeholder="Industry"
						/>
					</Form.Field>
					<Form.Field>
						<label htmlFor="languages">Languages</label>
						<input
							value={this.state.languages}
							onChange={this.handleChange}
							type="languages"
							name="languages"
							placeholder="Languages"
						/>
					</Form.Field>
					<Form.Field>
						<label htmlFor="certifications">Certifications</label>
						<input
							value={this.state.certifications}
							onChange={this.handleChange}
							type="certifications"
							name="certifications"
							placeholder="Certifications"
						/>
					</Form.Field>
					<Form.Field>
						<label htmlFor="volunteer">Volunteer</label>
						<input
							value={this.state.volunteer}
							onChange={this.handleChange}
							type="volunteer"
							name="volunteer"
							placeholder="Volunteer"
						/>
					</Form.Field>
					<Form.Field>
						<label htmlFor="publications">Publications</label>
						<input
							value={this.state.publications}
							onChange={this.handleChange}
							type="publications"
							name="publications"
							placeholder="Publications"
						/>
					</Form.Field>
					{/* TODO: Add Drop down options for has bio */}
					{/* TODO: Add Drop down options for LinkedIn picture */}
					{/* TODO: Add Drop down options for has LinkedIn posts */}
					{/* TODO: Add a submit button */}
				</Form>
			</Container>
		);
	}
}

export default NewCandidate;