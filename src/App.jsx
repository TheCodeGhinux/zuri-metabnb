import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './components/Home'
import Places from './pages/Places'
// import Footer from './components/footer/Footer'
import Layout from './components/Layout';
import './App.css'


const App = () => {
  return (
    // <Main />
    //     <Social />
        <Router>
          <Layout>
            <Routes>
              <Route exact path='/'  element={<Main />} />
              <Route path='/places' element={<Places/>} />
            </Routes>
          </Layout>
        </Router> 
  )
}

export default App