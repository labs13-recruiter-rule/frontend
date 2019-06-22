import React from 'react';
import { Grid, Divider, Form, Input } from 'semantic-ui-react';
import DegreeDropdown from '../../components/DegreeDropdown/DegreeDropdown';
import MajorDropdown from '../../components/MajorDropdown/MajorDropdown';
import ExperienceDropdown from '../../components/ExperienceDropdown/ExperienceDropdown';
import Axios from 'axios';

const flexContainer = {
  display: 'flex',
  flexDirection: 'column',
};

const center = {
  textAlign: 'center',
};

const token = sessionStorage.getItem('token');

const SkillsTags = () => <Input placeholder="Enter Skill" />;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      title: '',
      skills: '',
      education: '',
      industry: '',
      languages: '',
      certifications: '',
      volunteer: '',
      publications: '',
      posts: false,
      linkedinURL: '',
      picture: false,
      bio: false,
      hidden: true,
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleBio = () => {
    this.setState(prevState => ({ bio: !prevState.bio }));
  };

  togglePicture = () => {
    this.setState(prevState => ({ picture: !prevState.picture }));
  };

  togglePosts = () => {
    this.setState(prevState => ({ posts: !prevState.posts }));
  };

  toggleHidden = () => {
    this.setState(prevState => ({ hidden: !prevState.hidden }));
  };

  submit = e => {
    const newCandidate = {
      name: this.state.name,
      email: this.state.email,
      title: this.state.title,
      skills: this.state.skills,
      education: this.state.education,
      industry: this.state.industry,
      languages: this.state.languages,
      certifications: this.state.certifications,
      volunteer: this.state.volunteer,
      publications: this.state.publications,
      posts: this.state.posts,
      linkedinURL: this.state.linkedinURL,
      picture: this.state.picture,
      bio: this.state.bio,
      engine_id: this.state.engine_id,
    };
    Axios.post(
      `https://recruiter-back-end.herokuapp.com/engines/${this.state.engine_id}/use`,
      newCandidate,
      {
        headers: {
          token: `${token}`,
        },
      },
    )
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Grid columns={12}>
        <Grid.Row centered>
          <Grid.Column width={1} />
          <Grid.Column width={10} centered style={flexContainer}>
            <h2 className="ui header" style={center}>
              Add Candidate
            </h2>
            <Divider hidden />
            <h3 style={center}>Contact information</h3>
            <Divider />
            <Form className="Contact" onSubmit={this.submit}>
              <Form.Field>
                <label htmlFor="engine_id">Engine Id</label>
                <input
                  value={this.state.engine_id}
                  onChange={this.handleChange}
                  type="text"
                  name="engine_id"
                  placeholder="engine_id"
                />
              </Form.Field>
              <Form.Field>
                <label>Name</label>
                <input type="text" placeholder="Name" />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input type="email" placeholder="Email" />
              </Form.Field>
              <Form.Field>
                <label>LinkedIn</label>
                <input
                  type="url"
                  placeholder="https://www.linkedin.com/john-lname-exampl3"
                />
              </Form.Field>
            </Form>
            <Divider hidden />
            <h3 style={center}>Education</h3>
            <Divider />
            <Form className="Education">
              <Form.Field>
                <label>Degree</label>
                <DegreeDropdown />
              </Form.Field>
              <Form.Field>
                <label>
                  Major
                </label>
                <MajorDropdown />
              </Form.Field>
            </Form>
            <Divider hidden />
            <h3 style={center}>Skills</h3>
            <Divider />
            <Form className="Skills">
              <Form.Field>
                <label>Skill Tags</label>
                <SkillsTags />
              </Form.Field>
            </Form>
            <Divider hidden />
            <h3 style={center}>Experience</h3>
            <Divider />
            <Form className="Experience">
              <Form.Field>
                <label>Years of Experience</label>
                <ExperienceDropdown />
              </Form.Field>
            </Form>

            <Divider hidden />
            <h3 style={center}>Resume</h3>
            <Divider />
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
