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
                      <h2 className="title">Welcome <br /> <span>To</span> Orchidz</h2>
                      <p>Everything you need to build, host, scale amazing dapps free by creating account today</p>
                      <a href="/login-register" className="banner-btn">Let’s get started <i className="fi-sr-arrow-right" /></a>
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