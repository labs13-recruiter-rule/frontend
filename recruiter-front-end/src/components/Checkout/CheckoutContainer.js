import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import Checkout from './Checkout';

class CheckoutContainer extends Component {
  render() {
    return (
      <div>
        <h1>Upgrade to our premium plan now.</h1>
        <StripeProvider apiKey="pk_test_us7RH04j9JPF1E9BNdEaLY0w00reSZ0pDU">
          <Elements>
            <Checkout />
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

export default CheckoutContainer;
