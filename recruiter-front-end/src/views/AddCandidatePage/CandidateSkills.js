import React from 'react';
import {
  Grid,
  Button,
  Icon,
  Form,
  Input,
  Step,
  Progress,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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

const SkillsTags = () => <Input placeholder="Enter Skill" />;

function App() {
  return (
    <Grid columns={12}>
      <Grid.Row centered>
        <Grid.Column width={1} />
        <Grid.Column width={10} centered style={flexContainer}>
          <Progress percent={65} />
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
            <Step active link href="/new-candidate/skills">
              <Step.Content>
                <Step.Title>Skills</Step.Title>
              </Step.Content>
            </Step>
            <Step link href="/new-candidate/experience">
              <Step.Content>
                <Step.Title>Experience</Step.Title>
              </Step.Content>
            </Step>
          </Step.Group>
          <Form className="Skills">
            <Form.Field>
              <label>Skill Tags</label>
              <SkillsTags />
            </Form.Field>
          </Form>
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
              as={Link}
              to="/new-candidate/experience"
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

export default App;
