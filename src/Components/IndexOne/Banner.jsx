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
                      <p>Orchids is a Truly decentralized marketplace focusing on localized content channels in Greater Asia, easy onboarding & accessible trader tools, and true customer and partner support  powered by an established Web3 creative agency and experienced team</p>
                      <a href="/login-register" className="banner-btn">Go To Launchpad <i className="fi-sr-arrow-right" /></a>
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
