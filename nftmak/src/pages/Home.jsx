import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import IndexOne from '../Components/IndexOne/IndexOne'

import SideBar from '../Components/IndexOne/SideBar'

const Home = () => {
  return (
  <>
    <SideBar/>
  
    <div className="main-content">
    <Header/>
        <IndexOne/>

    </div>
    <Footer/>
  </>
  )
}

export default Home