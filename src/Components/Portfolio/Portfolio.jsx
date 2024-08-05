// import React from 'react'
import { useState } from "react"
import port1 from "../../assets/img/poert1.png"
import port2 from "../../assets/img/port2.png"
import port3 from "../../assets/img/port3.png"
// import img from "../../assets/img"

export default function Portfolio() {



  return (
    <>

    

    <div className="portfolio-content flex justify-center mt-32 ">
          <div className="content ">
            <h2 className=" text-[#2C3E50] text-2xl mt-5 px-5 font-bold uppercase md:text-4xl  ">portfolio component</h2>
            <div className="icon relative flex justify-center items-center mt-2 w-[60%] mx-auto">
              <div className="line bg-[#2C3E50] w-1/3 h-1 absolute left-0 "></div>
                    <i className="fa-solid fa-star fa-md "></i>
              <div className="line bg-[#2C3E50] w-1/3 h-1 absolute right-0 "></div>
            </div>
          </div>
    </div>
    <div className="portfolio-img md:px-36 px-10">
      <div className="grid md:grid-cols-3 sm:grid-cols-1 mt-8 gap-8 mb-8">
        <img className="img rounded-2xl cursor-pointer" src={port1} alt="" />
        <img className="img rounded-2xl cursor-pointer" src={port2} alt="" />
        <img className="img rounded-2xl cursor-pointer" src={port3} alt="" />
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <img className="img rounded-2xl cursor-pointer" src={port1} alt="" />
        <img className="img rounded-2xl cursor-pointer" src={port2} alt="" />
        <img className="img rounded-2xl cursor-pointer" src={port3} alt="" />
      </div>
    </div>
    </>
  )
}

{/* <div onClick={()=>{
          setshow(true)
          setsrc(port1)
        }} className="rounded-2xl cursor-pointer relative overflow-hidden">
            <img className="img rounded-2xl cursor-pointer" src={port1} alt="" />
            <div className="overlay absolute left-0 top-0 w-full h-full flex justify-center items-center  object-0 hover:bg-[#1abc9ce6] object-85">
            <i className="fa-solid fa-plus text-8xl text-white"></i>
            </div>
        </div> */}


