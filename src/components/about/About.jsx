import React from 'react'

const About = () => {
  return (
    <div>
        <div className="flex flex-col gap-4 justify-between items-center py-12 px-4 bg-purple text-white md:px-12 md:flex-row">
            <div className="flex flex-col gap-8 md:w-1/3">
                <h3 className="text-3xl font-bold">
                Metabnb NFTs
                </h3>
                <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <button className='bg-white py-3 px-6 text-sm text-purple rounded-lg w-fit border-transparent' >
                    Learn more
                </button>
            </div>
        </div>
    </div>
  )
}

export default About