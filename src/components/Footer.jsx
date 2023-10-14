import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className='bg-deepBlue h-[150px] flex flex-row items-center justify-center space-x-8' >
          <FontAwesomeIcon icon={faYoutube} className='text-white' size="2x" />
          <FontAwesomeIcon icon={faFacebook} className='text-white' size="2x" />
          <FontAwesomeIcon icon={faTwitter} className='text-white' size="2x" />
          <FontAwesomeIcon icon={ faInstagram} className='text-white' size="2x" />
    </div>
  )
}

export default Footer