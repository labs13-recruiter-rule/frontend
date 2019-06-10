/* IMPORTS */
import React from 'react';
import { Header } from "semantic-ui-react";
/* IMPORTS */

export default class MainHeader extends React.Component {
  render() {
    return (
      <Header as='h2' disabled textAlign='center'>
        No conditions created. Click to create conditions.
      </Header>
    )
  }
}