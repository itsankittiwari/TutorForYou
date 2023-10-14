import React from 'react'
import backgroundImg from '../assets/images/feature-section-2BG.svg'
import secondImg from '../assets/images/hero-illustration.png'
import Slider from "react-slick";

function AboutUs() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div >
      <section className="bg-[image:var(--image-url)] bg-no-repeat bg-cover w-[100.5%] pb-[500px] mt-14 mb-20 pt-[10rem] " style={{ '--image-url': `url(${backgroundImg})` }}>
        <div>
          <h2 className="font-mullish text-center text-2xl leading-[1.2] font-extrabold text-white hidden md:block">About Us</h2>
          <div className="w-6 h-1 bg-greenLight mx-auto mt-4 mb-6"></div>
          <Slider {...settings}>
            <div className="w-full min-h-[300px] flex rounded-md relative ml-[620px] py-12">

              <a href="#" className="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={secondImg} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold text-white">Noteworthy technology acquisitions 2021</h5>
                  <p className="mb-3 font-normal text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
              </a>
            </div>
            <div className="w-full min-h-[300px] flex rounded-md relative ml-[620px] py-12">

              <a href="#" className="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={secondImg} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold text-white">Noteworthy technology acquisitions 2021</h5>
                  <p className="mb-3 font-normal text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
              </a>
            </div>
            <div className="w-full min-h-[300px] flex rounded-md relative ml-[620px] py-12">

              <a href="#" className="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={secondImg} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold text-white">Noteworthy technology acquisitions 2021</h5>
                  <p className="mb-3 font-normal text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
              </a>
            </div>
            <div className="w-full min-h-[300px] flex rounded-md relative ml-[620px] py-12">

              <a href="#" className="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={secondImg} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold text-white">Noteworthy technology acquisitions 2021</h5>
                  <p className="mb-3 font-normal text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
              </a>
            </div>
            <div className="w-full min-h-[300px] flex rounded-md relative ml-[620px] py-12">

              <a href="#" className="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={secondImg} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold text-white">Noteworthy technology acquisitions 2021</h5>
                  <p className="mb-3 font-normal text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
              </a>
            </div>
            <div className="w-full min-h-[300px] flex rounded-md relative ml-[620px] py-12">

              <a href="#" className="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={secondImg} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold text-white">Noteworthy technology acquisitions 2021</h5>
                  <p className="mb-3 font-normal text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
              </a>
            </div>
          </Slider>
        </div>
      </section>





    </div>
  )
}

export default AboutUs