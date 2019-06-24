import React from 'react';
import {Header, Grid, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

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

class CandidateSend extends React.Component {
    render() {
        return (
            <Grid>
                
          <Grid.Column width={1} />
          <Grid.Column width={10} centered style={flexContainer}>
            <Grid.Row>
            <Header>Congratulations!</Header>
            </Grid.Row>
            <Grid.Row>
            <p>The candidate has been sent to INSERT CONTACT HERE</p>
            </Grid.Row>
            <Button style={primaryButton} as={Link} to="/new-candidate/engine">Send another Candidate</Button>
            </Grid.Column>
          <Grid.Column width={1} />
            </Grid>
        );
    }
}

export default CandidateSend;