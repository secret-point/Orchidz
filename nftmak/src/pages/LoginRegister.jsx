import React from 'react'
import Category from '../Components/Category/Category'
import Banner from '../Components/Explore/Banner'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import SideBar from '../Components/IndexOne/SideBar'
import LoginPage from '../Components/InnerPages/LoginPage'

const LoginRegister = () => {
  return (
    <>
    <SideBar/>
    <div className="main-content">
         <Header/>
         
         <main>
             <Banner title="Registration & Sign In"/>
             <Category/>
             <LoginPage/>
         </main>
         <Footer/>
     </div>
    </>
  )
}

export default LoginRegister