import React from 'react';

import Navigationbar from './nag/nag';
import Footer from './footer/Footer';

const Layout = ( {children} ) => {
  return (
    <div className="layout" >
      <Navigationbar />
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
