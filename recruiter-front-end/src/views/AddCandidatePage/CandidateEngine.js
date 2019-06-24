import React from 'react';
import {
  Grid,
  Dropdown,
  Input,
  Header,
  Step,
  Progress,
  Button,
  Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
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
const tokenHeader = {headers: {token: `${token}`}}

class CandidateEngine extends React.Component {
    state={
        engines:[],
        engine: ''
    }

    componentDidMount() {
      Axios.get('https://recruiter-back-end.herokuapp.com/engines', tokenHeader).then( res => this.setState({engines: res.data})).catch(error => console.log(error))
    }
    render() {
  return (
    <Grid columns={12}>
      <Grid.Row centered>
        <Grid.Column width={1} />
        <Grid.Column width={10} centered style={flexContainer}>
          <Progress percent={15} />
          <Step.Group widths={6}> 
          <Step active link href="/new-candidate/engine">
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
                <Step.Title>Skills</Step.Title>
              </Step.Content>
            </Step>
            <Step link href="/new-candidate/experience">
              <Step.Content>
                <Step.Title>Experience</Step.Title>
              </Step.Content>
            </Step>
              <Step link href="/new-candidate/confirm-candidate">
              <Step.Content>
                <Step.Title>Confirm</Step.Title>
              </Step.Content>
            </Step>
          </Step.Group>
        {(this.state.engines.length>0) ? <> <Header>Which rule engine do you want to run the candidate through?</Header> <Dropdown
    placeholder="Select Rule Engine"
    fluid
    selection
    options={this.state.engines.map(engine=> {return {'key': engine.id, 'text': engine.engine_name, 'value': engine.id }})}
  /> </> : <><p> You don't have any engines created yet. Before you can send a candidate using Recruiter Rule Engine, you need to create an engine and add some rules. </p> <Button style={primaryButton} as={Link} to="/new-rule/engine">Create Engine</Button> </> }
 
          
          <Grid.Row style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              style={primaryButton}
              as={Link}
              to="/new-candidate/contact-info"
            >
              Next <Icon name="arrow right" size="small" />
            </Button>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid.Row>
    </Grid>
  );}
}

export default CandidateEngine;
