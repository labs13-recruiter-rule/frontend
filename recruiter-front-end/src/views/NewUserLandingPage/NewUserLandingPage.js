import React from 'react';
import { Grid, Button, Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import sendArrow from '../../images/send-arrows.jpg'
import carryenvelope from '../../images/carryenvelope.jpg';
import MarketingCards from '../../components/Cards/MarketingCards';

const flexContainer = {
  display: 'flex',
  flexDirection: 'column',
};

const center = {
  textAlign: 'center',
};

const primaryButton = {
  margin: '20px auto',
  height: '3.5rem',
  width: '300px',
  fontSize: '1.25rem',
  fontStyle: 'italic',
};

const linkStyles = {
  textAlign: 'center',
};

class NewUserLandingPage extends React.Component {
  createNewRule = () => {
    this.props.createNewRule();
  };

  render() {
    return (
      <Grid columns={12} style={{ marginTop: '25px' }}>
        <Grid.Row centered>
          <Grid.Column width={1} />
          <Grid.Column width={10} centered="true" style={flexContainer}>
            <Header as="h1" style={center}>
             Welcome to Recruiter Rules!
            </Header>
            <Image src={carryenvelope} alt="person carrying envelope" />
            {/* <Header as="h2" style={center}>
              3 Simple Steps To Create Your First Rule Engine
            </Header> */}
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
        <Grid.Row centered>
          {/* <MarketingCards /> */}
          <Link style={linkStyles} to="/new-rule/engine">
            <Button onClick={this.createNewRule} style={primaryButton}>
              Create a New Rule Engine
            </Button>
          </Link>
        </Grid.Row>
      </Grid>
    );
  }
}

export default NewUserLandingPage;
