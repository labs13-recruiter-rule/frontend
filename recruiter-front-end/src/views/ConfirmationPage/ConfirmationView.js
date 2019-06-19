import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import Success from './Success';
import Header from './Header';
import Conditions from './Conditions';
import AddContact from './AddContact';
import AddCandidate from './AddCandidate';
import ViewDashboard from './ViewDashboard';

class ConfirmationView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const flexContainer = {
      display: 'flex',
      flexDirection: 'column',
      padding: '5rem',
    };
    return (
      <Container style={flexContainer}>
        <Success />
        <Divider hidden />
        <Header />
        <Divider hidden />
        <Conditions />
        <Divider hidden />
        <AddContact />
        <Divider hidden />
        <AddCandidate />
        <Divider hidden />
        <ViewDashboard />
      </Container>
    );
  }
}

export default ConfirmationView;
