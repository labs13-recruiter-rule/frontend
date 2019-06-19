import React from 'react';
import { Grid, Button, Modal, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const flexContainer = {
  display: 'flex',
  flexDirection: 'column',
};

const center = {
  textAlign: 'center',
};

const primaryButton = {
  margin: '20px auto',
  height: '5rem',
  width: '300px',
  fontSize: '1.25rem',
  fontStyle: 'italic',
};

const secondaryButton = {
  margin: '10px auto',
  height: '3rem',
  width: '200px',
  fontSize: '1rem',
  fontStyle: 'italic',
};

const linkStyles = {
  textAlign: 'center',
};

function App() {
  return (
    <Grid columns={12} style={{ marginTop: '25px' }}>
      <Grid.Row centered>
        <Grid.Column width={1} />
        <Grid.Column width={10} centered style={flexContainer}>
          <h2 class="ui header" style={center}>
            Ruler Rules sends your candidate to the correct group of contacts
            every time.
          </h2>
          <h3 class="ui header" style={center}>
            Let's start with your first contact group 👇
          </h3>
          <Link style={linkStyles} to="/new-contact-group">
            <Button style={primaryButton}>New Contact Group</Button>
          </Link>

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

export default App;
