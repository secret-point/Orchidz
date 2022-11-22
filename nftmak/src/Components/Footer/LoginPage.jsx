import React from 'react'

const LoginPage = () => {
  return (
    <section className="login-welcome-area">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="login-welcome-wrap">
            <div className="login-welcome-content">
              <h2 className="title">welcome to Orchidz</h2>
              <p>The top NFTs, ranked by volume, floor price and other <a href="/login-register">statistics.</a></p>
            </div>
            <div className="welcome-rating">
              <img src="assets/img/icons/three_star.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="signup-form-wrap">
            <h4 className="title">Sign up</h4>
            <form action="#">
              <div className="form-grp">
                <label htmlFor="fName">First name</label>
                <input type="text" id="fName" />
              </div>
              <div className="form-grp">
                <label htmlFor="lName">Last name</label>
                <input type="text" id="lName" />
              </div>
              <div className="form-grp">
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" />
              </div>
              <div className="form-grp">
                <label htmlFor="cPassword">Create Password</label>
                <input type="password" id="cPassword" />
              </div>
              <div className="form-grp">
                <label htmlFor="rPassword">Re Password</label>
                <input type="password" id="rPassword" />
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">Allow to all tearms &amp; condition</label>
              </div>
              <div className="form-btn-wrap">
                <button className="btn signup">sign up</button>
                <button className="btn login">log in</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="another-way-signup">
            <h4 className="title">Another way to sign up</h4>
            <p>The top NFTs ,, ranked by volume, floor price and other.</p>
            <ul className="another-way-list">
              <li><a href="/#"><img src="assets/img/icons/signup_icon01.png" alt="" />MetaMask <span>Popular</span></a></li>
              <li><a href="/#"><img src="assets/img/icons/signup_icon02.png" alt="" />Coinbase Wallet</a></li>
              <li><a href="/#"><img src="assets/img/icons/signup_icon03.png" alt="" />Wallet Connect</a></li>
              <li><a href="/#"><img src="assets/img/icons/signup_icon04.png" alt="" />Fortmatic</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default LoginPage