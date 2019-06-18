import React from 'react';
import { Grid, Divider, Form } from 'semantic-ui-react';
import DegreeDropdown from './DegreeDropdown';
import MajorDropdown from './MajorDropdown';
import ExperienceDropdown from './ExperienceDropdown';
import SkillDropdown from './SkillDropdown';

const flexContainer = {
  display: 'flex',
  flexDirection: 'column',
};

const center = {
  textAlign: 'center',
};

function AddCandidatePage() {
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
              <SkillDropdown />
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

export default AddCandidatePage;
