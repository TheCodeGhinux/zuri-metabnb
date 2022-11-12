import React from 'react';

import Nav from './Nav';
import Footer from './footer/Footer';

const Layout = ( {children} ) => {
  return (
    <div className="layout" >
      <Nav />
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
