import React, {useState} from 'react'
import Connect from './Connect'
// import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
// import {BsFillCartFill} from 'react-icons/bs'
import logo from '../../assets/logo.png'

const Nag = () => {
  // const [openModal, setOPenModal]= useState(false)
  return (
    <div className='container mx-auto flex justify-between py-8 px-4 md:px-12' >
        <div className='w-40' >
          <img className='w-full' id='logo' src={logo} alt="" />
          
        </div>

        
        <Connect />

       
    </div>
  )
}

export default Nag