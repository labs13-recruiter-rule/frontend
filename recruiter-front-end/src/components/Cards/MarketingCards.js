import React from 'react';
import { Card, Image, Grid, Icon } from 'semantic-ui-react';
import rules from '../../images/rules.jpg';
import contacts from '../../images/contacts.jpg';
import candidates from '../../images/candidates.jpg';

const MarketingCards = () => (
  <Grid.Row centered style={{ display: 'flex', alignItems: 'top' }}>
    <Card style={{ margin: '1em 15px' }}>
      <Image src={rules} wrapped ui={false} />
      <Card.Content>
        <Card.Header>1. Create a Rule Engine</Card.Header>
        <Card.Description>
          Initialize your first rule engine and give it a name. You have the ability to create as many engines as you'd like.
        </Card.Description>
      </Card.Content>
    </Card>
    <Icon disabled name="arrow right" size="big" />
    <Card style={{ margin: '1em 15px' }}>
      <Image src={contacts} wrapped ui={false} />
      <Card.Content>
        <Card.Header>2. Add Rules to your Engine</Card.Header>
        <Card.Description>
          Choose a contact or contacts and tell us what experience, skills, or education requirements the candidate should have to be sent to each contact or set of contacts. You can add as many rules as you want to each engine.
        </Card.Description>
      </Card.Content>
    </Card> 
    <Icon disabled name="arrow right" size="big" />
    <Card style={{ margin: '1em 15px' }}>
      <Image src={candidates} wrapped ui={false} />
      <Card.Content>
        <Card.Header>3. Run Candidates through the Rule Engine</Card.Header>
        <Card.Description>
          Run a candidate's information through the rule engine, so the right person (according to you!) gets their information. Every time.
        </Card.Description>
      </Card.Content>
    </Card>
  </Grid.Row>
);

export default MarketingCards;
