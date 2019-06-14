import React from 'react';
import { Grid } from 'semantic-ui-react';
import CreateGroupForm from '../../components/NewGroup/CreateGroupForm';
import NewContact from '../../components/Contacts/NewContactForm';
const flexContainer = {
  display: 'flex',
  flexDirection: 'column',
};

const center = {
  textAlign: 'center',
};

function NewContactGroupView() {
  return (
    <Grid columns={12}>
      <Grid.Row centered>
        <Grid.Column width={1} />
        <Grid.Column width={10} centered style={flexContainer}>
          <h2 class="ui header" style={center}>
            Where should we send these candidates?
          </h2>
          <CreateGroupForm />
          <NewContact />
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid.Row>
    </Grid>
  );
}

export default NewContactGroupView;
