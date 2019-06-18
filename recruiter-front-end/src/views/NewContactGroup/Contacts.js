import React from 'react';
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
import CreateGroupForm from '../../components/NewGroup/CreateGroupForm';
import NewContact from '../../components/Contacts/NewContactForm';

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
          <Progress percent={25} />
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
          <h2 class="ui header" style={center}>
            Where should we send these candidates?
          </h2>
          <NewContact />
          <Grid.Column
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Button style={primaryButton} as={Link} to="/new-contact-group">
              <Icon name="arrow left" size="small" />
              Back
            </Button>
            <Button
              style={primaryButton}
              onClick={handleSubmit}
              as={Link}
              to="/new-rule/education"
            >
              Next <Icon name="arrow right" size="small" />
            </Button>
          </Grid.Column>
          <Modal
            trigger={
              <Button style={secondaryButton}>What is a contact group?</Button>
            }
            closeIcon
          >
            <Header content="What is a contact group?" />
            <Modal.Content>
              <p>
                A contact group is a collection of contacts. As an example you
                might have a Sales Managers group with the sales managers
                Samantha and Robert.
              </p>
            </Modal.Content>
          </Modal>
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid.Row>
    </Grid>
  );
}

export default NewContactGroupView;
