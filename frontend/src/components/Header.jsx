import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-primary rounded-lg px-6 md:px-12 lg:px-20 py-10 md:py-0 overflow-hidden">

      {/* -------- Left Section -------- */}
      <div className="md:w-1/2 flex flex-col justify-center gap-6 md:py-20">

        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-snug">
          Book Appointment <br /> With Trusted Doctors
        </p>

        <div className="flex items-center gap-3">
          <img
            src={assets.group_profiles}
            alt=""
            className="w-24"
          />
          <p className="text-white text-sm md:text-base">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>

        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full w-fit font-medium hover:scale-105 transition"
        >
          Book appointment
          <img src={assets.arrow_icon} alt="" className="w-4" />
        </a>
      </div>

      {/* -------- Right Section -------- */}
      <div className="md:w-1/2 relative flex justify-end">
        <img
          src={assets.header_img}
          alt=""
          className="w-full md:w-[90%] md:absolute bottom-0"
        />
      </div>

    </div>
  )
}

export default Header