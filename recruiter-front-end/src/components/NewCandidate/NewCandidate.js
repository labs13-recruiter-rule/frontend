import React from "react";
import {
	Button,
	Form,
	Container,
	Header
} from "semantic-ui-react";

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
			hasPicture: "",
			bio: "",
			picture: "",
			posts: ""
		};
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleBio = e => {
		this.setState({ bio: e.target.innerText });
	};

	handlePicture = e => {
		this.setState({ picture: e.target.innerText });
	};

	handlePosts = e => {
		this.setState({ posts: e.target.innerText });
	};

	submit = e => {
		console.log("Add candidate", this.state);
	};

	render() {
		//? 'options' IS ASSIGNED A VALUE BUT NEVER DEFINED
		const options = [
			{ key: 1, text: "True", value: true },
			{ key: 2, text: "False", value: false }
		];

		return (
			<Container className='form-container'>
				<Header size="huge">New Candidate</Header>
				<Form>
					<Form.Field>
						<label htmlFor="name">Name</label>
						<input
							value={this.state.name}
							onChange={this.handleChange}
							type="text"
							name="name"
							placeholder="Name"
						/>
					</Form.Field>
					<Form.Field>
						<label htmlFor="title">Title</label>
						<input
							value={this.state.title}
							onChange={this.handleChange}
							type="text"
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
							type="text"
							name="skills"
							placeholder="Skills"
						/>
					</Form.Field>
					<Form.Field>
						<label htmlFor="education">Education</label>
						<input
							value={this.state.education}
							onChange={this.handleChange}
							type="text"
							name="education"
							placeholder="Education"
						/>
					</Form.Field>
					<Form.Field>
						<label htmlFor="industry">Industry</label>
						<input
							value={this.state.industry}
							onChange={this.handleChange}
							type="text"
							name="industry"
							placeholder="Industry"
						/>
					</Form.Field>
					<Form.Field>
						<label htmlFor="languages">Languages</label>
						<input
							value={this.state.languages}
							onChange={this.handleChange}
							type="text"
							name="languages"
							placeholder="Languages"
						/>
					</Form.Field>
					<Form.Field>
						<label htmlFor="certifications">Certifications</label>
						<input
							value={this.state.certifications}
							onChange={this.handleChange}
							type="text"
							name="certifications"
							placeholder="Certifications"
						/>
					</Form.Field>
					<Form.Field>
						<label htmlFor="volunteer">Volunteer</label>
						<input
							value={this.state.volunteer}
							onChange={this.handleChange}
							type="text"
							name="volunteer"
							placeholder="Volunteer"
						/>
					</Form.Field>
					<Form.Field>
						<label htmlFor="publications">Publications</label>
						<input
							value={this.state.publications}
							onChange={this.handleChange}
							type="text"
							name="publications"
							placeholder="Publications"
						/>
					</Form.Field>
					<Form.Field>
						<div className="ui checkbox">
							<input 
							type="checkbox" 
							name="linkedin-bio" 
							onChange={this.handleBio}
							/>
							<label>LinkedIn Bio Exists</label>
						</div>
						{/* <label htmlFor="bio">LinkedIn Bio exists</label>
						<Menu compact>
							<Dropdown
								text=""
								options={options}
								simple
								item
								onChange={this.handleBio}
							/>
						</Menu> */}
					</Form.Field>
					<Form.Field>
						<div className="ui checkbox">
							<input 
							type="checkbox" 
							name="linkedin-picture" 
							onChange={this.handlePicture}
							/>
							<label>LinkedIn Profile Picture Exists</label>
						</div>
						
						{/* <label htmlFor="picture">LinkedIn picture exists</label>
						<Menu compact>
							<Dropdown
								text=""
								options={options}
								simple
								item
								onChange={this.handlePicture}
							/>
						</Menu> */}
					</Form.Field>
					<Form.Field>

						<div className="ui checkbox">
							<input 
							type="checkbox" 
							name="linkedin-posts" 
							onChange={this.handlePosts}
							/>
							<label>LinkedIn Posts Exists</label>
						</div>
						{/* <label htmlFor="posts">LinkedIn posts exists</label>
						<Menu compact>
							<Dropdown
								text=""
								options={options}
								// simple
								item
								onChange={this.handlePosts}
							/>
						</Menu> */}
					</Form.Field>
					<Button type="submit" onClick={this.submit}>
						Add Candidate
					</Button>
				</Form>
			</Container>
		);
	}
}

export default NewCandidate;
