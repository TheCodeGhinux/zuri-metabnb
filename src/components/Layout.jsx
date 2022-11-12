import React from 'react';

import Navbar from './navbar/Navbar'
import Footer from './footer/Footer';

const Layout = ( {children} ) => {
  return (
    <div className="layout" >
      <Navbar />
      <main className="main__container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout