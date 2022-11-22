import React from 'react'

const BrowseCate = () => {
  return (
    <div className="browse-category-area pt-80 pb-50">
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-4">
          <aside className="browse-category-sidebar">
            <div className="section-title mb-25">
              <h2 className="title">Status <img src="assets/img/icons/title_icon01.png" alt="" /></h2>
            </div>
            <div className="widget category-widget">
              <div className="widget-inner">
                <ul className="sidebar-tags">
                  <li><a href="/#">Buy Now</a></li>
                  <li><a href="/#">On Auction</a></li>
                  <li><a href="/#">New</a></li>
                  <li><a href="/#">Has Offers</a></li>
                </ul>
              </div>
            </div>
            <div className="widget category-widget">
              <h4 className="category-widget-title">Price</h4>
              <div className="widget-inner">
                <form action="#" className="sidebar-price-filter">
                  <div className="form-grp">
                    <input type="text" placeholder="Us Dollar" />
                    <span className="dollar">$</span>
                  </div>
                  <div className="form-grp">
                    <input type="text" placeholder="Min" />
                    <span className="to">to</span>
                    <input type="text" placeholder="Max" />
                  </div>
                </form>
              </div>
            </div>
            <div className="widget category-widget">
              <h4 className="category-widget-title">On sale in</h4>
              <div className="widget-inner">
                <form action="#" className="on-sale">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">ETH</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">WETH</label>
                  </div>
                </form>
              </div>
            </div>
          </aside>
        </div>
        <div className="col-xl-9 col-lg-8">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 col-sm-6">
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
            <div className="col-xl-4 col-md-6 col-sm-6">
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
                  <h5 className="title"><a href="/market-single">Peo Collection</a> <span className="price">5.4 ETH</span></h5>
                </div>
                <div className="collection-item-bottom">
                  <ul>
                    <li className="bid"><a href="/market-single" className="btn">place a bid</a></li>
                    <li className="wishlist"><a href="/#">59</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6">
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
            <div className="col-xl-4 col-md-6 col-sm-6">
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
            <div className="col-xl-4 col-md-6 col-sm-6">
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
            <div className="col-xl-4 col-md-6 col-sm-6">
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
            <div className="col-xl-4 col-md-6 col-sm-6">
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
            <div className="col-xl-4 col-md-6 col-sm-6">
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
                  <h5 className="title"><a href="/market-single">Dark Collection</a> <span className="price">5.4 ETH</span></h5>
                </div>
                <div className="collection-item-bottom">
                  <ul>
                    <li className="bid"><a href="/market-single" className="btn">place a bid</a></li>
                    <li className="wishlist"><a href="/#">59</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6">
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
                  <a href="/market-single"><img src="assets/img/others/top_collection02.jpg" alt="" /></a>
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
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BrowseCate