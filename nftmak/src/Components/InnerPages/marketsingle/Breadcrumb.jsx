import React from 'react'

const Breadcrumb = () => {
  return (
    <div className="breadcrumb-area market-single-breadcrumb-area mt-180">
    <div className="breadcrumb-bg" />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="market-single-breadcrumb">
            <div className="home-back-btn"><a href="/#">go back to home</a></div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Product Details</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Breadcrumb