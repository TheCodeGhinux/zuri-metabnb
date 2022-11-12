import React from 'react'
import img1 from '../assets/places-pic/Frame 151.png'
import img2 from '../assets/places-pic/Frame 152.png'
import img3 from '../assets/places-pic/Frame 153.png'
import img4 from '../assets/places-pic/Frame 154.png'
import img5 from '../assets/places-pic/Frame 155.png'
import img6 from '../assets/places-pic/Frame 156.png'
import img7 from '../assets/places-pic/Frame 157.png'
import img8 from '../assets/places-pic/Frame 158.png'


const data = [

    {
        id: 1,
        image: img1,
        name: 'Desert king',
        price:'1MBT per night',
        distance:'2345km away',
        duration:'available for 2 weeks stay',

    },
    {
        id: 2,
        image: img2,
        name: 'Desert king',
        price:'1MBT per night',
        distance:'2345km away',
        duration:'available for 2 weeks stay',

    },
    {
        id: 3,
        image: img3,
        name: 'Desert king',
        price:'1MBT per night',
        distance:'2345km away',
        duration:'available for 2 weeks stay',

    },
    {
        id: 4,
        image: img4,
        name: 'Desert king',
        price:'1MBT per night',
        distance:'2345km away',
        duration:'available for 2 weeks stay',

    },

    {
        id: 5,
        image: img5,
        name: 'Desert king',
        price:'1MBT per night',
        distance:'2345km away',
        duration:'available for 2 weeks stay',

    },
    {
        id: 6,
        image: img6,
        name: 'Desert king',
        price:'1MBT per night',
        distance:'2345km away',
        duration:'available for 2 weeks stay',

    },
    {
        id: 7,
        image: img7,
        name: 'Desert king',
        price:'1MBT per night',
        distance:'2345km away',
        duration:'available for 2 weeks stay',

    },
    {
        id: 8,
        image: img8,
        name: 'Desert king',
        price:'1MBT per night',
        distance:'2345km away',
        duration:'available for 2 weeks stay',

    }

]
const Places = () => {
  return (
    <div>
        <div className="">
            <div className="">
                <ul className='flex gap-4'>
                    <li>Restaurant</li>
                    <li>Cottage</li>
                    <li>Castle</li>
                    <li>Fantast city</li>
                    <li>Beach</li>
                    <li>Carbins</li>
                    <li>Off-grid</li>
                    <li>Farm</li>
                </ul>
                <button className='flex gap-2'>Location
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.9999 5L10.9999 5" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.99985 5H1.99985" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.9999 12H16.9999" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.9999 12H1.99985" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.9999 19H10.9999" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.99985 19H1.99985" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.9999 21V17" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.9999 7V3" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.0001 14V10" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                </button> 
                <div className="">
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        <h3 className="flex flex-wrap justify-center gap-4 mt-6 text-xl font-bold md:text-3xl lg:text-5xl">Inspiration for your next adventure</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-4 mt-6">
                            {data.map(({id, image, name, price, distance, duration}) => {
                                return (
                                    <div key={id}  className="flex flex-col gap-3 p-3 rounded-2xl border text-[.8rem] md:w-[18rem]">
                                        <img src={image} alt="" className="w-full rounded-2xl" />
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
                </div>
            </div>
        </div>
    </div>
  )
}

export default Places