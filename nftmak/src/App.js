


import { useEffect } from "react"
import $ from "jquery"

import { Routes, Route } from 'react-router-dom'
import Activity from './pages/Activity'
import AuthorProfile from './pages/AuthorProfile'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import Category from './pages/Category'
import Collections from './pages/Collections'
import CreateItem from './pages/CreateItem'
import Creators from './pages/Creators'
import Explore from './pages/Explore'
import Home from './pages/Home'
import LoginRegister from './pages/LoginRegister'
import MarketSingle from './pages/MarketSingle'
import NftLiveBidding from './pages/NftLiveBidding'
import Ranking from './pages/Ranking'


function App() {
  

  useEffect(()=>{
    $(".menu-trigger").on("click", function () {
      $(".offcanvas-wrapper,.offcanvas-overly").addClass("active");
      return false;
  });
  $(".menu-close,.offcanvas-overly").on("click", function () {
      $(".offcanvas-wrapper,.offcanvas-overly").removeClass("active");
  });

  
  
  },[])

  return (
    <div className="App">
       <Routes>
        
     
            <Route  path="/" element={<Home/>}/>
            <Route path="/nft-marketplace" element={<Explore/>}/>
            <Route path="/collections" element={<Collections/>}/>
            <Route path="/blog" element={<Blog/>}/>
           
            <Route path="/blog-details"  element={<BlogDetails/>}/>
            <Route path="/activity"  element={<Activity/>}/>
            <Route path="/ranking"  element={<Ranking/>}/>
            <Route path="/login-register"  element={<LoginRegister/>}/>
            <Route path="/author-profile"  element={<AuthorProfile/>}/>
            <Route path="/create-item"  element={<CreateItem/>}/>
            <Route path="/category"  element={<Category/>}/>
            <Route path="/creators"  element={<Creators/>}/>
            <Route path="/market-single"  element={<MarketSingle/>}/>
            <Route path="/nft-live-bidding"  element={<NftLiveBidding/>}/>
      
    </Routes>

    </div>
  );
}

export default App;
