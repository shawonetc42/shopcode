import React from 'react'

function index() {
  return (
    <div className='flex justify-center'>
        <span className="shadow-2xl bg-white flex max-w-[559px] flex-col p-12 rounded-xl max-md:px-5">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ecc3157389c2f02314b8a1d2d0c6e6c6428c8b5dc40ba1224cf94ef1ef55b7ad?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecc3157389c2f02314b8a1d2d0c6e6c6428c8b5dc40ba1224cf94ef1ef55b7ad?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecc3157389c2f02314b8a1d2d0c6e6c6428c8b5dc40ba1224cf94ef1ef55b7ad?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecc3157389c2f02314b8a1d2d0c6e6c6428c8b5dc40ba1224cf94ef1ef55b7ad?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecc3157389c2f02314b8a1d2d0c6e6c6428c8b5dc40ba1224cf94ef1ef55b7ad?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecc3157389c2f02314b8a1d2d0c6e6c6428c8b5dc40ba1224cf94ef1ef55b7ad?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecc3157389c2f02314b8a1d2d0c6e6c6428c8b5dc40ba1224cf94ef1ef55b7ad?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecc3157389c2f02314b8a1d2d0c6e6c6428c8b5dc40ba1224cf94ef1ef55b7ad?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
        className="aspect-[4.05] object-contain object-center w-[178px] overflow-hidden self-center max-w-full"
      />
      <div className="justify-center text-neutral-500 text-base leading-6 capitalize self-stretch mt-11 max-md:max-w-full max-md:mt-10">
        Email
      </div>
      <input type='email' placeholder='Enter Your Email' className="justify-center text-neutral-400 text-base whitespace-nowrap border bg-stone-50 self-stretch mt-3.5 pl-5 pr-16 py-5 rounded-lg border-solid border-neutral-300 items-start max-md:max-w-full max-md:px-5">
      </input>
      <span className="self-stretch flex justify-between gap-5 mt-7 items-start max-md:max-w-full max-md:flex-wrap">
        <div className="justify-center text-neutral-500 text-base leading-6 capitalize">
          Password
        </div>
        <div className="justify-center text-emerald-700 text-base leading-6">
          Forgot password?
        </div>
      </span>
      <span className="justify-between items-center border bg-stone-50 self-stretch flex gap-5 mt-3 pl-5 pr-4 py-4 rounded-lg border-solid border-neutral-300 max-md:max-w-full max-md:flex-wrap max-md:pl-5">
        <div className="justify-center text-neutral-400 text-base my-auto">
          Enter Password
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/411943c8de8595a9b250617c652c214119b3506ecee9579460bdbcdab322577c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
          className="aspect-square object-contain object-center w-[18px] overflow-hidden self-stretch shrink-0 max-w-full"
        />
      </span>
      <span className="justify-center text-white text-center text-base font-bold leading-6 capitalize whitespace-nowrap items-stretch bg-emerald-700 mt-6 px-8 py-5 rounded-xl self-start max-md:px-5">
        Login
      </span>
      <div className="justify-center text-emerald-700 text-center text-sm leading-5 tracking-wide self-center whitespace-nowrap mt-10">
        Don’t have an account?{" "}
        <span className="text-emerald-700">Register</span>
      </div>
      <div className="justify-center items-center border self-stretch flex flex-col mt-8 px-16 py-3.5 rounded-md border-solid border-neutral-400 border-opacity-40 max-md:max-w-full max-md:px-5">
        <span className="flex items-stretch gap-3">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bcac17a94e43cb5ace277533809f87f819c5c2432811c5025abe370d595c309c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcac17a94e43cb5ace277533809f87f819c5c2432811c5025abe370d595c309c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcac17a94e43cb5ace277533809f87f819c5c2432811c5025abe370d595c309c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcac17a94e43cb5ace277533809f87f819c5c2432811c5025abe370d595c309c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcac17a94e43cb5ace277533809f87f819c5c2432811c5025abe370d595c309c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcac17a94e43cb5ace277533809f87f819c5c2432811c5025abe370d595c309c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcac17a94e43cb5ace277533809f87f819c5c2432811c5025abe370d595c309c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcac17a94e43cb5ace277533809f87f819c5c2432811c5025abe370d595c309c?apiKey=4347c25cbbc84e04bdff1e95b941b3c7&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <div className="justify-center text-stone-500 text-center text-sm font-medium leading-5 self-center grow whitespace-nowrap my-auto">
            login with Google
          </div>
        </span>
      </div>
    </span>
    </div>
  )
}

export default index