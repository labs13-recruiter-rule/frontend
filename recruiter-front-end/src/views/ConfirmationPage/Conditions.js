import React from 'react';
import { Container, Divider, Button } from 'semantic-ui-react';

class Conditions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const parent = {
      borderStyle: 'solid',
      borderWidth: '1px',
      padding: '1.5rem',
    };

    const child1 = {
      paddingTop: '1.5rem',
      paddingBottom: '1.5rem',
    };

    const child2 = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    };

    const centerText = {
      textAlign: 'center',
    };

    return (
      <Container>
        <div style={parent}>
          <h2 style={centerText}>
            Conditions will be sent to the Sales Manager Group when...
          </h2>
          <div style={child1}>
            <h3>Education</h3>
            <Divider />
            <div style={child2}>
              <p>
                Highest level of education is at least high school diploma or
                equivalent
              </p>
              <Button.Group>
                <Button>Update</Button>
                <Button.Or />
                <Button color="red">Delete</Button>
              </Button.Group>
            </div>
          </div>
          <div style={child1}>
            <h3>Skills</h3>
            <Divider />
            <div style={child2}>
              <p>Skills must include `sales`</p>
              <Button.Group>
                <Button>Update</Button>
                <Button.Or />
                <Button color="red">Delete</Button>
              </Button.Group>
            </div>
          </div>
          <div style={child1}>
            <h3>Experience</h3>
            <Divider />
            <div style={child2}>
              <p>Must have at least 6 months of experience</p>
              <Button.Group>
                <Button>Update</Button>
                <Button.Or />
                <Button color="red">Delete</Button>
              </Button.Group>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Conditions;
