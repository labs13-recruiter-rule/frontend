import React from 'react';
import { connect } from 'react-redux';
import { getEngines } from '../../actions/engineActions';
import { Card, Container, Button, Header, Segment } from 'semantic-ui-react';
import EngineCard from './EngineCard';

class EngineDash extends React.Component {
  state = {
    engines: [],
  };

  componentDidMount() {
    this.props.getEngines();
    //
  }

  render() {
    return (
      <Container fluid>
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
