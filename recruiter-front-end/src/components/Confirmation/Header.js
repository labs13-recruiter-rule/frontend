import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const centerText = {
      textAlign: 'center',
    };

    return (
      <div style={centerText}>
        <h1>Sales Manager Rule</h1>
      </div>
    );
  }
}

export default Header;
