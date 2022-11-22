import React from 'react'
import Banner from '../Components/Explore/Banner'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import ExploreProduct from '../Components/IndexOne/ExploreProduct'
import SideBar from '../Components/IndexOne/SideBar'
import Category from '../Components/Category/Category'

const NftLiveBidding = () => {
  return (
    <>
    <SideBar/>
    <div className="main-content">
         <Header/>
         
         <main>
             <Banner title="NFT Live Bidding"/>
             <Category/>
             <ExploreProduct/>
         </main>
         <Footer/>
     </div>
    </>
  )
}

export default NftLiveBidding