import React from 'react'

export default function Signup({setislogin}) {
  return (
   <div className=' signup  px-6 py-6'>
      <h1 className='font-semibold text-2xl text-center'>Signup</h1>
       <form className="flex flex-col">
         <div className="inputrap mt-3">
                <label
                  htmlFor="name"
                  className="block text-xs font-medium md:text-sm text-[#969696]"
                >
                   Name
                </label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full rounded-2xl border border-gray-400 shadow-sm focus:border-black  focus:outline-none focus:ring-indigo-500 sm-text-sm"
                />
              </div>
             
              <div className="inputrap ">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium md:text-sm text-[#969696]"
                >
                  Email 
                </label>
                <input
                  type="text"
                  className="mt-1 p-3 block w-full rounded-2xl border border-gray-400 shadow-sm focus:border-black  focus:outline-none focus:ring-indigo-500 sm-text-sm"
                />
              </div>
              <div className="inputrap mt-3">
                <label
                  htmlFor="password"
                  className="block text-xs font-medium md:text-sm text-[#969696]"
                >
                   Password
                </label>
                <input
                  type="password"
                  className="mt-1 p-3 block w-full rounded-2xl border border-gray-400 shadow-sm focus:border-black  focus:outline-none focus:ring-indigo-500 sm-text-sm"
                />
              </div>
             
             <div className="btnrap flex justify-center">
              <button className="px-5 py-3 mt-5 w-1/2   text-white rounded-3xl  bg-blue-600 hover:text-white md:text-sm">
                Signup
              </button>
             </div>
              

              <p className='text-center mt-5'>Already have an account? <button className='text-blue-500' onClick={()=>setislogin(true)}>Login</button>  </p>
            </form>
    </div>
  )
}
