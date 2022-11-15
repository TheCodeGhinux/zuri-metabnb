import React from 'react'
import './heropage.css'
import img1 from '../../assets/Metabnb heropage/image 3.png'
import img2 from '../../assets/Metabnb heropage/image 4.png'
import img3 from '../../assets/Metabnb heropage/image 5.png'
import img4 from '../../assets/Metabnb heropage/image 6.png'

const Home = () => {
  return (
    <section id='heropage' >
        <div className="flex flex-col gap-4 justify-between items-center container mx-auto py-8 px-4 md:px-12 md:flex-row">
            <div className="flex flex-col gap-12 md:w-1/2">
                  <h2 className='text-3xl lg:text-6xl'>Rent a <span className='text-purple font-bold'>Place</span> away from <span className='text-purple font-bold'>Home</span> in the <span className='text-purple font-bold'>Metaverse</span></h2>
                  <p className='text-xl md:text-2xl'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
              
                <div className='border flex rounded-md overflow-hidden'>
                  {/* <AiOutlineSearch size={20}/> */}
                  <input type="text" placeholder='Search products' className="w-full px-4 text-sm" />
                  <button className='bg-purple border-transparent py-2 px-4 text-white w-48 text-sm hover:opacity-75 z-0'>Search</button>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-6">
              <div className="flex flex-col gap-2">
                <div className="mt-20 max-w-[15rem]">
                  <img className='w-full rounded-2xl' src={img1} alt="" />
                </div>
                <div className="max-w-[15rem]">
                  <img className='w-full rounded-2xl' src={img2} alt="" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="max-w-[15rem]">
                  <img className='w-full rounded-2xl' src={img3} alt="" />
                </div>
                <div className="max-w-[15rem]">
                  <img className='w-full rounded-2xl' src={img4} alt="" />
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Home