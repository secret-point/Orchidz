import React from 'react'
import Category from '../Components/Category/Category'
import Banner from '../Components/Explore/Banner'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import SideBar from '../Components/IndexOne/SideBar'
import CrItem from '../Components/InnerPages/CrItem'

const CreateItem = () => {
  return (
    <>
    <SideBar/>
    <div className="main-content">
         <Header/>
         
         <main>
             <Banner title="Create Item"/>
             <Category/>
             <CrItem/>
         </main>
         <Footer/>
     </div>
    </>
  )
}

export default CreateItem