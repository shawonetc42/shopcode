// pages/details/[id].js
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import donationData from '../../data/footerData';
import CategorySection from '../../components/CategorySection';
import Share from '@/components/shop/Share';

const DetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const donationDetails = donationData[id];
  const shareUrl = `https://example.com/details/${id}`;

  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row">
      {/* Left side - Donation Details */}
      <div className="lg:w-2/3 lg:mr-4 mb-4 lg:mb-0">
        <h1 className="text-4xl font-bold mb-8">Donation Details Page</h1>
        {/* Share page */}
        <div className='flex justify-between items-center mb-4'>
          <Share/>
        </div>
        {/* Donation details content */}
        {donationDetails && (
          <div className="bg-white p-8 shadow-md rounded-md">
            <img
              srcSet={donationDetails.imageSrcSet}
              alt="Donation Image"
              className="w-full h-64 object-cover mb-4 rounded-md"
            />
            <h2 className="text-2xl font-bold mb-2">{donationDetails.title}</h2>
            <h3 className="text-lg text-gray-600 mb-4">{donationDetails.subtitle}</h3>
            <p className="text-base mb-4">{donationDetails.description}</p>
            <div className="flex justify-between mb-4">
              <span className="text-gray-700">{donationDetails.goalText}: {donationDetails.goalAmount}</span>
              <span className="text-green-700">{donationDetails.raisedText}: {donationDetails.raisedAmount}</span>
            </div>
            <p className="text-base">
              Additional details or content specific to the donation with id: {id}
            </p>
            {/* Buy Now Button with Link */}
            <Link href={`/purchase/${id}`} passHref>
              <span className="text-white">
                <button
                  className="bg-[#00715D] text-white px-4 py-2 rounded-md mt-4"
                >
                  Buy Now
                </button>
              </span>
            </Link>
          </div>
        )}
      </div>

      {/* Right side - Category Section */}
      <div className="lg:w-1/3">
        <CategorySection />
      </div>
    </div>
  );
};

export default DetailsPage;
