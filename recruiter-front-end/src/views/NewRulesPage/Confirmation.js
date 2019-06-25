import React from 'react';
import {
  Grid,
  Button,
  Modal,
  Header,
  Icon,
  Progress,
  Step,
  Form,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const token = sessionStorage.getItem('token');

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fallbackName: '',
      fallbackEmail: '',
    };
  }

  handleSubmit = e => {
    // console.log('this.state', this.state);
    console.log('confirm handlesubmit clicked');
    e.preventDefault();
    this.props.submitRule();
    // Axios.post(
    //   'https://recruiter-back-end.herokuapp.com/engine/addRule',
    //   this.state,
    //   {
    //     headers: {
    //       token: `${token}`,
    //     },
    //   },
    // )
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => console.log(err));
  };

  handleName = e => {
    this.setState({ fallbackName: e.target.value });
  };

  handleEmail = e => {
    this.setState({ fallbackEmail: e.target.value });
  };

  render() {
    const flexContainer = {
      display: 'flex',
      flexDirection: 'column',
    };

    const primaryButton = {
      margin: '50px 0',
      height: '4rem',
      width: '150px',
      fontSize: '1.35rem',
      fontWeight: '900',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };

    const secondaryButton = {
      margin: '10px auto',
      height: '3rem',
      width: '350px',
      fontSize: '1rem',
    };

    const linkStyles = {
      textAlign: 'center',
      color: 'rgba(0,0,0,.87)',
    };

    const center = {
      textAlign: 'center',
    };

    return (
      <Grid columns={12} style={{ marginTop: '25px' }}>
        <Grid.Row centered>
          <Grid.Column width={1} />
          <Grid.Column width={10} centered style={flexContainer}>
            <Progress percent={92} />
            <Step.Group widths={6}>
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to="/new-rule/engine">
                    <Step.Title>Engine</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to="/new-rule/contacts">
                    <Step.Title>Contacts</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to="/new-rule/education">
                    <Step.Title>Education</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
              <Step>
                <Link style={linkStyles} to="/new-rule/skills">
                  <Step.Content>
                    <Step.Title>Skills</Step.Title>
                  </Step.Content>
                </Link>
              </Step>
              <Step>
                <Step.Content>
                  <Link style={linkStyles} to="/new-rule/experience">
                    <Step.Title>Experience</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
              <Step active>
                <Step.Content>
                  <Link style={linkStyles} to="/new-rule/confirmation">
                    <Step.Title>Confirmation</Step.Title>
                  </Link>
                </Step.Content>
              </Step>
            </Step.Group>
            <Header as="h3" style={center}>
              If a candidate does not meet the education, skills and experience
              requirements to be sent to any of the contacts in this rule
              engine, where should we send them?
            </Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <Form.Input
                  label="Name"
                  value={this.state.fallbackName}
                  onChange={this.handleName}
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label="Email"
                  value={this.state.fallbackEmail}
                  onChange={this.handleEmail}
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                />
              </Form.Field>
              <Grid.Column
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Button style={primaryButton} as={Link} to="/new-rule/skills">
                  <Icon name="arrow left" size="small" />
                  Back
                </Button>
                <Button
                  style={primaryButton}
                  onClick={this.handleSubmit}
                  type="submit"
                  as={Link}
                  to="/"
                >
                  Submit
                </Button>
              </Grid.Column>
            </Form>
            <Modal
              trigger={
                <Button style={secondaryButton}>
                  I'm confused. Please explain how this will work.
                </Button>
              }
              closeIcon
            >
              <Header content="Rules" />
              <Modal.Content>
                <p>
                  Rules are conditions for sending a candidate to a contacts
                  group. Let's say that you are recruiting for the marketing
                  department. The marketing department is always looking for new
                  candidates with a variety of jobs with various requirements. A
                  marketing intern might have
                </p>
              </Modal.Content>
            </Modal>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
      </Grid>
    );
  }
}

export default Confirmation;
