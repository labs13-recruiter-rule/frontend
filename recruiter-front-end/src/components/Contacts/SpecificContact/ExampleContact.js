import React from 'react';
import { Card, Container, Button, Modal } from 'semantic-ui-react';

class ExampleContact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <Card.Content>
          {/* <Card.Header>{this.props.contact.name}</Card.Header> */}
          <Card.Header content={this.props.contact.name} />
          <Card.Meta>{this.props.contact.email}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Modal
              trigger={
                <Button
                  basic
                  color="blue"
                  onClick={() => {
                    console.log(
                      'This is an example contact! You must add a contact if you wish to continue.',
                    );
                  }}
                >
                  Edit
                </Button>
              }
              open={false}
            >
              <Modal.Content></Modal.Content>
            </Modal>
            <Button
              basic
              color="red"
              onClick={() => {
                console.log(
                  'This is an example contact! You must add a contact if you wish to continue.',
                );
              }}
            >
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default ExampleContact;
