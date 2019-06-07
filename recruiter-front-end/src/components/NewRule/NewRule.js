/* IMPORTS */
import React from 'react'
import { Container, Divider, Header, Button } from 'semantic-ui-react';
/* IMPORTS */

class NewRule extends React.Component {
  render() {
    return (
      <Container>
        <Header as='h1'>Recruiter Rule</Header>
        <Divider hidden/>
        <p>No rules setup. Create your first rule.</p>
        <Divider hidden/>
        <Button class="ui button">Create Rule</Button>
      </Container>
    );
  }
}

export default NewRule;