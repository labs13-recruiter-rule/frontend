import React from './node_modules/react';
import { Button, Modal } from './node_modules/semantic-ui-react';

const WhatModal = () => (
  <Modal trigger={<Button>What is a Default Contact?</Button>}>
    <Modal.Header>What is a Default Contact</Modal.Header>
    <Modal.Content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Pellentesque
        pulvinar pellentesque habitant morbi tristique senectus et netus et. Eu
        ultrices vitae auctor eu augue ut lectus arcu.
      </p>
    </Modal.Content>
  </Modal>
);

export default WhatModal;
