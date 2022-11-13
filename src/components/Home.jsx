import React from 'react'
import Heropage from './heropage/Heropage'
import Location from '../location/Location'
import About from './about/About'
import Banner from './banner/Banner'

const Home = () => {
    return (
    <div>
        <Heropage />
        <Banner />
        <Location />
        <About />
    </div>
  )
}

export default Home
