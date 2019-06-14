/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Grid, Divider, Form, Dropdown, Input } from 'semantic-ui-react';

const flexContainer = {
  display: 'flex',
  flexDirection: 'column',
};

const center = {
  textAlign: 'center',
};

const DegreeSelection = [
  {
    key: '1',
    text: 'High School Diploma / GED or equivalent',
    value: 'High School Diploma / GED or equivalent',
  },
  {
    key: '2',
    text: 'Some College or equivalent',
    value: 'Some College or equivalent',
  },
  {
    key: '3',
    text: "Associate's Degree or equivalent",
    value: "Associate's Degree or equivalent",
  },
  {
    key: '4',
    text: "Bachelor's Degree or equivalent",
    value: "Bachelor's Degree or equivalent",
  },
  {
    key: '5',
    text: "Master's Degree or equivalent",
    value: "Master's Degree or equivalent",
  },
  {
    key: '6',
    text: 'PhD or equivalent',
    value: 'PhD or equivalent',
  },
];

const MajorSelection = [
  {
    key: '1',
    text: 'High School Diploma / GED or equivalent',
    value: 'High School Diploma / GED or equivalent',
  },
  {
    key: '2',
    text: 'Some College or equivalent',
    value: 'Some College or equivalent',
  },
];

const ExperienceSelection = [
  {
    key: '1',
    text: 'Less than 6 Months',
    value: 'Less than 6 Months',
  },
  {
    key: '2',
    text: '6 Months to 1 Year',
    value: '6 Months to 1 Year',
  },
  {
    key: '3',
    text: '1 Year',
    value: '1 Year',
  },
  {
    key: '4',
    text: '2 Years',
    value: '2 Years',
  },
  {
    key: '5',
    text: '3 years',
    value: '3 years',
  },
];

const DegreeDropdown = () => (
  <Dropdown
    placeholder="Select Degree"
    fluid
    selection
    options={DegreeSelection}
  />
);

const MajorDropdown = () => (
  <Dropdown
    placeholder="Select Major"
    fluid
    selection
    options={MajorSelection}
  />
);

const ExperienceDropdown = () => (
  <Dropdown
    placeholder="Select Experience"
    fluid
    selection
    options={ExperienceSelection}
  />
);

const SkillsTags = () => <Input placeholder="Enter Skill" />;

function App() {
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
          <Form className="Contact">
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
                Major - Is this supposed to be a drop down or search?
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

export default App;
