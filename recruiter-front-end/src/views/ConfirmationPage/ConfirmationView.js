import React from './node_modules/react';
import { Container } from './node_modules/semantic-ui-react';
import Message from './Message';

class ConfirmationView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Message />
      </Container>
    );
  }
}

export default ConfirmationView;
