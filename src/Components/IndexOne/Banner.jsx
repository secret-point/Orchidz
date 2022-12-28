import React from 'react'
import TopSeller from './TopSeller'

const Banner = () => {
  return (
      <>
           <div className="banner-bg">
          
            <div className="banner-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-8">
                    <div className="banner-content">
                      <h2 className="title">Welcome <br /> <span>To</span> Orchidz Launchpad</h2>
                      <p>Get Involved</p>
                      <a href="/login-register" className="banner-btn">click Here To Get Started! <i className="fi-sr-arrow-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* top-seller-area */}
            <TopSeller/>
            {/* top-seller-area-end */}
          </div>
      </>
  )
}

export default Banner
