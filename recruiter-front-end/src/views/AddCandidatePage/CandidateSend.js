import React from 'react';
import { Header, Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const flexContainer = {
  padding: '4rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', 
  justifyContent: 'center'
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
      <Grid style={flexContainer}>
         
            <Header as="h1">Congratulations!</Header>
        
            <p>The candidate's information was successfully sent.</p>

          <Button style={primaryButton} as={Link} to="/new-candidate/engine">
            Send another Candidate
          </Button>
       
      </Grid>
    );
  }
}

export default CandidateSend;
