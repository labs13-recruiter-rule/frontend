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
          <Progress percent={90} />
          <Step.Group widths={6}>
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
                <Step.Title>Experience</Step.Title>
              </Step.Content>
            </Step>
            <Step active link href="/new-candidate/experience">
              <Step.Content>
                <Step.Title>Experience</Step.Title>
              </Step.Content>
            </Step>
          </Step.Group>
          <h3 style={center}>Experience</h3>
          <Divider />
          <Form className="Experience">
            <Form.Field>
              <label>Years of Experience</label>
              <ExperienceDropdown />
            </Form.Field>
          </Form>
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid.Row>
    </Grid>
  );
}

export default App;
