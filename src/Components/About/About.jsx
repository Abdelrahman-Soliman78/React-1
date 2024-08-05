// import React from 'react'

export default function About() {
  return (
    <>
     
        <div className="about text-white bg-[#1abc9c] flex justify-center items-center flex-col py-32 ">
          <div className="content ">
            <h2 className=" text-2xl mt-5 px-5 font-bold uppercase md:text-4xl  ">about component</h2>
            <div className="icon relative flex justify-center items-center mt-2 w-[60%] mx-auto">
              <div className="line bg-white w-1/3 h-1 absolute left-0  "></div>
                    <i className="fa-solid fa-star fa-md "></i>
              <div className="line bg-white w-1/3 h-1 absolute right-0 "></div>
            </div>
          </div>
          <div className="container w-full mx-auto">
          <div className="text  flex flex-wrap px-10 md:flex-nowrap md:px-32 md:gap-10">
              <div className="paragraph md:w-full mt-10">
                  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="paragraph md:w-full mt-10">
                  <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
              </div>
          </div>
        </div>
      
    </>
  )
}
