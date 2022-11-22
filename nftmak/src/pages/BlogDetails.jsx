import React from 'react'
import BlogDetailsContent from '../Components/Blog/BlogDetailsContent'
import Category from '../Components/Category/Category'
import Banner from '../Components/Explore/Banner'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import SideBar from '../Components/IndexOne/SideBar'

const BlogDetails = () => {
  return (
    <>
    <SideBar/>
    <div className="main-content">
         <Header/>
         
         <main>
             <Banner title="News Details"/>
             <Category/>
             <BlogDetailsContent/>
         </main>
         <Footer/>
     </div>
    </>
  )
}

export default BlogDetails