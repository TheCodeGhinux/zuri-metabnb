import React, {useState} from 'react'
import './location.css'
import img1 from '../assets/home-pic/Frame 151.png'
import img2 from '../assets/home-pic/Frame 152.png'
import img3 from '../assets/home-pic/Frame 153.png'
import img4 from '../assets/home-pic/Frame 154.png'
import img5 from '../assets/home-pic/Frame 155.png'
import img6 from '../assets/home-pic/Frame 156.png'
import img7 from '../assets/home-pic/Frame 157.png'
import img8 from '../assets/home-pic/Frame 158.png'




const data = [

    {
        id: 1,
        image: img1,
        name: 'Desert king',
        price:'1MBT per night',
        distance:'2345km away',
        duration:'available for 2 weeks stay',
        fav: < BsSuitHeart className='hover:fill-red-600' />
        // fav: <FiHeart onClick={handleClick} style={{ fill: active ? "black" : "white" }} className="hover:fill-red-600"/>,

    },
    {
        id: 2,
        image: img2,
        name: 'Desert king',
        price:'1MBT per night',
        distance:'2345km away',
        duration:'available for 2 weeks stay',
        fav: < BsSuitHeart className='hover:fill-red-600' />,

    },
    {
        id: 3,
        image: img3,
        name: 'Desert king',
        price:'1MBT per night',
        distance:'2345km away',
        duration:'available for 2 weeks stay',
        fav: < BsSuitHeart className='hover:fill-red-600' />,

    },
    {
        id: 4,
        image: img4,
        name: 'Desert king',
        price:'1MBT per night',
        distance:'2345km away',
        duration:'available for 2 weeks stay',
        fav: < BsSuitHeart className='hover:fill-red-600' />,

    },

    {
        id: 5,
        image: img5,
        name: 'Desert king',
        price:'1MBT per night',
        distance:'2345km away',
        duration:'available for 2 weeks stay',
        fav: < BsSuitHeart className='hover:fill-red-600' />,

    },
    {
        id: 6,
        image: img6,
        name: 'Desert king',
        price:'1MBT per night',
        distance:'2345km away',
        duration:'available for 2 weeks stay',
        fav: < BsSuitHeart className='hover:fill-red-600' />,

    },
    {
        id: 7,
        image: img7,
        name: 'Desert king',
        price:'1MBT per night',
        distance:'2345km away',
        duration:'available for 2 weeks stay',
        fav: < BsSuitHeart className='hover:fill-red-600' />,

    },
    {
        id: 8,
        image: img8,
        name: 'Desert king',
        price:'1MBT per night',
        distance:'2345km away',
        duration:'available for 2 weeks stay',
        fav: < BsSuitHeart className='hover:fill-red-600' />,

    }

]


const Location = () => {
    

  return (
    <section className='py-8 container mx-auto px-4'>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
            {/* <h3 className="flex flex-wrap justify-center gap-4 mt-6 text-xl font-bold md:text-3xl lg:text-5xl">Inspiration for your next adventure</h3> */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 justify-center gap-4 mt-6">

                {data.map(({id, image, name, price, distance, duration, fav}) => {
                    return (
                        <div key={id}  className="flex flex-col gap-3 p-3 rounded-2xl border text-[.8rem] lg:w-[14rem] xl:w-[18rem] relative">
                            <img src={image} alt="" className="w-full rounded-2xl" />
                            <svg className='absolute top-6 right-6' width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className='hover:fill-red-600 active:fill-red-600' d="M9.59964 2.6295L10 3.16463L10.4004 2.6295C 11.3204 1.39971 12.7949 0.599976 14.44 0.599976C17.2315 0.599976 19.5 2.87378 19.5 5.68998C19.5 6.8256 19.3189 7.87372 19.0043 8.84606L19.0032 8.84932C18.249 11.236 16.7035 13.1596 15.0354 14.5933C13.365 16.0288 11.6004 16.9482 10.4589 17.3366L10.4589 17.3366L10.4536 17.3385C10.3537 17.3737 10.1893 17.4 10 17.4C9.81075 17.4 9.64625 17.3737 9.54641 17.3385L9.54642 17.3384L9.54106 17.3366C8.3996 16.9482 6.635 16.0288 4.96465 14.5933C3.29649 13.1596 1.75096 11.236 0.996763 8.84932L0.996774 8.84931L0.995722 8.84607C0.681141 7.87372 0.5 6.8256 0.5 5.68998C0.5 2.87378 2.76848 0.599976 5.56 0.599976C7.2051 0.599976 8.67958 1.39971 9.59964 2.6295Z" fill="#D7D7D7" stroke="url(#paint0_linear_5522_394)"/>
                            <defs>
                            <linearGradient id="paint0_linear_5522_394" x1="10" y1="17.9" x2="10" y2="0.0999756" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#1D0E3D"/>
                            <stop offset="1" stop-color="#0F051D"/>
                            </linearGradient>
                            </defs>
                            </svg>
                            <div className="flex justify-between">
                                <p className="">{name}</p>
                                <p className="font-bold">{price}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="">{distance}</p>
                                <p className="">{duration}</p>
                            </div>



                           <div className="rating flex gap-2 ">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.12475 0.583827C4.50519 -0.104606 5.49481 -0.104606 5.87525 0.583827L6.65696 1.99839C6.80037 2.2579 7.05154 2.44039 7.34267 2.49659L8.92956 2.80292C9.70186 2.952 10.0077 3.89318 9.4705 4.46774L8.36673 5.64831C8.16423 5.8649 8.06829 6.16017 8.10481 6.45442L8.30385 8.0583C8.40072 8.83887 7.6001 9.42055 6.88767 9.08722L5.42379 8.40229C5.15524 8.27663 4.84476 8.27663 4.57621 8.40229L3.11233 9.08722C2.3999 9.42055 1.59928 8.83887 1.69615 8.0583L1.89519 6.45442C1.93171 6.16017 1.83577 5.8649 1.63327 5.64831L0.529503 4.46774C-0.00767313 3.89318 0.298136 2.952 1.07044 2.80292L2.65733 2.49659C2.94846 2.44039 3.19963 2.2579 3.34304 1.99839L4.12475 0.583827Z" fill="url(#paint0_linear_5503_3)"/>
                                <defs>
                                <linearGradient id="paint0_linear_5503_3" x1="0.374194" y1="-1" x2="10.5161" y2="-1" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#A02279"/>
                                <stop stop-color="#A02279"/>
                                </linearGradient>
                                </defs>
                                </svg>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.12475 0.583827C4.50519 -0.104606 5.49481 -0.104606 5.87525 0.583827L6.65696 1.99839C6.80037 2.2579 7.05154 2.44039 7.34267 2.49659L8.92956 2.80292C9.70186 2.952 10.0077 3.89318 9.4705 4.46774L8.36673 5.64831C8.16423 5.8649 8.06829 6.16017 8.10481 6.45442L8.30385 8.0583C8.40072 8.83887 7.6001 9.42055 6.88767 9.08722L5.42379 8.40229C5.15524 8.27663 4.84476 8.27663 4.57621 8.40229L3.11233 9.08722C2.3999 9.42055 1.59928 8.83887 1.69615 8.0583L1.89519 6.45442C1.93171 6.16017 1.83577 5.8649 1.63327 5.64831L0.529503 4.46774C-0.00767313 3.89318 0.298136 2.952 1.07044 2.80292L2.65733 2.49659C2.94846 2.44039 3.19963 2.2579 3.34304 1.99839L4.12475 0.583827Z" fill="url(#paint0_linear_5503_3)"/>
                                <defs>
                                <linearGradient id="paint0_linear_5503_3" x1="0.374194" y1="-1" x2="10.5161" y2="-1" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#A02279"/>
                                <stop stop-color="#A02279"/>
                                </linearGradient>
                                </defs>
                                </svg>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.12475 0.583827C4.50519 -0.104606 5.49481 -0.104606 5.87525 0.583827L6.65696 1.99839C6.80037 2.2579 7.05154 2.44039 7.34267 2.49659L8.92956 2.80292C9.70186 2.952 10.0077 3.89318 9.4705 4.46774L8.36673 5.64831C8.16423 5.8649 8.06829 6.16017 8.10481 6.45442L8.30385 8.0583C8.40072 8.83887 7.6001 9.42055 6.88767 9.08722L5.42379 8.40229C5.15524 8.27663 4.84476 8.27663 4.57621 8.40229L3.11233 9.08722C2.3999 9.42055 1.59928 8.83887 1.69615 8.0583L1.89519 6.45442C1.93171 6.16017 1.83577 5.8649 1.63327 5.64831L0.529503 4.46774C-0.00767313 3.89318 0.298136 2.952 1.07044 2.80292L2.65733 2.49659C2.94846 2.44039 3.19963 2.2579 3.34304 1.99839L4.12475 0.583827Z" fill="url(#paint0_linear_5503_3)"/>
                                <defs>
                                <linearGradient id="paint0_linear_5503_3" x1="0.374194" y1="-1" x2="10.5161" y2="-1" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#A02279"/>
                                <stop stop-color="#A02279"/>
                                </linearGradient>
                                </defs>
                                </svg>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.12475 0.583827C4.50519 -0.104606 5.49481 -0.104606 5.87525 0.583827L6.65696 1.99839C6.80037 2.2579 7.05154 2.44039 7.34267 2.49659L8.92956 2.80292C9.70186 2.952 10.0077 3.89318 9.4705 4.46774L8.36673 5.64831C8.16423 5.8649 8.06829 6.16017 8.10481 6.45442L8.30385 8.0583C8.40072 8.83887 7.6001 9.42055 6.88767 9.08722L5.42379 8.40229C5.15524 8.27663 4.84476 8.27663 4.57621 8.40229L3.11233 9.08722C2.3999 9.42055 1.59928 8.83887 1.69615 8.0583L1.89519 6.45442C1.93171 6.16017 1.83577 5.8649 1.63327 5.64831L0.529503 4.46774C-0.00767313 3.89318 0.298136 2.952 1.07044 2.80292L2.65733 2.49659C2.94846 2.44039 3.19963 2.2579 3.34304 1.99839L4.12475 0.583827Z" fill="url(#paint0_linear_5503_3)"/>
                                <defs>
                                <linearGradient id="paint0_linear_5503_3" x1="0.374194" y1="-1" x2="10.5161" y2="-1" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#A02279"/>
                                <stop stop-color="#A02279"/>
                                </linearGradient>
                                </defs>
                                </svg>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.12475 0.583827C4.50519 -0.104606 5.49481 -0.104606 5.87525 0.583827L6.65696 1.99839C6.80037 2.2579 7.05154 2.44039 7.34267 2.49659L8.92956 2.80292C9.70186 2.952 10.0077 3.89318 9.4705 4.46774L8.36673 5.64831C8.16423 5.8649 8.06829 6.16017 8.10481 6.45442L8.30385 8.0583C8.40072 8.83887 7.6001 9.42055 6.88767 9.08722L5.42379 8.40229C5.15524 8.27663 4.84476 8.27663 4.57621 8.40229L3.11233 9.08722C2.3999 9.42055 1.59928 8.83887 1.69615 8.0583L1.89519 6.45442C1.93171 6.16017 1.83577 5.8649 1.63327 5.64831L0.529503 4.46774C-0.00767313 3.89318 0.298136 2.952 1.07044 2.80292L2.65733 2.49659C2.94846 2.44039 3.19963 2.2579 3.34304 1.99839L4.12475 0.583827Z" fill="url(#paint0_linear_5503_3)"/>
                                <defs>
                                <linearGradient id="paint0_linear_5503_3" x1="0.374194" y1="-1" x2="10.5161" y2="-1" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#A02279"/>
                                <stop stop-color="#A02279"/>
                                </linearGradient>
                                </defs>
                                </svg>

                           </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Location