import React from 'react';
import { Message } from 'semantic-ui-react';

class Success extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Message positive>
        <Message.Header>Congratulations!</Message.Header>
        <p>
          You created a rule for the <b>Sales Manager</b> group.
        </p>
      </Message>
    );
  }
}

export default Success;
