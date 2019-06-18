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
          <Header as="h1" style={center}>
            Recruiter Rules
          </Header>
          <Header as="h2" style={center}>
            Send your candidate to the correct contacts every time
          </Header>

          <Link style={linkStyles} to="/new-contact-group">
            <Button style={primaryButton}>Create Rules Engine</Button>
          </Link>
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid.Row>
    </Grid>
  );
}

export default App;
