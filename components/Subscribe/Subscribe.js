import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    // Implement your subscription logic here (e.g., send the email to a server)
    // For this example, we'll just set a local state to indicate subscription success
    setSubscribed(true);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      {subscribed ? (
        <p className="text-green-700">Thank you for subscribing!</p>
      ) : (
        <>
          <p className="text-gray-600 ">Stay updated with our latest news and updates.</p>
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-grow p-2 mr-2 border rounded-md focus:outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Subscribe
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Subscribe;
