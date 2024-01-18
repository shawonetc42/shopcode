import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import donationData from '../../data/footerData';

const DonationPage = () => {
  const router = useRouter();

  const handleDonateClick = (id) => {
    router.push(`/details/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="flex text-xl font-bold mb-8 justify-center bg-gradient-to-r from-green-900 to-green-700 
      text-transparent bg-clip-text animate-gradient-x shadow-lg p-6  border-green-800 rounded-lg">
       👋 Hey there! We’re Nubi
      </h1>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {donationData.map((donation, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-md transition-transform transform hover:scale-105 hover:shadow-lg">
            {donation.donateNowText ? (
              <span className="justify-center text-slate-600 text-center text-sm font-medium leading-6 whitespace-nowrap items-stretch bg-amber-400 self-center mt-9 px-6 py-4 rounded-md max-md:px-5">
                {donation.donateNowText}
              </span>
            ) : null}

            {/* another */}
            <img srcSet={donation.imageSrcSet} alt="Donation Image" className="w-full h-40 object-cover mb-2 rounded-md" />
            <h2 className="text-xl font-bold mb-1">{donation.title}</h2>
            <h3 className="text-md text-gray-600 mb-2">{donation.subtitle}</h3>
            <p className="text-sm mb-4">{donation.description}</p>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">{donation.goalText}: {donation.goalAmount}</span>
              <span className="text-green-700">{donation.raisedText}: {donation.raisedAmount}</span>
            </div>
            <button
              onClick={() => handleDonateClick(index)}
              className="bg-[#00715D] text-white px-4 py-2 rounded-md hover:bg-[#005745] transition duration-300 ease-in-out"
            >
              {donation.premium}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationPage;
