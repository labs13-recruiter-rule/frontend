import React, { Component } from 'react';
import './checkout.css';
import { CardElement, injectStripe } from 'react-stripe-elements';

const storedToken = sessionStorage.getItem('token');

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      complete: false,
    };
  }

  async submit(ev) {
    // User clicked submit
    let { token } = await this.props.stripe.createToken({ name: 'Name' });
    console.log('token', token);
    let response = await fetch('http://localhost:4000/charge', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: token.id,
    });
    if (response.ok) this.setState({ complete: true });
  }

  render() {
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(Checkout);
