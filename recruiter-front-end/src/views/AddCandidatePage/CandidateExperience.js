import React from 'react';
import {
  Grid,
  Button,
  Icon,
  Step,
  Progress,
  Header,
  Dropdown,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
const token = sessionStorage.getItem('token');

const flexContainer = {
  display: 'flex',
  flexDirection: 'column',
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

const dropdownStyles = {
  margin: '0',
};

const options = [
  { key: 0, text: 'Less than 1', value: '0' },
  { key: 1, text: '1', value: 1 },
  { key: 2, text: '2', value: 2 },
  { key: 3, text: '3', value: 3 },
  { key: 4, text: '4', value: 4 },
  { key: 5, text: '5', value: 5 },
  { key: 6, text: '6', value: 6 },
  { key: 7, text: '7', value: 7 },
  { key: 8, text: '8', value: 8 },
  { key: 9, text: '9', value: 9 },
  { key: 10, text: '10', value: 10 },
  { key: 11, text: '11', value: 11 },
  { key: 12, text: '12', value: 12 },
  { key: 13, text: '13', value: 13 },
  { key: 14, text: '14', value: 14 },
  { key: 15, text: '15', value: 15 },
  { key: 16, text: '16', value: 16 },
  { key: 17, text: '17', value: 17 },
  { key: 18, text: '18', value: 18 },
  { key: 19, text: '19', value: 19 },
  { key: 20, text: '20', value: 20 },
  { key: 21, text: '21', value: 21 },
  { key: 22, text: '22', value: 22 },
  { key: 23, text: '23', value: 23 },
  { key: 24, text: '24', value: 24 },
  { key: 25, text: '25', value: 25 },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yearsOfExperience: null,
    };
  }

  handleExperience = (e, { value }) => {
    this.setState({ yearsOfExperience: value });
  };

  submit = e => {
    console.log('CandidateExperience submit', this.state);
    this.props.candidateExperience(this.state.yearsOfExperience);
  };

  render() {
    return (
      <Grid columns={12}>
        <Grid.Row centered>
          <Grid.Column width={1} />
          <Grid.Column width={10} centered style={flexContainer}>
            <Progress percent={90} />
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
              <Step active link href="/new-candidate/experience">
                <Step.Content>
                  <Step.Title>Experience</Step.Title>
                </Step.Content>
              </Step>
              <Step link href="/new-candidate/confirm">
                <Step.Content>
                  <Step.Title>Confirm</Step.Title>
                </Step.Content>
              </Step>
            </Step.Group>
            <Grid.Row>
              <Grid.Column floated="left" width={12}>
                <Header textAlign="center" as="h4">Years of experience</Header>
              </Grid.Column>
              <Grid.Column floated="right" width={4} style={dropdownStyles}>
                <Dropdown
                  placeholder="Enter a number"
                  search
                  fluid
                  allowAdditions
                  clearable
                  selection
                  options={options}
                  styles={{ width: '300px' }}
                  onChange={this.handleExperience}
                />
              </Grid.Column>
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
                to="/new-candidate/confirm"
              >
                Next
              </Button>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
