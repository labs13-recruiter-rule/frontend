import React from 'react';
import { Grid, Button, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import MarketingCards from '../components/Cards/MarketingCards';

const flexContainer = {
  display: 'flex',
  flexDirection: 'column',
};

const center = {
  textAlign: 'center',
};

const primaryButton = {
  margin: '20px auto',
  height: '3.5rem',
  width: '300px',
  fontSize: '1.25rem',
  fontStyle: 'italic',
};

const linkStyles = {
  textAlign: 'center',
};

function MarketingPage() {
  return (
    <Grid columns={12} style={{ marginTop: '25px' }}>
      <Grid.Row centered>
        <Grid.Column width={1} />
        <Grid.Column width={10} centered="true" style={flexContainer}>
          <Header as="h1" style={center}>
            Recruiter Rule Engine
          </Header>
          <Header as="h3" style={center}>
            Send your candidates to the correct contacts every time
          </Header>
          <Header as="h2" style={center}>
            3 Simple Steps To Create Your First Rule Engine
          </Header>
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid.Row>
      <Grid.Row centered>
        <MarketingCards />
      </Grid.Row>
    </Grid>
  );
}

export default MarketingPage;
