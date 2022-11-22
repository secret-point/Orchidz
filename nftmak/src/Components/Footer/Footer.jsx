import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className="footer-top-wrap">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-3 col-lg-4 col-md-5 col-sm-9">
            <div className="footer-widget">
              <div className="footer-logo mb-25">
                <a href="/index"><img src="assets/img/logo/logo.png" alt="" /></a>
              </div>
              <p>WELCOME TO ORCHIDZ</p>
              <ul className="footer-social">
                <li><a href="/#"><i className="fab fa-facebook-f" /></a></li>
                <li><a href="/#"><i className="fab fa-twitter" /></a></li>
                <li><a href="/#"><i className="fab fa-linkedin-in" /></a></li>
                <li><a href="/#"><i className="fab fa-pinterest-p" /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="footer-widget">
              <h4 className="fw-title">Useful Links</h4>
              <ul className="fw-links">
                <li><a href="/nft-marketplace">All NFTs</a></li>
                <li><a href="/login-register">How It Works</a></li>
                <li><a href="/create-item">Create</a></li>
                <li><a href="/nft-marketplace">Explore</a></li>
                <li><a href="/login-register">Privacy &amp; Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="footer-widget">
              <h4 className="fw-title">Community</h4>
              <ul className="fw-links">
                <li><a href="/login-register">Help Center</a></li>
                <li><a href="/login-register">Partners</a></li>
                <li><a href="/login-register">Suggestions</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/login-register">Newsletter</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-widget">
              <h4 className="fw-title">Subscribe Us</h4>
              <form action="#" className="newsletter-form">
                <input type="email" placeholder="info@youmail.com" />
                <button type="submit"><i className="flaticon-small-rocket-ship-silhouette" /></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-wrap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="copyright-text">
              <p>All rights reserved © 2022 by <a href="/#">Orchidz</a></p>
            </div>
          </div>
          <div className="col-md-6">
            <ul className="copyright-link-list">
              <li><a href="/login-register">Privacy Policy</a></li>
              <li><a href="/login-register">Terms And Condition</a></li>
              <li><a href="/login-register">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer