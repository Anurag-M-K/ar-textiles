import React from 'react'

function Navbar() {
  return (
    <div>
       <ul className='flex justify-center gap-x-3 mt-3 items-center'>
        <li  className='text-black px-2 py-1  rounded-md  border-2  hover:text-red-400 hover:scale-90 cursor-pointer transition duration-500'>
          Categories
        </li>
        <li  className='text-black px-2 py-1  rounded-md  border-2  hover:text-red-400 hover:scale-90 transition duration-500 cursor-pointer'>
          Latest Products
        </li>
        <li className='border-2 rounded-full hover:scale-90 duration-700 p-3'>
          <img className='w-24 h-24 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59iVJkvRz1QoUC6kn-PznALguiZB0RQbvgpq5W-sBnA&s" alt="" />
        </li>
        <li  className='text-black px-2 py-1  rounded-md  border-2  hover:text-red-400 hover:scale-90 transition duration-500 cursor-pointer'>
          Latest Products
        </li>
        <li  className='text-black px-2 py-1  rounded-md  border-2  hover:text-red-400 hover:scale-90 transition duration-500 cursor-pointer'>
          Latest Products
        </li>
       </ul>
    </div>
  )
}

export default Navbar