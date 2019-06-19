import React from './node_modules/react';
import {
  Grid,
  Progress,
  Step,
  Modal,
  Button,
  Header,
  Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import NewUserContact from '../../components/Contacts/NewUserContactForm';

const flexContainer = {
  display: 'flex',
  flexDirection: 'column',
};

const center = {
  textAlign: 'center',
};

const linkStyles = {
  textAlign: 'center',
  color: 'rgba(0,0,0,.87)',
};

const secondaryButton = {
  margin: '10px auto',
  height: '3rem',
  width: '350px',
  fontSize: '1rem',
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

const handleSubmit = e => {
  console.log('Contacts handleSubmit');
};

function NewContactGroupView() {
  return (
    <Grid columns={12} style={{ marginTop: '25px' }}>
      <Grid.Row centered>
        <Grid.Column width={1} />
        <Grid.Column width={10} centered style={flexContainer}>
          <Progress percent={90} />
          <Step.Group widths={6}>
            <Step>
              <Step.Content>
                <Link style={linkStyles} to="/new-rule/education">
                  <Step.Title>Education</Step.Title>
                </Link>
              </Step.Content>
            </Step>
            <Step>
              <Step.Content>
                <Link style={linkStyles} to="/new-rule/skills">
                  <Step.Title>Skills</Step.Title>
                </Link>
              </Step.Content>
            </Step>
            <Step>
              <Step.Content>
                <Link style={linkStyles} to="/new-rule/experience">
                  <Step.Title>Experience</Step.Title>
                </Link>
              </Step.Content>
            </Step>
            <Step active>
              <Step.Content>
                <Link style={linkStyles} to="/new-contact-group/contacts">
                  <Step.Title>Contacts</Step.Title>
                </Link>
              </Step.Content>
            </Step>
          </Step.Group>
          <Header as="h3" style={center}>
            When a candidate passes these rules, where should they be sent?
          </Header>
          <NewUserContact />
          <Grid.Column
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Button style={primaryButton} as={Link} to="/new-rule/experience">
              <Icon name="arrow left" size="small" />
              Back
            </Button>
            <Modal
              trigger={<Button style={primaryButton}>Submit</Button>}
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
                <Button color="red">
                  <Icon name="x" /> No
                </Button>
                <Button color="green" as={Link} to="/new-rule/education">
                  <Icon name="check" /> Yes
                </Button>
              </Modal.Actions>
            </Modal>
          </Grid.Column>
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid.Row>
    </Grid>
  );
}

export default NewContactGroupView;
