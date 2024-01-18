// components/CategorySection.js
import React from 'react';
import Blog from './shop/Blog';

const CategorySection = () => {
  // Add your category-related logic or data fetching here

  return (
    <div className="flex flex-col items-start  p-4 rounded-md">
     <span className="flex max-w-[286px] flex-col items-stretch px-5">
      <div className="justify-center text-black text-base font-semibold leading-4 capitalize w-full">
        Related event
      </div>
      <div className="flex items-stretch justify-between gap-2.5 mt-6">
        <div className="bg-emerald-700 flex w-[92px] shrink-0 h-[5px] flex-col rounded-xl" />
        <div className="bg-neutral-300 flex w-[184px] shrink-0 h-[5px] flex-col rounded-xl" />
      </div>
       {/* category items */}
      
      {/* Add more categories as needed */}
    </span>
    <div className='mt-2'>
      <Blog/>
    </div>
    </div>
  );
};

export default CategorySection;
