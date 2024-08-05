// import React from 'react'

export default function Contact() {
  return (
    <>
    <div className="contact my-28">

    <div className="content mt-32  flex justify-center items-center flex-col">
            <h2 className=" text-[#2C3E50] text-2xl mt-5 px-5 font-bold uppercase md:text-4xl ">conatct section</h2>
            <div className="icon relative flex justify-center items-center mt-2 w-[20%] mx-auto">
              <div className="line bg-[#2C3E50] w-1/3 h-1 absolute left-0 "></div>
                    <i className="fa-solid fa-star fa-md "></i>
              <div className="line bg-[#2C3E50] w-1/3 h-1 absolute right-0 "></div>
            </div>
          </div>

    <form className="w-1/2 mx-auto mt-12 ">

      <div className="relative text-2xl z-0 w-full mb-5 group">
          <input type="text" name="username" id="username" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonedark:text-[#2C3E50] dark:border-gray-100 dark:focus:text-black focus:outline-none focus:ring-0 focus:text-[#1abc9c] peer" placeholder=" " required />
          <label form="username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1abc9c] peer-focus:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-xl">User Name</label>
      </div>

      <div className="relative text-2xl z-0 w-full mb-5 group">
          <input type="number" name="userAge" id="userAge" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-[#2C3E50] dark:border-gray-100 dark:focus:text-black focus:outline-none focus:ring-0 focus:text-[#1abc9c] peer" placeholder=" " required />
          <label form="userAge" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1abc9c] peer-focus:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-xl">User Age </label>
      </div>

      <div className="relative text-2xl z-0 w-full mb-5 group">
          <input type="text" name="username" id="username" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonedark:text-[#2C3E50] dark:border-gray-100 dark:focus:text-black focus:outline-none focus:ring-0 focus:text-[#1abc9c] peer" placeholder=" " required />
          <label form="username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1abc9c] peer-focus:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-xl">User Email</label>
      </div>

      <div className="relative text-2xl z-0 w-full mb-5 group">
          <input type="text" name="username" id="username" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-nonedark:text-[#2C3E50] dark:border-gray-100 dark:focus:text-black focus:outline-none focus:ring-0 focus:text-[#1abc9c] peer" placeholder=" " required />
          <label form="username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1abc9c] peer-focus:text-[#1abc9c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-xl">User Password</label>
      </div>

      <button type="submit" className="mt-5 text-white bg-[#1abc9c] hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg[#1abc9c] dark:hover:bg-green-600 dark:focus:ring-green-600">Send Message</button>

      </form>

    
    </div>
    </>
  )
}
