import React from 'react'

const TopSeller = () => {
  return (
    <div className="top-seller-area">
    <div className="container">
      <div className="top-seller-wrap">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title mb-40">
              <h2 className="title">Top Seller <img src="assets/img/icons/title_icon01.png" alt="" /></h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="top-seller-item">
              <div className="top-seller-img">
                <img src="assets/img/others/top-seller-img.jpg" alt="" />
              </div>
              <div className="top-seller-content">
                <h5 className="title"><a href="/author-profile ">Jeff Hood</a></h5>
                <p>885.5 <span>Eth</span></p>
                <ul className="icon">
                  <li><a href="/collections "><i className="fi-sr-pharmacy" /></a></li>
                  <li><a href="/login-register "><i className="fi-sr-share" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="top-seller-item">
              <div className="top-seller-img">
                <img src="assets/img/others/top-seller-img02.jpg" alt="" />
              </div>
              <div className="top-seller-content">
                <h5 className="title"><a href="/author-profile ">Jeff Hood</a></h5>
                <p>885.5 <span>Eth</span></p>
                <ul className="icon">
                  <li><a href="/collections "><i className="fi-sr-pharmacy" /></a></li>
                  <li><a href="/login-register "><i className="fi-sr-share" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="top-seller-item">
              <div className="top-seller-img">
                <img src="assets/img/others/top-seller-img03.jpg" alt="" />
              </div>
              <div className="top-seller-content">
                <h5 className="title"><a href="/author-profile ">Jeff Hood</a></h5>
                <p>885.5 <span>Eth</span></p>
                <ul className="icon">
                  <li><a href="/collections "><i className="fi-sr-pharmacy" /></a></li>
                  <li><a href="/login-register "><i className="fi-sr-share" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="top-seller-item">
              <div className="top-seller-img">
                <img src="assets/img/others/top-seller-img04.jpg" alt="" />
              </div>
              <div className="top-seller-content">
                <h5 className="title"><a href="/author-profile ">Jeff Hood</a></h5>
                <p>885.5 <span>Eth</span></p>
                <ul className="icon">
                  <li><a href="/collections "><i className="fi-sr-pharmacy" /></a></li>
                  <li><a href="/login-register "><i className="fi-sr-share" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TopSeller