import React from 'react'
import Masonry from './Masonry';

const WeekFeatures = () => {
  const imageUrls = [
    "assets/img/others/features_img01.png",
    "assets/img/others/features_img02.png",
    "assets/img/others/features_img03.png",
    "assets/img/others/features_img04.png"

   ];
   const imageUrls1=[
    "assets/img/others/s_features_img01.png",
    "assets/img/others/features_img02.png",
    "assets/img/others/s_features_img03.png",
    "assets/img/others/s_features_img04.png"

   ];
   const imageUrls2 =[
    "assets/img/others/t_features_img01.png",
    "assets/img/others/features_img02.png",
    "assets/img/others/features_img03.png",
    "assets/img/others/t_features_img04.png" 

   ]
  return (
   
        <section className="week-features-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title mb-35">
                <h2 className="title">Features of the week <img src="assets/img/icons/title_icon02.png" alt="" /></h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="week-features-item">
                <div className="features-item-top">
                  <div className="features-avatar">
                    <div className="features-avatar-thumb">
                      <a href="/author-profile"><img src="assets/img/others/features_avatar.png" alt="" /></a>
                    </div>
                    <div className="features-avatar-info">
                      <h5 className="title"><a href="/nft-marketplace">Deploy Abstract</a></h5>
                      <span>Created by <a href="/author-profile">Konx</a></span>
                    </div>
                  </div>
                  <div className="features-item-wishlist">
                    <a href="/#">100</a>
                  </div>
                </div>
                <ul className="features-img-wrap">
                  <li className='image'><Masonry imageUrls={imageUrls} columnCount="2" gap="5"></Masonry></li>
                
                  
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="week-features-item">
                <div className="features-item-top">
                  <div className="features-avatar">
                    <div className="features-avatar-thumb">
                      <a href="/author-profile"><img src="assets/img/others/features_avatar02.png" alt="" /></a>
                    </div>
                    <div className="features-avatar-info">
                      <h5 className="title"><a href="/nft-marketplace">Random Abstract</a></h5>
                      <span>Created by <a href="/author-profile">Tanuok</a></span>
                    </div>
                  </div>
                  <div className="features-item-wishlist">
                    <a href="/#">300</a>
                  </div>
                </div>
                <ul className="features-img-wrap">
                <li className='image'><Masonry imageUrls={imageUrls1} columnCount="2" gap="5"></Masonry></li>
                
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="week-features-item">
                <div className="features-item-top">
                  <div className="features-avatar">
                    <div className="features-avatar-thumb">
                      <a href="/author-profile"><img src="assets/img/others/features_avatar03.png" alt="" /></a>
                    </div>
                    <div className="features-avatar-info">
                      <h5 className="title"><a href="/nft-marketplace">Colorful Abstract</a></h5>
                      <span>Created by <a href="/author-profile">Jonson</a></span>
                    </div>
                  </div>
                  <div className="features-item-wishlist">
                    <a href="/#">190</a>
                  </div>
                </div>
                <ul className="features-img-wrap">
                <li className='image'><Masonry imageUrls={imageUrls2} columnCount="2" gap="5"></Masonry></li>
                
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>



  
  )
}

export default WeekFeatures