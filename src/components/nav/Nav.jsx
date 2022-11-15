import React, {useState} from 'react'
import Connect from './Connect'
// import Menu from './Menu'
// import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
// import {BsFillCartFill} from 'react-icons/bs'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [openModal, setOpenModal]= useState(false)
  const [nav, setNav]= useState(false)
  return (
    <div className='container mx-auto flex justify-between items-center py-8 px-4 md:px-12' >
        <div className='w-40 lg:basis-1//3' >
          <Link to='/' >
            <img className=' w-40' id='logo' src={logo} alt="" />
          </Link>
          
        </div>

        <div className=' hidden lg:flex justify-between items-center lg:basis-2/3 '>
          <div className=' hidden lg:block text-xs lg:text-[1rem] xl:text-2xl'>
            <Link className='px-6' to="/">Home</Link>
            <Link className='px-6' to="/places">Place to stay</Link>
            <Link className='px-6' to="/nfts">NFTs</Link>
            <Link className='px-6' to="/community">Community</Link>
          </div>

          <button className='bg-purple border-transparent text-white py-2 px-4 rounded-md z-20' onClick={() => setOpenModal(true)}>
            Connect
          </button>
          <Connect className="duration-300" open={openModal} onClose={() => setOpenModal(false)} />  
        </div>

        <button className='border-0 lg:hidden' >
          <svg onClick={() => setNav(!nav)} 
          width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" fill="black"/>
          </svg>

        </button>
        
        {nav ? <div  onClick={() => setNav(!nav)} className="bg-black/80 fixed w-full h-screen z-20 top-0 left-0"></div>  : ''}
        

        <div onClick={(e) => {
            e.stopPropagation()
          }} className={nav ? "fixed top-0 right-0 w-[60%] h-screen bg-white z-30 duration-300": "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
          <div  className="modal__right flex justify-between py-6 px-8 text-black text-xl font-bold">
              <p onClick={() => setNav(!nav)} className='text-2xl right-4 absolute'>X</p>
          </div>
          <div className='flex flex-col gap-12 justify-between items-start px-6 lg:basis-2/3 '>
            <div className='flex flex-col items-start gap-8 lg:block text-xl lg:text-[1rem] xl:text-2xl'>
              <Link onClick={() => setNav(!nav)} className='px-6' to="/">Home</Link>
              <Link onClick={() => setNav(!nav)} className='px-6' to="/places">Place to stay</Link>
              <Link onClick={() => setNav(!nav)} className='px-6' to="/nfts">NFTs</Link>
              <Link onClick={() => setNav(!nav)} className='px-6' to="/community">Community</Link>
            </div>

            <button className='bg-purple border-transparent text-white py-2 px-4 ml-6 rounded-md z-20' onClick={() => {setOpenModal(true); setNav(!nav);}}>
              Connect
            </button>
            <Connect  open={openModal} onClose={() => setOpenModal(false)} />  
          </div>

        </div>

    </div>
  )
}

export default Nav