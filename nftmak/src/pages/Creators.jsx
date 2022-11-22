import React from 'react'
import Category from '../Components/Category/Category'
import Banner from '../Components/Explore/Banner'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import SideBar from '../Components/IndexOne/SideBar'
import WeekFeatures from '../Components/IndexOne/WeekFeatures'

import Creatorpage from '../Components/InnerPages/Creatorpage'

const Creators = () => {
  return (
    <>
    <SideBar/>
    <div className="main-content">
         <Header/>
         
         <main>
             <Banner title="NFT Marketplace"/>
             <Category/>
            <Creatorpage/>
            <WeekFeatures/>
         </main>
         <Footer/>
     </div>
    </>
  )
}

export default Creators