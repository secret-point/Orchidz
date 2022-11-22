import React from 'react'

const Banner = (props) => {
  return (
    <section className="breadcrumb-area breadcrumb-bg">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="breadcrumb-content text-center">
            <h3 className="title">{props.title}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Banner