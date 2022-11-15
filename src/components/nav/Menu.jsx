import React from 'react'
import { Link } from 'react-router-dom'
import './conect.css'
import Connect from './Connect'





const Menu = ({active, onCloseMenu}) => {
    if(!active) return null
    // const [openModal, setOpenModal]= useState(false)
  return (
    <div onClick={onCloseMenu} className='overlay hover:opacity-100 onClose:opacity-100' >
        <div onClick={(e) => {
          e.stopPropagation()
        }} className="modal__con">
            <div className="modal__right flex justify-between py-6 px-8 text-black text-xl font-bold">
                <p onClick={onCloseMenu} className="close__btn">X</p>
            </div>
            <div className=' justify-between items-center lg:basis-2/3 '>
                <div className='flex flex-col lg:block text-xs lg:text-[1rem] xl:text-2xl'>
                    <Link className='px-6' to="/">Home</Link>
                    <Link className='px-6' to="/places">Place to stay</Link>
                    <Link className='px-6' to="/nfts">NFTs</Link>
                    <Link className='px-6' to="/community">Community</Link>
                </div>

                <button className='bg-purple border-transparent text-white py-2 px-4 rounded-md z-20'>
                    Connect
                </button>
                {/* <Connect  open={openModal} onClose={() => setOpenModal(false)} />   */}
            </div>
        </div>      
    </div>
  )
}

export default Menu