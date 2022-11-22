import React from 'react'
import NftMarket from '../Components/Explore/NftMarket'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import SideBar from '../Components/IndexOne/SideBar'

const Explore = () => {
  return (
    <>
      <SideBar/>

    
    <div className="main-content">
    <Header/>
        <NftMarket/>

    </div>
    <Footer/>
  </>
  )
}

export default Explore