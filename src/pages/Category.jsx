import React from 'react'
import Banner from '../Components/Explore/Banner'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import SideBar from '../Components/IndexOne/SideBar'
import CategoryItem from '../Components/InnerPages/Categ/CategoryItem'

const Category = () => {
  return (
    <>
    <SideBar/>
    <div className="main-content">
         <Header/>
         
         <main>
             <Banner title="NFT Browse Category"/>
            <CategoryItem/>
         </main>
         <Footer/>
     </div>
    </>
  )
}

export default Category