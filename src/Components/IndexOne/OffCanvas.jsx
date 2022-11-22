import React from 'react'


const OffCanvas = () => {
   
  return (
   <>
      <div className="offcanvas-wrapper">
          <div className="menu-trigger"><i className="fi-sr-angle-small-left" /></div>
          <div className="menu-close"><i className="fi-sr-angle-small-right" /></div>
          <div className="offcanvas-inner scroll">
            <div className="author-profile text-center mb-30">
              <div className="author-img">
                <img src="assets/img/others/author_img.png" alt="" />
              </div>
              <div className="author-content">
                <h4 className="title">Author Profile</h4>
                <p>Super Author</p>
                <a href="/login-register" className="btn">Checkout</a>
              </div>
            </div>
            <div className="sidebar-slider text-center mb-25">
              <div className="sidebar-active">
                <div className="sidebar-img">
                  <a href="/market-single"><img src="assets/img/others/sidebar_img01.png" alt="" /></a>
                </div>
                <div className="sidebar-img">
                  <a href="/market-single"><img src="assets/img/others/sidebar_img02.png" alt="" /></a>
                </div>
                <div className="sidebar-img">
                  <a href="/market-single"><img src="assets/img/others/sidebar_img03.png" alt="" /></a>
                </div>
              </div>
            </div>
            <div className="overview">
              <div className="overview-title">
                <h4 className="title">Overview</h4>
              </div>
              <div className="overview-item-wrap">
                <div className="overview-item">
                  <div className="overview-icon">
                    <i className="fi-sr-box-alt" />
                  </div>
                  <div className="overview-content">
                    <h4 className="title">Open project</h4>
                    <span>820</span>
                  </div>
                  <a href="/nft-marketplace"><i className=" fi-sr-angle-small-right" /></a>
                </div>
                <div className="overview-item">
                  <div className="overview-icon">
                    <i className="fi-sr-mountains" />
                  </div>
                  <div className="overview-content">
                    <h4 className="title">Successful Completed</h4>
                    <span>546</span>
                  </div>
                  <a href="/nft-marketplace"><i className=" fi-sr-angle-small-right" /></a>
                </div>
                <div className="overview-item">
                  <div className="overview-icon">
                    <i className=" fi-sr-hourglass-end" />
                  </div>
                  <div className="overview-content">
                    <h4 className="title">trending</h4>
                    <span>32</span>
                  </div>
                  <a href="/nft-marketplace"><i className=" fi-sr-angle-small-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas-overly"></div>
   </>
  )
}

export default OffCanvas