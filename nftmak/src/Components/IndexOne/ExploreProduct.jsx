import React from 'react'
import ProductData from "./ProductData.json";

const ExploreProduct = () => {
  return (
    <section className="explore-products-area">
        <div className="container">
          <div className="row mb-35">
            <div className="col-md-7 col-sm-8">
              <div className="section-title">
                <h2 className="title">Explore Product <img src="assets/img/icons/title_icon01.png" alt="" /></h2>
              </div>
            </div>
            <div className="col-md-5 col-sm-4">
              <div className="section-button text-end">
                <a href="/#" className="btn filter-btn filter-toggle"><i className="fi-sr-filter" /> filter</a>
              </div>
            </div>
          </div>
          <div className="filter-category-wrap">
            <div className="row">
              <div className="col-12">
                <ul className="category-list">
                  <li className="active"><a href="/index"><img src="assets/img/icons/cat_001.png" alt="" /> All</a></li>
                  <li><a href="/nft-marketplace"><img src="assets/img/icons/cat_01.png" alt="" /> Games</a></li>
                  <li><a href="/nft-marketplace"><img src="assets/img/icons/cat_02.png" alt="" /> Art</a></li>
                  <li><a href="/nft-marketplace"><img src="assets/img/icons/cat_03.png" alt="" /> Trading Cards</a></li>
                  <li><a href="/nft-marketplace"><img src="assets/img/icons/cat_04.png" alt="" /> Music</a></li>
                  <li><a href="/nft-marketplace"><img src="assets/img/icons/cat_05.png" alt="" /> Domain Names</a></li>
                  <li><a href="/nft-marketplace"><img src="assets/img/icons/cat_06.png" alt="" /> Memes</a></li>
                  <li><a href="/nft-marketplace"><img src="assets/img/icons/cat_07.png" alt="" /> Collectibles</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">

            {
              ProductData.map( data => {
                return(
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={data.id}>
                  <div className="top-collection-item">
                    <div className="collection-item-top">
                      <ul>
                        <li className="avatar"><a href="/author-profile" className="thumb"><img src={data.authorimg} alt="" /></a>By <a href={data.authorLink} className="name">{data.authorName}</a></li>
                        <li className="info-dots dropdown">
                          <span />
                          <span />
                          <span />
                          {/* <a href="/#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" /> */}
                          <ul className="dropdown-menu">
                            <li><a href="/nft-marketplace">Artwork</a></li>
                            <li><a href="/nft-marketplace">Action</a></li>
                            <li><a href="/nft-marketplace">Author Action</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="collection-item-thumb">
                      <a href="/market-single"><img src={data.collectionImg} alt="" /></a>
                    </div>
                    <div className="collection-item-content">
                      <h5 className="title"><a href="/market-single">{data.Title}</a> <span className="price">{data.Price}</span></h5>
                    </div>
                    <div className="collection-item-bottom">
                      <ul>
                        <li className="bid"><a href="/market-single" className="btn">place a bid</a></li>
                        <li className="wishlist"><a href="/login-register">{data.Reactions}</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                )

              })
            }
            
           
           
            
           
          </div>
        </div>
      </section>
  )
}

export default ExploreProduct