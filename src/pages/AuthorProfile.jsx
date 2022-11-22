import React from 'react'
import Category from '../Components/Category/Category'
import Banner from '../Components/Explore/Banner'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import SideBar from '../Components/IndexOne/SideBar'
import Authors from '../Components/InnerPages/Authors'

const AuthorProfile = () => {
  return (
    <>
    <SideBar/>
    <div className="main-content">
         <Header/>
         
         <main>
             <Banner title="Authors Profile"/>
             <Category/>
             <Authors/>
         </main>
         <Footer/>
     </div>
    </>
  )
}

export default AuthorProfile