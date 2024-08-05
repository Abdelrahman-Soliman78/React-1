// import React from 'react'
import { useState } from 'react'
import { Link ,NavLink } from 'react-router-dom'

export default function Navebar() {

  let [open,setOpen] = useState(false);

  function toggel(){
    setOpen(!open)
  }

  return (
  <div>
    
    <div className="nave z-50 fixed left-0 top-0 right-0 bg-[#2C3E50] py-6 text-white md:flex justify-between px-10 md:px-24  ">
      <div className="logo-text">
        <h1 className="uppercase font-bold text-2xl md:text-3xl">
          <Link to={''}>Start Framework</Link>
        </h1>
      </div>
      <ul className={`Links md:flex justify-center items-center py-2 gap-10 text-1xl font-bold uppercase ${open?'block':'hidden'}`}>
        <li className='py-2'>
          <NavLink to={'/about'}>about</NavLink>
        </li>
        <li className='py-2'>
          <NavLink to={"/portfolio"}>Portfolio</NavLink>
        </li>
        <li className='py-2'>
        <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>

      <i onClick={toggel} className={`md:hidden block fas ${open?'fa-close':'fa-bars'} fa-2x absolute top-7 right-3 cursor-pointer`}></i>

    </div>

    </div>
  )
}
