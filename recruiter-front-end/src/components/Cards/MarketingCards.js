import React from 'react';
import { Card, Image, Grid, Icon } from 'semantic-ui-react';
import rules from '../../images/rules.jpg';
import contacts from '../../images/contacts.jpg';
import candidates from '../../images/candidates.jpg';

const MarketingCards = () => (
  <Grid.Row centered style={{ display: 'flex', alignItems: 'top' }}>
    <Card.Group style={{ justifyContent: 'center' }}>
      <Card style={{ margin: '1em 15px' }}>
        <Image src={rules} wrapped ui={false} />
        <Card.Content>
          <Card.Header>1. Create a Rule Engine</Card.Header>
          <Card.Description>
            Initialize your first rule engine and give it a name. You have the
            ability to create as many engines as you'd like.
          </Card.Description>
        </Card.Content>
      </Card>
      <Card style={{ margin: '1em 15px' }}>
        <Image src={contacts} wrapped ui={false} />
        <Card.Content>
          <Card.Header>2. Add Rules to your Engine</Card.Header>
          <Card.Description>
            Choose contacts and tell us what experience, skills, or
            education requirements the candidate should have for their information to be sent to them.
             You can add as many rules as you want to each engine. One rule on one engine isn't enough for you? Create more.
          </Card.Description>
        </Card.Content>
      </Card>
      <Card style={{ margin: '1em 15px' }}>
        <Image src={candidates} wrapped ui={false} />
        <Card.Content>
          <Card.Header>3. Run Candidates through the Rule Engine</Card.Header>
          <Card.Description>
            Run a candidate's information through the rule engine and preview the email text before it sends, so the right
            person (according to you!) gets the right candidate's information. Every time.
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  </Grid.Row>
);

export default MarketingCards;
