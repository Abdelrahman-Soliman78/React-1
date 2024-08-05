// import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="footer bg-[#2C3E50]  text-white grid md:grid-cols-3">
        <div className="location text-center py-16">
          <h3 className="uppercase font-bold text-lg md:text-2xl ">location</h3>
          <p className="mt-2">2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="around text-center py-16">
          <h3 className="uppercase font-bold text-lg md:text-2xl">around the web</h3>
          <div className="icon  text-white flex justify-center items-center gap-5 mt-4 ">
            <i className="fa-brands fa-facebook border-2 p-3  rounded-full cursor-pointer  hover:bg-white border-white hover:text-[#0866FF]"></i>
            <i className="fa-brands fa-twitter border-2 p-3  rounded-full cursor-pointer  hover:bg-white border-white hover:text-[#24A4F2]"></i>
            <i className="fa-brands fa-linkedin-in border-2 p-3  rounded-full cursor-pointer  hover:bg-white border-white hover:text-[#0A78B5]"></i>
            <i className="fa-solid fa-globe border-2 p-3  rounded-full cursor-pointer hover:bg-white border-white hover:text-[#24231F]"></i>
          </div>
        </div>
        <div className="about-freelance text-center py-16">
          <h3 className="uppercase font-bold text-lg md:text-2xl">about freelancer</h3>
          <p className="mt-2">Freelance is a free to use, licensed Bootstrap theme <br /> created by Route</p>
        </div>  
      </div>
      <div className="copywriter bg-[#1A252F] flex justify-center items-center py-4 text-white">
        <h3>Copyright © Your Website 2021</h3>
      </div>
    </>
  )
}
