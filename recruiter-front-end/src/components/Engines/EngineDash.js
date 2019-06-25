import React from 'react';
import { connect } from 'react-redux';
import { getEngines } from '../../actions/engineActions';
import {
  Card,
  Container,
  Button,
  Header,
  Segment,
  Icon,
  Grid,
  Modal,
} from 'semantic-ui-react';
import EngineCard from './EngineCard';
import NewEngine from './NewEngine';
import { Link } from 'react-router-dom';
import './engine.css';

class EngineDash extends React.Component {
  state = {
    engines: [],
    newEngineModalOpen: false,
  };

  componentDidMount() {
    this.props.getEngines().then(() => {
      console.log(this.props.engines, ' from props engines');
    });
  }

  handleModalOpen = () => this.setState({ newEngineModalOpen: true });

  handleModalClose = () =>
    this.setState({ newEngineModalOpen: false }, () => this.props.getEngines());

  render() {
    return (
      <Container fluid>
        <Segment className="engineManager">
          <Header>Engine Manager</Header>

          {/* NOTE: Come back and change this to the route for new engine. Make similar icon + route handling for EngineCard Rules later */}
          <Modal
            trigger={
              <Icon
                name="plus circle"
                size="big"
                color="green"
                link={true}
                onClick={this.handleModalOpen}
              ></Icon>
            }
            open={this.state.newEngineModalOpen}
            onClose={this.handleModalClose}
          >
            <Modal.Content>
              <NewEngine handleModalClose={this.handleModalClose} />
            </Modal.Content>
          </Modal>
          {/* </Link> */}
        </Segment>

        {this.props.engines.length < 1 ? (
          'No Engines Found'
        ) : (
          <Segment attached>
            <Card.Group itemsPerRow={1}>
              {this.props.engines.map(engine => (
                <EngineCard engine={engine} key={engine.id} />
              ))}
            </Card.Group>
          </Segment>
        )}
      </Container>
    );
  }
}

const mapStateToProps = ({ engines }) => ({
  engines,
});

export default connect(
  mapStateToProps,
  { getEngines },
)(EngineDash);
