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
} from 'semantic-ui-react';
import EngineCard from './EngineCard';
import { Link } from 'react-router-dom';
import './engine.css';

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
        <Segment className="engineManager">
          <Header>Engine Manager</Header>

          {/* NOTE: Come back and change this to the route for new engine. Make similar icon + route handling for EngineCard Rules later */}
          <Link to="/">
            <Icon
              name="plus circle"
              size="big"
              color="green"
              link={true}
            ></Icon>
          </Link>
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
