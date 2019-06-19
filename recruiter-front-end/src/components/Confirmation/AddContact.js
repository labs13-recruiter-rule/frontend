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
        <p>
          Create a rule for a new contact group such as Sales Directors or the
          Marketing Managers
        </p>
        <Button>Add Contact Group</Button>
      </div>
    );
  }
}

export default Header;
