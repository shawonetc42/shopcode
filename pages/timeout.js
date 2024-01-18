// pages/timeout.js
import React from 'react';

const TimeoutPage = () => {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Request Timeout</h1>
      <p className="text-lg">
        Sorry, your request took too long to process. Please try again later.
      </p>
    </div>
  );
};

export default TimeoutPage;
