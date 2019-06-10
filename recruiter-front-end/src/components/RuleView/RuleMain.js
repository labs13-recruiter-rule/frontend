/* IMPORTS */
import React, { Component } from 'react';
import MainHeader from './MainHeader';
import HelpModal from './HelpModal';
import CreateCondition from './CreateCondition';
import { Container, Divider, Form } from 'semantic-ui-react';
/* IMPORTS */

export class RuleMain extends Component {

  render() {
    return (
      <Container>
        <Form>

        </Form>
      </Container>
    )
  }
}

export default RuleMain

/*
https://balsamiq.cloud/s5supw2/ppt820q/rAEEC
https://react.semantic-ui.com/modules/tab/#types-basic-all


FIRST VIEW
<Divider hidden />
<MainHeader />
<Divider hidden/>
<CreateCondition />
<Divider hidden />
<HelpModal />
*/