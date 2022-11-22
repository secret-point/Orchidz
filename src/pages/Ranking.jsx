import React from 'react'
import Category from '../Components/Category/Category'
import Banner from '../Components/Explore/Banner'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import SideBar from '../Components/IndexOne/SideBar'
import RankingPage from '../Components/InnerPages/RankingPage'

const Ranking = () => {
  return (
   
        <>
        <SideBar/>
        <div className="main-content">
             <Header/>
             
             <main>
                 <Banner title="Nft Ranking"/>
                 <Category/>
                 <RankingPage/>
             </main>
             <Footer/>
         </div>
        </>
  )
}

export default Ranking