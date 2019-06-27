import React from 'react';
import { Grid, Button, Header, Image, Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import sendArrow from '../../images/send-arrows.jpg';
import carryenvelope from '../../images/carryenvelope.jpg';
import MarketingCards from '../../components/Cards/MarketingCards';
import axios from 'axios';

import { getEngines } from '../../actions/engineActions';

import candidates from '../../images/candidates.jpg';

const token = sessionStorage.getItem('token');
const tokenHeader = { headers: { token: `${token}` } };

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
  constructor(props) {
    super(props);
    this.state = {
      userContacts: null,
    };
  }

  createNewRule = () => {
    this.props.createNewRule();
  };

  componentDidMount() {
    this.getContacts();
    this.props.getEngines().then(() => {
      this.setState({ engines: this.props.engines });
    });
  }

  getContacts() {
    axios
      .get('https://recruiter-back-end.herokuapp.com/contacts', tokenHeader)
      .then(res => {
        this.setState({ userContacts: res.data.length });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Grid columns={12} style={{ marginTop: '25px' }}>
        <Grid.Row centered>
          <Grid.Column width={1} />
          <Grid.Column width={10} centered="true" style={flexContainer}>
            <Header as="h1" style={center}>
              Welcome to Recruiter Rules!
            </Header>
            <Grid.Row centered style={{ display: 'flex', alignItems: 'top' }}>
              <Card.Group style={{ justifyContent: 'center' }}>
                <Card style={{ margin: '1em 15px' }} as={Link} to="/contacts">
                  <Card.Content>
                    <Card.Header>
                      <Icon name="user" size="small" />{' '}
                      {this.state.userContacts === null
                        ? null
                        : this.state.userContacts}
                    </Card.Header>
                    <Card.Description>Contacts</Card.Description>
                  </Card.Content>
                </Card>
                <Card style={{ margin: '1em 15px' }} as={Link} to="/engines">
                  <Card.Content>
                    <Card.Header>
                      <Icon name="car" size="small" />{' '}
                      {this.props.engines.length}
                    </Card.Header>
                    <Card.Description>Engines</Card.Description>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Grid.Row>
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

const mapStateToProps = ({ engines }) => ({
  engines,
});

export default connect(
  mapStateToProps,
  { getEngines },
)(NewUserLandingPage);
