'use client'
import React, { useState, useEffect, useRef } from 'react';
import { IoMdMenu } from 'react-icons/io';

function Navbar() {
  const [navItem, setNavItem] = useState<boolean>(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    console.log(navItem)
    setNavItem(!navItem);
  };

  return (
    <div className='relative '>
      <div className=' absolute top-10 right-5  md:hidden'>
        <IoMdMenu className='' size={22} onClick={handleClick} color='black' />
      </div>
      <div className='md:hidden flex justify-center items-center'>
        <img
          className='w-24 h-24'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59iVJkvRz1QoUC6kn-PznALguiZB0RQbvgpq5W-sBnA&s'
          alt=''
        />
      </div>
      <ul
        ref={menuRef}
        className={`${
          navItem || window.innerWidth >= 768 ? 'flex-col' : 'hidden md:flex'
        } md:flex-row flex flex-wrap justify-center gap-x-3 mt-3 md:items-center`}
      >
        <li className='text-black px-2 py-1 text-center rounded-md border-t  border-b md:border-2 hover:text-red-400 hover:scale-90 cursor-pointer transition duration-500'>
          Categories
        </li>
        <li className='text-black px-2 py-1 text-center rounded-md  border-b md:border-2 hover:text-red-400 hover:scale-90 transition duration-500 cursor-pointer'>
          Latest Products
        </li>
        <li className=' border-b md:border-2 hidden md:flex text-center rounded-full hover:scale-90 duration-700 p-3'>
          <img
            className='w-24 h-24'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59iVJkvRz1QoUC6kn-PznALguiZB0RQbvgpq5W-sBnA&s'
            alt=''
          />
        </li>
        <li className='text-black px-2 py-1 text-center rounded-md  border-b md:border-2 hover:text-red-400 hover:scale-90 transition duration-500 cursor-pointer'>
          Latest Products
        </li>
        <li className='text-black px-2 py-1 text-center rounded-md  border-b md:border-2 hover:text-red-400 hover:scale-90 transition duration-500 cursor-pointer'>
          Find our shop
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
