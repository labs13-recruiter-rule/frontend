import React from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';
import rules from '../../images/rules.jpg';
import contacts from '../../images/contacts.jpg';
import candidates from '../../images/candidates.jpg';

const MarketingCards = () => (
  <Grid.Row centered style={{ display: 'flex' }}>
    <Card style={{ margin: '1em 15px' }}>
      <Image src={rules} wrapped ui={false} />
      <Card.Content>
        <Card.Header>1. Create Rules</Card.Header>
        <Card.Description>
          Create rules for a canidate's education, skills and experiences
        </Card.Description>
      </Card.Content>
    </Card>
    <Card style={{ margin: '1em 15px' }}>
      <Image src={contacts} wrapped ui={false} />
      <Card.Content>
        <Card.Header>2. Add Contacts</Card.Header>
        <Card.Description>
          Specify where you want to send a candidate when they either pass or do
          not pass the rule
        </Card.Description>
      </Card.Content>
    </Card>
    <Card style={{ margin: '1em 15px' }}>
      <Image src={candidates} wrapped ui={false} />
      <Card.Content>
        <Card.Header>3. Add Candidates</Card.Header>
        <Card.Description>
          Add information about the candidate's contact information, education,
          skills and experiences
        </Card.Description>
      </Card.Content>
    </Card>
  </Grid.Row>
);

export default MarketingCards;
