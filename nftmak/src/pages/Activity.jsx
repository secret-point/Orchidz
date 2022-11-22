import React from 'react'
import Category from '../Components/Category/Category'
import Banner from '../Components/Explore/Banner'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import SideBar from '../Components/IndexOne/SideBar'
import ActivityPage from '../Components/InnerPages/ActivityPage'

const Activity = () => {
  return (
    <>
    <SideBar/>
    <div className="main-content">
         <Header/>
         
         <main>
             <Banner title="NFT Activity"/>
             <Category/>
             <ActivityPage/>
         </main>
         <Footer/>
     </div>
    </>
  )
}

export default Activity