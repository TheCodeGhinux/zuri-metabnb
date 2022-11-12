import React, {useState} from 'react'
import Connect from './Connect'
// import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
// import {BsFillCartFill} from 'react-icons/bs'
import logo from '../../assets/logo.png'

const Nav = () => {
  const [openModal, setOpenModal]= useState(false)
  return (
    <div className='container mx-auto flex justify-between py-8 px-4 md:px-12' >
        <div className='w-40' >
          <img className='w-full' id='logo' src={logo} alt="" />
          
        </div>

        <button className='bg-purple border-transparent text-white py-2 px-4 rounded-md z-20' onClick={() => setOpenModal(true)}>
          Connect
          <Connect  open={openModal} onClose={() => setOpenModal(false)} />  
        </button>

       
    </div>
  )
}

export default Nav