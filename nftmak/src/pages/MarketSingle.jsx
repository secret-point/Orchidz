import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import SideBar from '../Components/IndexOne/SideBar'
import WeekFeatures from '../Components/IndexOne/WeekFeatures'
import Breadcrumb from '../Components/InnerPages/marketsingle/Breadcrumb'
import SingleMarket from '../Components/InnerPages/marketsingle/SingleMarket'


const MarketSingle = () => {
  return (
    <>
    <SideBar/>
    <div className="main-content">
         <Header/>
         
         <main>
           <Breadcrumb/>
           <SingleMarket/>
           <WeekFeatures/>
            
         </main>
         <Footer/>
     </div>
    </>
  )
}

export default MarketSingle