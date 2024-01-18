// pages/error.js
import React from 'react';

const ErrorPage = () => {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg">
        We're sorry, but an unexpected error occurred. Please try again later.
      </p>
    </div>
  );
};

export default ErrorPage;
