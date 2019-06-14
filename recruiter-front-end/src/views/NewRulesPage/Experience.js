import React from 'react';
import {
  Grid,
  Button,
  Modal,
  Header,
  Icon,
  Progress,
  Step,
  Dropdown,
  Divider,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const token = sessionStorage.getItem('token');

class NewCandidate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minNumber: '',
      minTime: '',
      maxNumber: '',
      maxTime: '',
    };
  }

  handleMinNumber = (e, { value }) => {
    this.setState(prevState => ({ minNumber: value }));
  };

  handleMinTimeframe = (e, { value }) => {
    this.setState(prevState => ({ minTime: value }));
  };

  handleMaxNumber = (e, { value }) => {
    this.setState(prevState => ({ maxNumber: value }));
  };

  handleMaxTimeframe = (e, { value }) => {
    this.setState(prevState => ({ maxTime: value }));
  };

  handleChange = (e, { value }) => this.setState({ majors: value });

  handleAddition = (e, { value }) => {
    this.setState(prevState => ({
      options: [{ text: value, value }, ...prevState.options],
    }));
  };

  handleSubmit = e => {
    console.log('this.state', this.state);
    Axios.post(
      'https://recruiter-back-end.herokuapp.com/engine/addRule',
      this.state,
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
    const flexContainer = {
      display: 'flex',
      flexDirection: 'column',
    };

    const primaryButton = {
      margin: '50px auto',
      height: '5rem',
      width: '300px',
      fontSize: '1.35rem',
      fontWeight: '900',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };

    const secondaryButton = {
      margin: '10px auto',
      height: '3rem',
      width: '350px',
      fontSize: '1rem',
    };

    const linkStyles = {
      textAlign: 'center',
      color: 'rgba(0,0,0,.87)',
    };

    const options = [
      { key: 0, text: '0', value: '0' },
      { key: 1, text: '1', value: '1' },
      { key: 2, text: '2', value: '2' },
      { key: 3, text: '3', value: '3' },
      { key: 4, text: '4', value: '4' },
      { key: 5, text: '5', value: '5' },
      { key: 6, text: '6', value: '6' },
      { key: 7, text: '7', value: '7' },
      { key: 8, text: '8', value: '8' },
      { key: 9, text: '9', value: '9' },
      { key: 10, text: '10', value: '10' },
      { key: 11, text: '11', value: '11' },
      { key: 12, text: '12', value: '12' },
      { key: 13, text: '13', value: '13' },
      { key: 14, text: '14', value: '14' },
      { key: 15, text: '15', value: '15' },
      { key: 16, text: '16', value: '16' },
      { key: 17, text: '17', value: '17' },
      { key: 18, text: '18', value: '18' },
      { key: 19, text: '19', value: '19' },
      { key: 20, text: '20', value: '20' },
      { key: 21, text: '21', value: '21' },
      { key: 22, text: '22', value: '22' },
      { key: 23, text: '23', value: '23' },
      { key: 24, text: '24', value: '24' },
      { key: 25, text: '25', value: '25' },
    ];

    const timeframe = [
      { key: 'months', text: 'months', value: 'months' },
      { key: 'years', text: 'years', value: 'years' },
    ];

    const dropdownStyles = {
      margin: '0',
    };

    return (
      <Grid columns={12} style={{ marginTop: '25px' }}>
        <Grid.Row centered>
          <Grid.Column width={1} />
          <Grid.Column width={10} centered style={flexContainer}>
            <Progress percent={90} />
            <Step.Group widths={5}>
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to="/new-contact-group">
                    <Step.Title>Group</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to="/new-contact-group/contacts">
                    <Step.Title>Contacts</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to="/new-rule/education">
                    <Step.Title>Education</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
              <Step>
                <Link style={linkStyles} to="/new-rule/skills">
                  <Step.Content>
                    <Step.Title>Skills</Step.Title>
                  </Step.Content>
                </Link>
              </Step>
              <Step active>
                <Step.Content>
                  <Step.Title>Experience</Step.Title>
                </Step.Content>
              </Step>
            </Step.Group>
            <Grid style={{ marginTop: '25px' }}>
              <Grid.Row>
                <Grid.Column floated="left" width={6}>
                  <Header as="h4">Minimum experience required</Header>
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
                    onChange={this.handleMinNumber}
                  />
                </Grid.Column>
                <Grid.Column floated="right" width={4} style={dropdownStyles}>
                  <Dropdown
                    placeholder="Months or Years"
                    search
                    fluid
                    allowAdditions
                    clearable
                    selection
                    options={timeframe}
                    styles={{ width: '300px' }}
                    onChange={this.handleMinTimeframe}
                  />
                </Grid.Column>
              </Grid.Row>
              <Divider />
              <Grid.Row>
                <Grid.Column floated="left" width={6}>
                  <Header as="h4">Maximum experience allowed</Header>
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
                    onChange={this.handleMaxNumber}
                  />
                </Grid.Column>
                <Grid.Column floated="right" width={4} style={dropdownStyles}>
                  <Dropdown
                    placeholder="Months or Years"
                    search
                    fluid
                    allowAdditions
                    clearable
                    selection
                    options={timeframe}
                    styles={{ width: '300px' }}
                    onChange={this.handleMaxTimeframe}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Button
              style={primaryButton}
              onClick={this.handleSubmit}
              as={Link}
              to="/"
            >
              Next <Icon name="arrow right" size="small" />
            </Button>
            <Modal
              trigger={
                <Button style={secondaryButton}>
                  I'm confused. Please explain how this will work.
                </Button>
              }
              closeIcon
            >
              <Header content="Rules" />
              <Modal.Content>
                <p>
                  Rules are conditions for sending a candidate to a contacts
                  group. Let's say that you are recruiting for the marketing
                  department. The marketing department is always looking for new
                  candidates with a variety of jobs with various requirements. A
                  marketing intern might have
                </p>
              </Modal.Content>
            </Modal>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
      </Grid>
    );
  }
}

export default NewCandidate;
