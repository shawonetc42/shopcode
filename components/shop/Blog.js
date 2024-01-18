// components/Blog.js
import React from 'react';
import Link from 'next/link';
import blogData from '../../data/footerData';

function Blog() {
  return (
    <div>
      {blogData.map((post) => (
        <div key={post.id} className="border flex max-w-[407px] flex-col items-stretch px-5 py-6 rounded-2xl border-solid border-neutral-300">
          {/* Render the blog post content using the data */}
          <Link href={`/blog/${post.id}`} passHref>
          
              <div className="flex justify-between gap-4 items-start cursor-pointer">
                {/* Render the post's image */}
                <img
                  loading="lazy"
                  src={post.imageSrcSet}
                  className="aspect-square object-contain object-center w-[57px] overflow-hidden shrink-0 max-w-full"
                />
                {/* Render the author's image and date */}
                <span className="flex grow basis-[0%] flex-col items-stretch mt-1">
                  <span className="flex items-stretch justify-between gap-2.5">
                    <img
                      loading="lazy"
                      src={post.authorImage}
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="justify-center text-neutral-500 text-sm font-semibold mr-32 ">
                      {post.date}
                    </div>
                  </span>
                  {/* Render the post's title */}
                  <div className="justify-center text-neutral-950 text-sm font-semibold leading-5 mt-4">
                    {post.title}
                  </div>
                </span>
              </div>
            
          </Link>
          {/* Render the separator */}
          <div className="bg-neutral-300 flex shrink-0 h-px flex-col mt-4" />
        </div>
      ))}
    </div>
  );
}

export default Blog;
