import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { RiFacebookCircleLine } from "react-icons/ri";

function Footer() {
  return (

    <footer className="bg-gray-800 text-white py-6">
     
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
     
             <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold">AR Textiles</h3>
          <p className="text-sm">Ambalavayal,Wayanad,Kerala</p>
          <p className="text-sm">info@example.com</p>
          <p className="text-sm">123-456-7890</p>
        </div>
        <nav className="mb-4 md:mb-0">
          <ul className="flex flex-wrap">
            <li className="mr-4 mb-2"><a href="#" className="text-sm hover:text-gray-300">About</a></li>
            <li className="mr-4 mb-2"><a href="#" className="text-sm hover:text-gray-300">Services</a></li>
            <li className="mr-4 mb-2"><a href="#" className="text-sm hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
        <div>
          <ul className="flex">
            <li className="mr-4">        <ImWhatsapp  color='green'  size={20}/>
</li>
            <li className="mr-4">        <RiFacebookCircleLine color='blue' size={20} />

</li>
            <li className="mr-4">     <FaInstagram  color='red' size={20} /></li>
          </ul>
        </div>
      </div>

    </footer>
  )
}

export default Footer