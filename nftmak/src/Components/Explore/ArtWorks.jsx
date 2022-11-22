import React from 'react'

const ArtWorks = () => {
  return (
    <section className="inner-explore-products">
    <div className="container">
      <div className="explore-product-filter">
        <div className="section-title mb-45">
          <h2 className="title">Artworks <img src="assets/img/icons/title_icon01.png" alt="" /></h2>
        </div>
        <div className="filter-wrap">
          <form action="#">
            <div className="filter-item">
              <label className="title">FILTER BY:</label>
              <label className="switch">
                <input type="checkbox" />
                <span className="button" />
              </label>
            </div>
            <div className="filter-item">
              <label className="title">Has list price:</label>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="button" />
              </label>
            </div>
            <div className="filter-item">
              <label className="title">Has open offer</label>
              <label className="switch">
                <input type="checkbox" />
                <span className="button" />
              </label>
            </div>
            <div className="filter-item">
              <label className="title">Owned by creator</label>
              <label className="switch">
                <input type="checkbox" />
                <span className="button" />
              </label>
            </div>
            <div className="filter-item">
              <label className="title">Has sold</label>
              <label className="switch">
                <input type="checkbox" />
                <span className="button" />
              </label>
            </div>
            <button className="btn filter-btn"><i className="fi-sr-filter" /> filter</button>
          </form>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="top-collection-item">
            <div className="collection-item-top">
              <ul>
                <li className="avatar"><a href="/author-profile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></a>By <a href="/author-profile" className="name">Jonson</a></li>
                <li className="info-dots dropdown">
                  <span />
                  <span />
                  <span />
                  <a href="/#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" />
                  <ul className="dropdown-menu">
                    <li><a href="/nft-marketplace">Artwork</a></li>
                    <li><a href="/nft-marketplace">Action</a></li>
                    <li><a href="/nft-marketplace">Author Action</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collection-item-thumb">
              <a href="/market-single"><img src="assets/img/others/top_collection01.jpg" alt="" /></a>
            </div>
            <div className="collection-item-content">
              <h5 className="title"><a href="/market-single">NFT Collection</a> <span className="price">5.4 ETH</span></h5>
            </div>
            <div className="collection-item-bottom">
              <ul>
                <li className="bid"><a href="/market-single" className="btn">place a bid</a></li>
                <li className="wishlist"><a href="/#">59</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="top-collection-item">
            <div className="collection-item-top">
              <ul>
                <li className="avatar"><a href="/author-profile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></a>By <a href="/author-profile" className="name">Jonson</a></li>
                <li className="info-dots dropdown">
                  <span />
                  <span />
                  <span />
                  <a href="/#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" />
                  <ul className="dropdown-menu">
                    <li><a href="/nft-marketplace">Artwork</a></li>
                    <li><a href="/nft-marketplace">Action</a></li>
                    <li><a href="/nft-marketplace">Author Action</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collection-item-thumb">
              <a href="/market-single"><img src="assets/img/others/top_collection05.jpg" alt="" /></a>
            </div>
            <div className="collection-item-content">
              <h5 className="title"><a href="/market-single">Pie Collection</a> <span className="price">5.4 ETH</span></h5>
            </div>
            <div className="collection-item-bottom">
              <ul>
                <li className="bid"><a href="/market-single" className="btn">place a bid</a></li>
                <li className="wishlist"><a href="/#">59</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="top-collection-item">
            <div className="collection-item-top">
              <ul>
                <li className="avatar"><a href="/author-profile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></a>By <a href="/author-profile" className="name">Jonson</a></li>
                <li className="info-dots dropdown">
                  <span />
                  <span />
                  <span />
                  <a href="/#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" />
                  <ul className="dropdown-menu">
                    <li><a href="/nft-marketplace">Artwork</a></li>
                    <li><a href="/nft-marketplace">Action</a></li>
                    <li><a href="/nft-marketplace">Author Action</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collection-item-thumb">
              <a href="/market-single"><img src="assets/img/others/top_collection06.jpg" alt="" /></a>
            </div>
            <div className="collection-item-content">
              <h5 className="title"><a href="/market-single">Artwork Collection</a> <span className="price">5.4 ETH</span></h5>
            </div>
            <div className="collection-item-bottom">
              <ul>
                <li className="bid"><a href="/market-single" className="btn">place a bid</a></li>
                <li className="wishlist"><a href="/#">59</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="top-collection-item">
            <div className="collection-item-top">
              <ul>
                <li className="avatar"><a href="/author-profile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></a>By <a href="/author-profile" className="name">Jonson</a></li>
                <li className="info-dots dropdown">
                  <span />
                  <span />
                  <span />
                  <a href="/#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" />
                  <ul className="dropdown-menu">
                    <li><a href="/nft-marketplace">Artwork</a></li>
                    <li><a href="/nft-marketplace">Action</a></li>
                    <li><a href="/nft-marketplace">Author Action</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collection-item-thumb">
              <a href="/market-single"><img src="assets/img/others/top_collection07.jpg" alt="" /></a>
            </div>
            <div className="collection-item-content">
              <h5 className="title"><a href="/market-single">Action Collection</a> <span className="price">5.4 ETH</span></h5>
            </div>
            <div className="collection-item-bottom">
              <ul>
                <li className="bid"><a href="/market-single" className="btn">place a bid</a></li>
                <li className="wishlist"><a href="/#">59</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="top-collection-item">
            <div className="collection-item-top">
              <ul>
                <li className="avatar"><a href="/author-profile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></a>By <a href="/author-profile" className="name">Jonson</a></li>
                <li className="info-dots dropdown">
                  <span />
                  <span />
                  <span />
                  <a href="/#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" />
                  <ul className="dropdown-menu">
                    <li><a href="/nft-marketplace">Artwork</a></li>
                    <li><a href="/nft-marketplace">Action</a></li>
                    <li><a href="/nft-marketplace">Author Action</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collection-item-thumb">
              <a href="/market-single"><img src="assets/img/others/top_collection08.jpg" alt="" /></a>
            </div>
            <div className="collection-item-content">
              <h5 className="title"><a href="/market-single">Craft Collection</a> <span className="price">5.4 ETH</span></h5>
            </div>
            <div className="collection-item-bottom">
              <ul>
                <li className="bid"><a href="/market-single" className="btn">place a bid</a></li>
                <li className="wishlist"><a href="/#">59</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="top-collection-item">
            <div className="collection-item-top">
              <ul>
                <li className="avatar"><a href="/author-profile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></a>By <a href="/author-profile" className="name">Jonson</a></li>
                <li className="info-dots dropdown">
                  <span />
                  <span />
                  <span />
                  <a href="/#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" />
                  <ul className="dropdown-menu">
                    <li><a href="/nft-marketplace">Artwork</a></li>
                    <li><a href="/nft-marketplace">Action</a></li>
                    <li><a href="/nft-marketplace">Author Action</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collection-item-thumb">
              <a href="/market-single"><img src="assets/img/others/top_collection09.jpg" alt="" /></a>
            </div>
            <div className="collection-item-content">
              <h5 className="title"><a href="/market-single">NFT Collection</a> <span className="price">5.4 ETH</span></h5>
            </div>
            <div className="collection-item-bottom">
              <ul>
                <li className="bid"><a href="/market-single" className="btn">place a bid</a></li>
                <li className="wishlist"><a href="/#">59</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="top-collection-item">
            <div className="collection-item-top">
              <ul>
                <li className="avatar"><a href="/author-profile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></a>By <a href="/author-profile" className="name">Jonson</a></li>
                <li className="info-dots dropdown">
                  <span />
                  <span />
                  <span />
                  <a href="/#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" />
                  <ul className="dropdown-menu">
                    <li><a href="/nft-marketplace">Artwork</a></li>
                    <li><a href="/nft-marketplace">Action</a></li>
                    <li><a href="/nft-marketplace">Author Action</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collection-item-thumb">
              <a href="/market-single"><img src="assets/img/others/top_collection10.jpg" alt="" /></a>
            </div>
            <div className="collection-item-content">
              <h5 className="title"><a href="/market-single">Artwork Collection</a> <span className="price">5.4 ETH</span></h5>
            </div>
            <div className="collection-item-bottom">
              <ul>
                <li className="bid"><a href="/market-single" className="btn">place a bid</a></li>
                <li className="wishlist"><a href="/#">59</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="top-collection-item">
            <div className="collection-item-top">
              <ul>
                <li className="avatar"><a href="/author-profile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></a>By <a href="/author-profile" className="name">Jonson</a></li>
                <li className="info-dots dropdown">
                  <span />
                  <span />
                  <span />
                  <a href="/#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" />
                  <ul className="dropdown-menu">
                    <li><a href="/nft-marketplace">Artwork</a></li>
                    <li><a href="/nft-marketplace">Action</a></li>
                    <li><a href="/nft-marketplace">Author Action</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collection-item-thumb">
              <a href="/market-single"><img src="assets/img/others/top_collection11.jpg" alt="" /></a>
            </div>
            <div className="collection-item-content">
              <h5 className="title"><a href="/market-single">NFT Collection</a> <span className="price">5.4 ETH</span></h5>
            </div>
            <div className="collection-item-bottom">
              <ul>
                <li className="bid"><a href="/market-single" className="btn">place a bid</a></li>
                <li className="wishlist"><a href="//#">59</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ArtWorks