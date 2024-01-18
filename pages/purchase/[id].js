// pages/purchase/[id].js

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSpring, animated } from 'react-spring';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../components/CheckoutForm';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY'); // Replace with your actual Stripe public key

const PurchasePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [showCongratulations, setShowCongratulations] = useState(false);

  useEffect(() => {
    // Set showCongratulations to true after the initial render
    setShowCongratulations(true);
  }, []);

  // Animation for the congratulations message
  const congratulationsAnimation = useSpring({
    opacity: showCongratulations ? 1 : 0,
    transform: showCongratulations ? 'translateY(0)' : 'translateY(50px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
  });

  // Custom text or formatting for the item ID
  const formattedId = `Product-${id}`;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Purchase Confirmation</h1>
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <animated.p style={congratulationsAnimation} className="text-xl text-green-700 mb-4">
          Congratulations! 🎉 Thank you for your purchase!
        </animated.p>
        <p className="text-base text-gray-700">
          You have successfully purchased the {formattedId}.
        </p>
        <p className="text-base text-gray-700">
          An email confirmation with further details will be sent to your email address.
        </p>
        <p className="text-base text-gray-700 mt-4">
          If you have any questions or concerns, please contact our support team.
        </p>
        <div className="mt-8">
          {/* Include the Stripe payment form */}
          
            <CheckoutForm />
         
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
