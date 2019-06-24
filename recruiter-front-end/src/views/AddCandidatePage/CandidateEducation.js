import React from 'react';
import {
  Button,
  Icon,
  Grid,
  Form,
  Step,
  Progress,
  Dropdown,
  Header,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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

class CandidateEducation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      majors: [],
      education: [],
    };
  }

  handleDegree = (e, { value }) => {
    this.setState({ education: value });
  };

  handleChange = (e, { value }) => this.setState({ majors: value });

  handleAddition = (e, { value }) => {
    this.setState(prevState => ({
      options: [{ text: value, value }, ...prevState.options],
    }));
  };

  handleSubmit = e => {
    this.props.candidateMajor(this.state.majors);
    this.props.candidateEducation(this.state.education);
  };

  render() {
    const degreeType = [
      { key: 1, text: 'High School / GED', value: 'High School / GED' },
      { key: 2, text: 'Some College', value: 'Some College' },
      { key: 3, text: "Associate's", value: "Associate's" },
      { key: 4, text: "Bachelor's Degree", value: "Bachelor's Degree" },
      { key: 5, text: "Master's Degree", value: "Master's Degree" },
      { key: 6, text: 'PhD', value: 'PhD' },
    ];

    return (
      <Grid columns={12} style={{ marginTop: '25px' }}>
        <Grid.Row centered>
          <Grid.Column width={1} />
          <Grid.Column width={10} centered style={flexContainer}>
            <Progress percent={50} />
            <Step.Group widths={7}>
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
              <Step active link href="/new-candidate/education">
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
              <Step link href="/new-candidate/confirm">
              <Step.Content>
                <Step.Title>Confirm</Step.Title>
              </Step.Content>
            </Step>
            </Step.Group>
            <Form className="Education">
              <Form.Field>
                <Header as="h4">Highest Level of Education</Header>
                <Dropdown
                  clearable
                  options={degreeType}
                  selection
                  styles={{ width: '300px' }}
                  onChange={this.handleDegree}
                />
              </Form.Field>
              <Form.Field>
                <Header as="h4">Major(s)</Header>
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
              </Form.Field>
            </Form>
            <Grid.Row
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Button
                style={primaryButton}
                as={Link}
                to="/new-candidate/contact"
              >
                <Icon name="arrow left" size="small" />
                Back
              </Button>
              <Button
                style={primaryButton}
                onClick={this.handleSubmit}
                as={Link}
                to="/new-candidate/skills"
              >
                Next <Icon name="arrow right" size="small" />
              </Button>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
      </Grid>
    );
  }
}

export default CandidateEducation;
