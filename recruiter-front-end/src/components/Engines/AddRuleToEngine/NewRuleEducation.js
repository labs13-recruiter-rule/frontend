import React from 'react';
import {
  Grid,
  Button,
  Header,
  Icon,
  Progress,
  Step,
  Dropdown,
  Divider,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const token = sessionStorage.getItem('token');

class NewRuleEducation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      degree: '',
      majors: [],
    };
  }

  handleDegree = (e, { value }) => {
    this.setState(prevState => ({ degree: value }));
  };

  handleChange = (e, { value }) => this.setState({ majors: value });

  handleAddition = (e, { value }) => {
    this.setState(prevState => ({
      options: [{ text: value, value }, ...prevState.options],
    }));
  };

  handleSubmit = e => {
    this.props.minEducation(this.state.degree);
    this.props.majors(this.state.majors);
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

    const linkStyles = {
      textAlign: 'center',
      color: 'rgba(0,0,0,.87)',
    };

    const options = [
      { key: 1, text: 'high school / GED', value: 'high school / GED' },
      { key: 2, text: 'some college', value: 'some college' },
      { key: 3, text: "Associate's degree", value: "Associate's degree" },
      { key: 4, text: "Bachelor's degree", value: "Bachelor's degree" },
      { key: 5, text: "Master's degree", value: "Master's degree" },
      { key: 6, text: 'PhD', value: 'PhD' },
    ];

    const majors = [
      { key: 1, text: 'Accounting', value: 'Accounting' },
      { key: 2, text: 'Advertising', value: 'Advertising' },
      { key: 3, text: 'Aerospace Engineering', value: 'Aerospace Engineering' },
      { key: 4, text: 'Anthropology', value: 'Anthropology' },
      { key: 5, text: 'Architecture', value: 'Architecture' },
      { key: 6, text: 'Biology', value: 'Biology' },
      {
        key: 7,
        text: 'Biomedical Engineering',
        value: 'Biomedical Engineering',
      },
      { key: 8, text: 'Biotechnology', value: 'Biotechnology' },
      {
        key: 9,
        text: 'Business Administration',
        value: 'Business Administration',
      },
      { key: 10, text: 'Business Management', value: 'Business Management' },
      { key: 11, text: 'Chemical Engineering', value: 'Chemical Engineering' },
      { key: 12, text: 'Chemistry', value: 'Chemistry' },
      { key: 13, text: 'Civil Engineering', value: 'Civil Engineering' },
      { key: 14, text: 'Communications', value: 'Communications' },
      { key: 15, text: 'Computer Engineering', value: 'Computer Engineering' },
      { key: 16, text: 'Computer Science', value: 'Computer Science' },
      {
        key: 17,
        text: 'Construction Management',
        value: 'Construction Management',
      },
      { key: 18, text: 'Data Science', value: 'Data Science' },
      { key: 19, text: 'Economics', value: 'Economics' },
      { key: 20, text: 'Education', value: 'Education' },
      { key: 21, text: 'English', value: 'English' },
      { key: 22, text: 'Finance', value: 'Finance' },
      { key: 23, text: 'Food Science', value: 'Food Science' },
      { key: 24, text: 'Government', value: 'Government' },
      { key: 25, text: 'History', value: 'History' },
      {
        key: 26,
        text: 'Hospitality Management  ',
        value: 'Hospitality Management  ',
      },
      { key: 27, text: 'Human Resources', value: 'Human Resources' },
      {
        key: 28,
        text: 'Industrial Engineering',
        value: 'Industrial Engineering',
      },
      { key: 29, text: 'Information Systems', value: 'Information Systems' },
      {
        key: 30,
        text: 'Information Technologies',
        value: 'Information Technologies',
      },
      {
        key: 31,
        text: 'Management Information Systems',
        value: 'Management Information Systems',
      },
      { key: 32, text: 'Marketing', value: 'Marketing' },
      {
        key: 33,
        text: 'Materials Engineering',
        value: 'Materials Engineering',
      },
      { key: 34, text: 'Materials Science', value: 'Materials Science' },
      { key: 35, text: 'Mathematics', value: 'Mathematics' },
      {
        key: 36,
        text: 'Mechanical Engineering',
        value: 'Mechanical Engineering',
      },
      { key: 37, text: 'Nuclear Engineering', value: 'Nuclear Engineering' },
      { key: 38, text: 'Nursing', value: 'Nursing' },
      {
        key: 39,
        text: 'Petroleum Engineering',
        value: 'Petroleum Engineering',
      },
      { key: 40, text: 'Philosophy', value: 'Philosophy' },
      { key: 41, text: 'Physics', value: 'Physics' },
      { key: 42, text: 'Political Science', value: 'Political Science' },
      { key: 43, text: 'Psychology', value: 'Psychology' },
      { key: 44, text: 'Public Relations', value: 'Public Relations' },
      { key: 45, text: 'Social Work', value: 'Social Work' },
      { key: 46, text: 'Sociology', value: 'Sociology' },
      { key: 47, text: 'Software Engineering', value: 'Software Engineering' },
      { key: 48, text: 'Sports Management', value: 'Sports Management' },
      { key: 49, text: 'Statistics', value: 'Statistics' },
      { key: 50, text: 'Systems Engineering', value: 'Systems Engineering' },
    ];

    return (
      <Grid columns={12} style={{ marginTop: '25px' }}>
        <Grid.Row centered>
          <Grid.Column width={1} />
          <Grid.Column width={10} centered style={flexContainer}>
            <Progress percent={42} />
            <Step.Group widths={6}>
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to="/engine/new-rule/contacts">
                    <Step.Title>Rule Contacts</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
              <Step active>
                <Step.Content>
                  <Step.Title>Education</Step.Title>
                </Step.Content>
              </Step>
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to="/engine/new-rule/skills">
                    <Step.Title>Skills</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to="/engine/new-rule/experience">
                    <Step.Title>Experience</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to="/engine/new-rule/confirmation">
                    <Step.Title>Confirmation</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
            </Step.Group>
            <Grid style={{ marginTop: '25px' }}>
              <Grid.Row>
                <Grid.Column width={11}>
                  <Header as="h4">
                    What is the minimum the education required to send sending a
                    candidate?
                  </Header>
                </Grid.Column>
                <Grid.Column floated="right" width={5}>
                  <Dropdown
                    clearable
                    options={options}
                    selection
                    styles={{ width: '300px' }}
                    onChange={this.handleDegree}
                  />
                </Grid.Column>
              </Grid.Row>
              <Divider />
              <Grid.Row>
                <Grid.Column width={2} verticalAlign="middle">
                  <Header as="h4">Major(s)</Header>
                </Grid.Column>
                <Grid.Column floated="left" width={14} verticalAlign="middle">
                  <Dropdown
                    placeholder="Majors"
                    search
                    fluid
                    multiple
                    selection
                    allowAdditions
                    options={majors}
                    onAddItem={this.handleAddition}
                    onChange={this.handleChange}
                    value={this.state.majors}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid.Column
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Button
                style={primaryButton}
                as={Link}
                to="/engine/new-rule/contacts"
              >
                <Icon name="arrow left" size="small" />
                Back
              </Button>
              <Button
                style={primaryButton}
                onClick={this.handleSubmit}
                as={Link}
                to="/engine/new-rule/skills"
              >
                Next <Icon name="arrow right" size="small" />
              </Button>
            </Grid.Column>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
      </Grid>
    );
  }
}

export default NewRuleEducation;
