// components/CheckoutForm.js

import React, { useState } from 'react';
import axios from 'axios';

const CheckoutForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    try {
      setLoading(true);
      setError(null);

      // Validate phone number (you can add more validation)
      if (!phoneNumber.trim()) {
        setError('Please enter a valid phone number.');
        return;
      }

      // Call your server endpoint to create a bKash payment session
      const response = await axios.post('/api/create-bkash-payment', {
        amount: 100, // Replace with the actual amount
        phoneNumber: phoneNumber,
      });

      // Redirect to bKash Checkout URL
      window.location.href = response.data.paymentUrl;
    } catch (error) {
      console.error('Error creating bKash payment:', error);
      setError('An error occurred while initiating the payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-4">
      <label className="block text-sm font-medium text-gray-700">
        Phone Number:
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </label>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      <button
        onClick={handlePayment}
        disabled={loading}
        className={`mt-3 bg-blue-500 text-white px-4 py-2 rounded ${loading && 'opacity-50 cursor-not-allowed'}`}
      >
        {loading ? 'Processing...' : 'Pay with bKash'}
      </button>
    </div>
  );
};

export default CheckoutForm;
