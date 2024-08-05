import { useEffect } from "react";
import avatar from "../../assets/img/avataaars.svg"
// import React from 'react'


export default function Home() {

  useEffect(() => {
    document.title = "Home";
  }, []);
  return (  
<>
    
        <div className="home text-white py-24 max-sm:py-48 bg-[#1ABC9C] min-h-screen">
          <div className="content flex justify-center items-center flex-col  mx-auto mt-10">
            <img className="w-[240px]" src={avatar} alt="avatart-person" />
              <h1 className="text-white text-5xl max-sm:text-4xl  uppercase font-bold mt-7">
                start framework
              </h1>
            <div className="icon relative mt-7 w-[25%] flex mx-auto justify-center items-start">
              <div className="line bg-white w-1/3 h-1 absolute left-0 top-1 "></div>
                <i className="fa-solid fa-star fa-md"></i>
              <div className="line bg-white w-1/3 h-1 absolute right-0 top-1"></div>
            </div>
              <h2 className="pos text-lg mt-7">
                Graphic Artist - Web Designer - Illustrator
              </h2>
            </div>
          </div>
        
</> 



  )
}

