import React from 'react';
import {
    Grid,
    Button,
    Icon,
    Step,
    Card,
    Progress,
    Header,
    Dropdown,
  } from 'semantic-ui-react';
  import { Link } from 'react-router-dom';
  import Axios from 'axios';
  import emailPreview from '../../emailPreview'; 
  import firebase from 'firebase';

  const token = sessionStorage.getItem('token');
  const tokenHeader = {headers: {token: `${token}`}}
  const flexContainer = {

    display: 'flex',
    flexDirection: 'column',
  
  };

  const centerIt = {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    alignItems: 'center',
    justifyContent: 'center'
  }
  
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
  
  const previewStyle = {
    padding: '2rem',
    margin: '2rem'
  }

class CandidateConfirm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          "displayName": this.props.user_displayName,
          "userEmail": this.props.user_email,
          "candidate": this.props.candidate,
          "email_preview": ""
        }
    }

    componentDidMount() {
      console.log('props confirm', this.props.user_email)

       this.setState({email_preview: emailPreview(this.state.candidate, this.state.displayName, this.state.userEmail)});
      
    }


    submit = e => {
    Axios.post(`https://recruiter-back-end.herokuapp.com/engines/${this.props.engine}/use`, this.props.candidate, tokenHeader).then(res => console.log(res)).catch(error=> console.log(error))
    }
    render() {
        return (
            <Grid columns={12}>
            <Grid.Row centered>
              <Grid.Column width={1} />
              <Grid.Column width={10} centered style={flexContainer}>
                <Progress percent={100} />
                <Step.Group widths={6}>
                  <Step link href="/new-candidate/engine">
                    <Step.Content>
                      <Step.Title>Engine</Step.Title>
                    </Step.Content>
                  </Step>
                  <Step link href="/new-candidate/contact">
                    <Step.Content>
                      <Step.Title>Contact</Step.Title>
                    </Step.Content>
                  </Step>
                  <Step link href="/new-candidate/education">
                    <Step.Content>
                      <Step.Title>Education</Step.Title>
                    </Step.Content>
                  </Step>
                  <Step link href="/new-candidate/skills">
                    <Step.Content>
                      <Step.Title>Skills</Step.Title>
                    </Step.Content>
                  </Step>
                  <Step link href="/new-candidate/experience">
                    <Step.Content>
                      <Step.Title>Experience</Step.Title>
                    </Step.Content>
                  </Step>
                  <Step active link href="/new-candidate/confirm">
                  <Step.Content>
                    <Step.Title>Confirm</Step.Title>
                  </Step.Content>
                </Step>
                </Step.Group>
                <Grid.Row>
                </Grid.Row>
                {/* <Grid.Row>
                  <p>Name: {this.props.candidate.name}</p>
                  <p>Email: {this.props.candidate.email}</p>
                  <p>Education: {this.props.candidate.education} </p>
                  <p>Major: {this.props.candidate.major}</p>
                  <p>Skills: {this.props.candidate.skills.map(skill => `${skill} `)}</p>
                  <p>Experience: {this.props.candidate.experience} years</p>
                </Grid.Row> */}
            
           { this.state.email_preview === "" ?
                  <Card style={previewStyle}>
                  <Header textAlign="center" as="h2">
                      Email Preview
                  </Header>
                  <Card.Content>
                    {this.state.displayName ? <Header as="h4">Subject Line: ${this.state.displayName} sent you a candidate using Recruiter Rules`</Header> : <></>}
                    {this.state.email_preview}
                    </Card.Content>
                  </Card> : <div style={centerIt}><Header>You have not submitted a candidate yet.</Header> <Button style={primaryButton} as={Link} to="/new-candidate/engine">Enter a Candidate</Button></div>
           }
                <Grid.Row>
                
                </Grid.Row>
                <Grid.Row
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                > 
                  <Button
                    style={primaryButton}
                    as={Link}
                    to="/new-candidate/education"
                  >
                    <Icon name="arrow left" size="small" />
                    Back
                  </Button>
                  <Button
                    style={primaryButton}
                    onClick={this.submit}
                     as={Link}
                     to="/new-candidate/send"
                  >
                    Confirm and Send
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

