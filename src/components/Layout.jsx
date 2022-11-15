import React from 'react';


import Navigationbar from './nav/Nav';
import Footer from './footer/Footer';

const Layout = ( {children} ) => {
  return (
    <div className="layout" >
      <Navigationbar />
      <main className="main__container pt-32 lg:pt-40">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
