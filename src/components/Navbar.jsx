import React from 'react'
import logo from '../assets/images/logo5.png'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
      {/* <!--Navbar--> */}
      <nav className="bg-deepBlue ">
        <div className="relative flex justify-between w-full px-20">

          {/* <!-- logo --> */}
          <div className='py-3 '>
          <Link to="/" className="cursor-pointer">
            <img src={logo} width="100px" height="300px" />
          </Link>
          </div>
         
         <div>
         <ul className="flex space-x-6 ml-[450px]">
            <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
           transition-all duration-200 relative group hidden lg:block text-2xl">
              <Link to="#">Home</Link>

              <div className="absolute bottom-0 w-full h-0.5 bg-lightBlue hidden group-hover:block
          transition-all duration-200"></div>
            </li>

            <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
           transition-all duration-200 relative group hidden lg:block text-2xl">
               <Link to="student">Student</Link>

              <div className="absolute bottom-0 w-full h-0.5 bg-lightBlue hidden group-hover:block
          transition-all duration-200"></div>
            </li>


            <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
           transition-all duration-200 relative group hidden lg:block text-2xl">
               <Link to="teacher">Teacher</Link>

              <div className="absolute bottom-0 w-full h-0.5 bg-lightBlue hidden group-hover:block
          transition-all duration-200"></div>
            </li>


            <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
           transition-all duration-200 relative group hidden lg:block text-2xl">
               <Link to="about-us">About Us</Link>

              <div className="absolute bottom-0 w-full h-0.5 bg-lightBlue hidden group-hover:block
          transition-all duration-200"></div>
            </li>


            <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
           transition-all duration-200 relative group hidden lg:block text-2xl">
              <Link to="contact-us">Contact Us</Link>
              <div className="absolute bottom-0 w-full h-0.5 bg-lightBlue hidden group-hover:block
          transition-all duration-200"></div>
            </li>
          </ul>
         </div>


         

        </div>
      </nav>
    </div>
  )
}

export default Navbar