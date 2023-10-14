import React from 'react'
import logo from '../assets/images/logo5.png'



function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      {/* <!--Navbar--> */}
      <nav className="bg-deepBlue ">
        <div className="relative flex justify-between w-full px-20">

          {/* <!-- logo --> */}
          <div className='py-3 '>
            <a href="/" className="cursor-pointer">
              <img src={logo} width="100px" height="300px" />
            </a>
          </div>

          <div>
            <ul className="flex space-x-6 ml-[450px]">
              <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
           transition-all duration-200 relative group hidden lg:block text-2xl">
                <a href="#">Home</a>

                <div className="absolute bottom-0 w-full h-0.5 bg-lightBlue hidden group-hover:block
          transition-all duration-200"></div>
              </li>

              <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
           transition-all duration-200 relative group hidden lg:block text-2xl">
                <a onClick={() => scrollToSection('student')}>Student </a>

                <div className="absolute bottom-0 w-full h-0.5 bg-lightBlue hidden group-hover:block
          transition-all duration-200"></div>
              </li>


              <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
           transition-all duration-200 relative group hidden lg:block text-2xl">
                <a onClick={() => scrollToSection('teacher')}>Teacher </a>

                <div className="absolute bottom-0 w-full h-0.5 bg-lightBlue hidden group-hover:block
          transition-all duration-200"></div>
              </li>


              <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
           transition-all duration-200 relative group hidden lg:block text-2xl">
                <a onClick={() => scrollToSection('about-us')}>About Us</a>


                <div className="absolute bottom-0 w-full h-0.5 bg-lightBlue hidden group-hover:block
          transition-all duration-200"></div>
              </li>


              <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer
           transition-all duration-200 relative group hidden lg:block text-2xl">
                <a onClick={() => scrollToSection('contact-us')}>Contact Us</a>
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