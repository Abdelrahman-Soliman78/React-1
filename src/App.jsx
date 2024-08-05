import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Portfolio from './Components/Portfolio/Portfolio.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Notfound from './Components/Notfound/Notfound.jsx'
import Navebar from './Components/Navebar/Navebar.jsx'


function App() {

  let routs = createBrowserRouter ([
    {path:"",element:<Layout/>, children: [
      {index: true ,element:<Home/>},
      {path:"/about",element:<About/>},
      {path:"/portfolio",element:<Portfolio/>},
      {path:"/contact",element:<Contact/>},
      {path:"*",element:<Notfound/>},
    ]}
  ])



  return (
    <>
    <RouterProvider router={routs}></RouterProvider>
    
    </>
  )
}

export default App
