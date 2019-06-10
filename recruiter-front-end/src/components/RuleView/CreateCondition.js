/* IMPORTS */
import React from 'react';
import { Grid, Button } from "semantic-ui-react";
/* IMPORTS */

export default class CreateCondition extends React.Component {
  render() {
    return (
      <Grid>
          <Grid.Column textAlign="center">
              <Button size='massive'>
                Create a Condition
              </Button>
          </Grid.Column>
        </Grid>
    )
  }
}