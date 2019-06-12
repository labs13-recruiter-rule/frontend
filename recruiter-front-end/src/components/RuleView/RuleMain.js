/* IMPORTS */
import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import MainHeader from './MainHeader';
import HelpModal from './HelpModal';
import CreateCondition from './CreateCondition';
/* IMPORTS */

export class RuleMain extends Component {
  render() {
    return (
      <Container>
        <Divider hidden />
        <MainHeader />
        <Divider hidden />
        <CreateCondition />
        <Divider hidden />
        <HelpModal />
      </Container>
    );
  }
}

export default RuleMain;
