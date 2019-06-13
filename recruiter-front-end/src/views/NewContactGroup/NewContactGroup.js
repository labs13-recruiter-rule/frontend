import React from 'react';
import NewContact from '../../components/Contacts/NewContactForm';
import { Grid } from 'semantic-ui-react';

const flexContainer = {
  display: 'flex',
  flexDirection: 'column',
};

const center = {
  textAlign: 'center',
};

function App() {
  return (
    <Grid columns={12}>
      <Grid.Row centered>
        <Grid.Column width={1} />
        <Grid.Column width={10} centered style={flexContainer}>
          <h2 class="ui header" style={center}>
            New Contact Group
          </h2>
          <NewContact />
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid.Row>
    </Grid>
  );
}

export default App;
