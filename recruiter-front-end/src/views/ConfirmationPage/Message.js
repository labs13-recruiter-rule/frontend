import React from './node_modules/react';
import { Container } from './node_modules/semantic-ui-react';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <h1>Congratulations!</h1>
        <h1>You created your first rule for the Sales Managers group.</h1>
      </Container>
    );
  }
}

export default Message;
