import React from 'react'
import BlogContent from '../Components/Blog/BlogContent'
import Category from '../Components/Category/Category'
import Banner from '../Components/Explore/Banner'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import SideBar from '../Components/IndexOne/SideBar'

const Blog = () => {
  return (
    <>
    <SideBar/>
    <div className="main-content">
         <Header/>
         
         <main>
             <Banner title="Latest News"/>
             <Category/>
             <BlogContent/>
         </main>
         <Footer/>
     </div>
    </>
  )
}

export default Blog