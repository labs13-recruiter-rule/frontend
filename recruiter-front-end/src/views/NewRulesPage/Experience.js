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

const token = sessionStorage.getItem('token');

class NewCandidate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minNumber: '',
      maxNumber: '',
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

  newRule = e => {
    console.log('/views/NewRulesPage/Experience.js newRule');
    this.props.minExp(this.state.minNumber);
    this.props.maxExp(this.state.maxNumber);
    this.props.newRule(this.state);
  };

  handleSubmit = e => {
    this.props.minExp(this.state.minNumber);
    this.props.maxExp(this.state.maxNumber);
  };

  render() {
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

    const dropdownStyles = {
      margin: '0',
    };

    return (
      <Grid columns={12} style={{ marginTop: '25px' }}>
        <Grid.Row centered>
          <Grid.Column width={1} />
          <Grid.Column width={10} centered style={flexContainer}>
            <Progress percent={75} />
            <Step.Group widths={6}>
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to="/new-rule/engine">
                    <Step.Title>Engine</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to="/new-rule/contacts">
                    <Step.Title>Rule Contacts</Step.Title>
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
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to="/new-rule/confirmation">
                    <Step.Title>Confirm</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
            </Step.Group>
            <Grid style={{ marginTop: '25px' }}>
              <Grid.Row>
                <Grid.Column floated="left" width={12}>
                  <Header as="h4">Minimum years of experience required</Header>
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
              </Grid.Row>
              <Divider />
              <Grid.Row>
                <Grid.Column floated="left" width={12}>
                  <Header as="h4">Maximum years of experience allowed</Header>
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
              </Grid.Row>
            </Grid>
            <Grid.Column
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Button style={primaryButton} as={Link} to="/new-rule/skills">
                <Icon name="arrow left" size="small" />
                Back
              </Button>
              <Modal
                trigger={<Button style={primaryButton}>Next</Button>}
                closeIcon
              >
                <Header icon="archive" content="Create New Rule" />
                <Modal.Content>
                  <p>
                    Would you like to create a new rule with the same fallback
                    contact if a candidate does not pass all conditions for the
                    rule?
                  </p>
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    color="red"
                    onClick={this.handleSubmit}
                    as={Link}
                    to="/new-rule/confirmation"
                  >
                    <Icon name="x" /> No
                  </Button>
                  <Button
                    color="green"
                    as={Link}
                    to="/new-rule/contacts"
                    onClick={this.newRule}
                  >
                    <Icon name="check" /> Yes
                  </Button>
                </Modal.Actions>
              </Modal>
            </Grid.Column>
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
