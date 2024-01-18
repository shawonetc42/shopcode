import React from 'react'

function Share({ shareUrl }) {
  return (
    <div className="flex items-stretch gap-2.5 px-5">
    <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline cursor-pointer"
        >
         
       
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dcc1bc48a6d09268db8ead1f58aed68811a2e3bcdff323372a3f1c933bde099?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
        className="aspect-square object-contain object-center w-10 justify-end items-center overflow-hidden shrink-0 max-w-full"
      />
       </a>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed5f56585f954d84990872aa82881cf43c8a666388240327f6ca1cfc29f62580?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
        className="aspect-square object-contain object-center w-10 justify-center items-center overflow-hidden shrink-0 max-w-full"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/68e756aa19d44e88331aa45a0a6d54012ee62e7c34a545350c5473d11fb24d0f?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
        className="aspect-square object-contain object-center w-10 justify-center items-center overflow-hidden shrink-0 max-w-full"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/814a291a017d0fa098fdb6c2b613314e205d32877786fb58a87f6e86b93b5f0a?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
        className="aspect-square object-contain object-center w-10 justify-center items-center overflow-hidden shrink-0 max-w-full"
      />
    </div>
  )
}

export default Share