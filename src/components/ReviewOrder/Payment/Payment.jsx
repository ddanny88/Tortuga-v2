import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import './payment.css';
import axios from 'axios';
 
export default class TakeMoney extends React.Component {
  onToken = async(token) => {
    let response = await axios.post('/api/checkout/payment', { token });
    console.log('token: ', response);
  }

//   fetch('/save-stripe-token', {
//     method: 'POST',
//     body: JSON.stringify(token),
//   }).then(response => {
//     response.json().then(data => {
//       alert(`We are in business, ${data.email}`);
//     });
//   });
 
 
  render() {
    return (
      <div className="payment-btn">
        <StripeCheckout
        name="Totuga Beverage Delivery"
        token={this.onToken}
        // image
        // amount={}
        currency="USD"
        stripeKey="pk_test_NIOK946VO15OT2Lb8fYRQkVU00EIFBbiVV"
        panelLabel="where is my money"
        />
      </div>
    )
  }
}
