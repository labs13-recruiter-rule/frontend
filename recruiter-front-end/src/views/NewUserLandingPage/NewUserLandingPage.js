import React from 'react';
import { Grid, Button, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import MarketingCards from '../../components/Cards/MarketingCards';

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
        <Grid.Column width={10} centered="true" style={flexContainer}>
          <Header as="h1" style={center}>
            Recruiter Rules
          </Header>
          <Header as="h3" style={center}>
            Send your candidate to the correct contacts every time
          </Header>
          <Header as="h2" style={center}>
            3 Simple Steps To Create Your First Rule
          </Header>
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid.Row>
      <Grid.Row centered>
        <MarketingCards />
        <Link style={linkStyles} to="/new-rule/education">
          <Button style={primaryButton}>Create Rule</Button>
        </Link>
      </Grid.Row>
    </Grid>
  );
}

export default App;
