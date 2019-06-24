import React from 'react';
import {
    Grid,
    Button,
    Icon,
    Form,
    Input,
    Step,
    Progress,
  } from 'semantic-ui-react';
  import Axios from 'axios';

const flexContainer = {
    display: 'flex',
    flexDirection: 'column',
  };
  
  const center = {
    textAlign: 'center',
  };
  
  const primaryButton = {
    margin: '50px 0',
    height: '4rem',
    width: '150px',
    fontSize: '1.35rem',
    fontWeight: '900',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  
const token = sessionStorage.getItem('token'); 
const tokenHeader = {headers: {
    token: `${token}`
}}

class CandidateConfirm extends React.Component {
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
          newCandidate, tokenHeader)
          .then(res => {
            console.log(res);
          })
          .catch(err => console.log(err));
      };
    render() {
        return(
            <Grid columns={12}>
            <Grid.Row centered>
              <Grid.Column width={1} />
              <Grid.Column width={10} centered style={flexContainer}>
                <Progress percent={90} />
                <Step.Group widths={6}>
                <Step link href="/new-candidate/engine">
                    <Step.Content>
                      <Step.Title>Select Engine</Step.Title>
                    </Step.Content>
                  </Step>
                  <Step link href="/new-candidate/contact-info">
                    <Step.Content>
                      <Step.Title>Contact Info</Step.Title>
                    </Step.Content>
                  </Step>
                  <Step link href="/new-candidate/education">
                    <Step.Content>
                      <Step.Title>Education</Step.Title>
                    </Step.Content>
                  </Step>
                  <Step link href="/new-candidate/skills">
                    <Step.Content>
                      <Step.Title>Experience</Step.Title>
                    </Step.Content>
                  </Step>
                  <Step link href="/new-candidate/experience">
                    <Step.Content>
                      <Step.Title>Experience</Step.Title>
                    </Step.Content>
                  </Step>
                  <Step active link href="/new-candidate/confirm-candidate">
                    <Step.Content>
                      <Step.Title>Confirm</Step.Title>
                    </Step.Content>
                  </Step>
                </Step.Group>
                
                <Grid.Row
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <Button
                    style={primaryButton}
                    to="/new-candidate/education"
                  >
                    <Icon name="arrow left" size="small" />
                    Back
                  </Button>
                  <Button style={primaryButton} onClick={this.submit}>
                    Send
                  </Button>
                </Grid.Row>
              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>
          </Grid>
        )
    }
}

export default CandidateConfirm;