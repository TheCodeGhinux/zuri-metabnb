import React from 'react'
import img1 from '../../assets/Metabnb btm/image 7.png'
import img2 from '../../assets/Metabnb btm/image 8.png'
import img3 from '../../assets/Metabnb btm/image 9.png'

const About = () => {
  return (
    <div>
        <div className="flex flex-col gap-52 content-center justify-center items-center  px-4 bg-purple text-white md:px-12 md:flex-row">
            <div className="flex flex-col gap-10 md:w-1/3 py-48 lg:pb-64">
                <h3 className="text-3xl font-bold ">
                Metabnb NFTs
                </h3>
                <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <button className='bg-white py-3 px-6 text-sm text-purple rounded-lg w-fit border-transparent' >
                    Learn more
                </button>
            </div>
            <div className=" hidden lg:block relative py-24 ">
              <div className=" w-full relative rotate-[18deg] top-[0rem] left-[7rem]">
                <img className=' ' src={img3} alt="" />
              </div>
              <div className=" w-full relative lg:rotate-[-26deg] lg:top-[-5rem] lg:left-[-7rem]">
                <img className=' ' src={img1} alt="" />
              </div>
              <div className=" w-full absolute rotate-[-9deg] top-[22rem] left-[9rem]">
                <img className='w-full  ' src={img2} alt="" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default About