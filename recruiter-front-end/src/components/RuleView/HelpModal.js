/* IMPORTS */
import React from 'react';
import { Button, Header, Grid, Modal, Divider } from 'semantic-ui-react';
/* IMPORTS */

const HelpModal = () => (
  <Grid>
    <Grid.Column textAlign="center">
      <Modal
        trigger={
          <Button basic color="blue">
            Show Modal
          </Button>
        }
      >
        <Modal.Header>Help Modal</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Help Topic 1</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius
              duis at consectetur lorem donec massa sapien faucibus. Eros in
              cursus turpis massa tincidunt dui ut ornare. Id interdum velit
              laoreet id donec ultrices tincidunt arcu non. Sagittis purus sit
              amet volutpat consequat.
            </p>
            <Divider hidden />
            <Header>Help Topic 2</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius
              duis at consectetur lorem donec massa sapien faucibus. Eros in
              cursus turpis massa tincidunt dui ut ornare. Id interdum velit
              laoreet id donec ultrices tincidunt arcu non. Sagittis purus sit
              amet volutpat consequat.
            </p>
            <Divider hidden />
            <Header>Help Topic 3</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius
              duis at consectetur lorem donec massa sapien faucibus. Eros in
              cursus turpis massa tincidunt dui ut ornare. Id interdum velit
              laoreet id donec ultrices tincidunt arcu non. Sagittis purus sit
              amet volutpat consequat.
            </p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </Grid.Column>
  </Grid>
);

export default HelpModal;
