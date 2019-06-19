import React from 'react';
import { Button } from 'semantic-ui-react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const parent = {
      borderStyle: 'solid',
      borderWidth: '1px',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    };
    return (
      <div style={parent}>
        <p>View Admin Dashboard</p>
        <Button>View Dashboard</Button>
      </div>
    );
  }
}

export default Header;
