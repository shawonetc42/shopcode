// pages/api/create-bkash-payment.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { amount, phoneNumber } = req.body;

      // Call bKash Checkout API to create a payment session
      const response = await axios.post(
        'https://checkout.sandbox.bka.sh/v1.2.0-beta/checkout/payment/create',
        {
          amount: amount,
          intent: 'sale',
          currency: 'BDT',
          merchantInvoiceNumber: 'INV12345', // Replace with a unique identifier for your order
          paymentMethods: ['bkash'],
          returnUrl: 'http://localhost:3000/payment-success', // Replace with your success page URL
          callbackUrl: 'http://localhost:3000/api/bkash-callback', // Replace with your server-side callback URL
        },
        {
          headers: {
            'X-App-Key': 'YOUR_BKASH_APP_KEY', // Replace with your bKash app key
            'X-App-Secret': 'YOUR_BKASH_APP_SECRET', // Replace with your bKash app secret
            'Content-Type': 'application/json',
          },
        }
      );

      // Send the bKash payment URL to the client
      res.status(200).json({ paymentUrl: response.data.paymentURL });
    } catch (error) {
      console.error('Error creating bKash payment:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
