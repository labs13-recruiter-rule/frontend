import React from './node_modules/react';
import { Grid, Divider } from './node_modules/semantic-ui-react';
import DefaultContactMessage from './DefaultContactMessage';
import DefaultContactFields from './DefaultContactFields';
import WhatModal from './WhatModal';
import CreateRuleButton from './CreateRuleButton';

const flexContainer = {
  display: 'flex',
  flexDirection: 'column',
};

const center = {
  textAlign: 'center',
};

function CreateDefaultContact() {
  return (
    <Grid columns={12}>
      <Grid.Row centered>
        <Grid.Column width={1} />
        <Grid.Column width={10} centered style={flexContainer}>
          <h1 className="ui header" style={center}>
            Default Contact
          </h1>
          <Divider />
          <DefaultContactMessage style={center} />
          <Divider hidden />
          <DefaultContactFields />
          <Divider hidden />
          <WhatModal centered />
          <Divider hidden />
          <CreateRuleButton />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default CreateDefaultContact;
