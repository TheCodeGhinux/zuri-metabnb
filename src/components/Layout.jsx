import React from 'react';

import Footer from './footer/Footer';

const Layout = ( {children} ) => {
  return (
    <div className="layout" >
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
