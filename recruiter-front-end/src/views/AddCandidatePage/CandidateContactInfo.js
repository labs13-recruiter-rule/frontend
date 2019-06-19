import React from 'react';
import {
  Grid,
  Divider,
  Form,
  Input,
  Step,
  Link,
  Progress,
} from 'semantic-ui-react';
import DegreeDropdown from '../../components/DegreeDropdown/DegreeDropdown';
import MajorDropdown from '../../components/MajorDropdown/MajorDropdown';
import ExperienceDropdown from '../../components/ExperienceDropdown/ExperienceDropdown';

const flexContainer = {
  display: 'flex',
  flexDirection: 'column',
};

const center = {
  textAlign: 'center',
};

const SkillsTags = () => <Input placeholder="Enter Skill" />;

function App() {
  return (
    <Grid columns={12}>
      <Grid.Row centered>
        <Grid.Column width={1} />
        <Grid.Column width={10} centered style={flexContainer}>
          <Progress percent={15} />
          <Step.Group widths={6}>
            <Step active link href="/new-candidate/contact-info">
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
                <Step.Title>Contacts</Step.Title>
              </Step.Content>
            </Step>
          </Step.Group>
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
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid.Row>
    </Grid>
  );
}

export default App;
