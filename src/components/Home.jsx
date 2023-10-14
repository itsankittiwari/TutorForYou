import React from 'react'
import HeroBanner from "../assets/images/hero-illustration.png"
import Shape from "../assets/images/hero-shape.svg"
import dotteddesign from "../assets/images/feature-section1-dottedrows.png"

function Home() {
    return (
        <div>
       
                <section className="bg-deepBlue relative">
                    <div className="w-10/12 max-w-[1080px] flex sm:flex-col lg:flex-row justify-between items-center mx-auto " id='teacher'>
                        {/* <!--Left Section--> */}
                        <div className="space-y-8">
                            <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-white">Power your finance, grow your
                                business</h1>
                            <div className="h-1 w-6 bg-greenLight"></div>
                            <p className="font-mullish text-[18px] leading-7 text-white opacity-70">Accept payments from customers.
                                Automate payouts to vendors & employees. Never run out of working capital.</p>
                            <div className="flex flex-col-reverse md:flex-row items-center space-x-4 ">
                                <button className="bg-lightBlue w-full md:w-fit text-white py-[14px] px-[18px] rounded-md
              font-mullish font-bold hover:bg-lightBlue500 translate-all duration-200 "> Sign Up Now →</button>
                                <button className="bg-lightBlue w-full md:w-fit text-white py-[14px] px-[18px] rounded-md
              font-mullish font-bold hover:bg-lightBlue500 translate-all duration-200 "> Login Now →</button>
                            </div>
                        </div>
                        {/* <!--Right Section--> */}
                        <img src={HeroBanner} alt="Hero-Banner" className="w-full max-w-[680px]" />
                    </div>
                    <div className="w-[100.05%] absolute left-0 right-0">
                        <img src={Shape} alt="" className="w-full object-fill " />

                    </div>
                </section>
       

            
                <section className="relative mt-[190px] overflow-hidden">
                    <img src={dotteddesign} alt="" loading="lazy" width="233" height="167"
                        className="absolute -top-[8rem] left-[10rem] inline-block -z-10" />

                    <img src={dotteddesign} alt="" loading="lazy" width="233" height="167"
                        className="absolute top-[3rem] right-0 inline-block rotate-180" />

                    <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4 " id='student'>
                        {/* <!--heading--> */}
                        <h2 className="font-mullish text-center text-2xl leading-[1.2] font-extrabold hidden md:block">Accept Payments
                            with Razorpay Payment Suite</h2>

                        <div className="w-6 h-1 bg-greenLight mx-auto mt-4 mb-6"></div>

                        {/* <!--content box--> */}
                        <div className="w-full min-h-[520px] bg-white flex rounded-md relative p-10 py-12 border">
                            {/* <!--Right Section--> */}
                            <img src={HeroBanner} alt="Hero-Banner" className="w-full max-w-[680px]" />
                            {/* <!--left section--> */}

                            <div className="space-y-8">
                                <h1 className="font-mullish font-bold text-[40px] leading-[1.2]">Power your finance, grow your
                                    business</h1>
                                <div className="h-1 w-6 bg-greenLight"></div>
                                <p className="font-mullish text-[18px] leading-7">Accept payments from customers.
                                    Automate payouts to vendors & employees. Never run out of working capital.</p>

                                <p className="font-mullish text-[18px] leading-7">Accept payments from customers.
                                    Automate payouts to vendors & employees. Never run out of working capital.</p>

                                <p className="font-mullish text-[18px] leading-7">Accept payments from customers.
                                    Automate payouts to vendors & employees. Never run out of working capital.</p>
                                <div className="flex flex-col-reverse md:flex-row items-center space-x-4 ">
                                    <button className="bg-lightBlue w-full md:w-fit text-white py-[14px] px-[18px] rounded-md
              font-mullish font-bold hover:bg-lightBlue500 translate-all duration-200 "> Sign Up Now →</button>
                                    <button className="bg-lightBlue w-full md:w-fit text-white py-[14px] px-[18px] rounded-md
              font-mullish font-bold hover:bg-lightBlue500 translate-all duration-200 "> Login Now → </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
        </div>
    )
}

export default Home