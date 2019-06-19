import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import Success from '../../components/Confirmation/Success';
import Header from '../../components/Confirmation/Header';
import Conditions from '../../components/Confirmation/Conditions';
import AddContact from '../../components/Confirmation/AddContact';
import AddCandidate from '../../components/Confirmation/AddCandidate';
import ViewDashboard from '../../components/Confirmation/ViewDashboard';

class Confirmation extends React.Component {
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

export default Confirmation;
