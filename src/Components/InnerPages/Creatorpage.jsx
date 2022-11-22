import React from 'react'
import Slider from "react-slick"

const Creatorpage = () => {
    const settings = {

  dots: true,
	infinite: true,
	speed: 1000,
	autoplay: false,
	arrows: false,
	slidesToShow: 6,
	slidesToScroll: 2,
	responsive: [
		{
			breakpoint: 1500,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 2,
				infinite: true,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
	]

    }
  return (

    <section className="creator-area pt-80 pb-80">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title mb-35">
            <h2 className="title">Popular Creators <img src="assets/img/icons/title_icon01.png" alt="" /></h2>
          </div>
          <Slider className="creator-active" {...settings}>
            <div className="creator-item">
              <img src="assets/img/icons/start.png" alt="" className="star" />
              <div className="creator-thumb">
                <img src="assets/img/others/creators_01.png" alt="" />
              </div>
              <div className="creator-content">
                <h5 className="title"><a href="/author-profile">Franklin Jonas</a></h5>
                <span>1k Sale 5.47 ETH</span>
                <a href="/author-profile" className="btn">follow</a>
              </div>
            </div>
            <div className="creator-item">
              <img src="assets/img/icons/start.png" alt="" className="star" />
              <div className="creator-thumb">
                <img src="assets/img/others/creators_02.png" alt="" />
              </div>
              <div className="creator-content">
                <h5 className="title"><a href="/author-profile">Franklin Jonas</a></h5>
                <span>1k Sale 5.47 ETH</span>
                <a href="/author-profile" className="btn">follow</a>
              </div>
            </div>
            <div className="creator-item">
              <img src="assets/img/icons/start.png" alt="" className="star" />
              <div className="creator-thumb">
                <img src="assets/img/others/creators_03.png" alt="" />
              </div>
              <div className="creator-content">
                <h5 className="title"><a href="/author-profile">Franklin Jonas</a></h5>
                <span>1k Sale 5.47 ETH</span>
                <a href="/author-profile" className="btn">follow</a>
              </div>
            </div>
            <div className="creator-item">
              <img src="assets/img/icons/start.png" alt="" className="star" />
              <div className="creator-thumb">
                <img src="assets/img/others/creators_04.png" alt="" />
              </div>
              <div className="creator-content">
                <h5 className="title"><a href="/author-profile">Franklin Jonas</a></h5>
                <span>1k Sale 5.47 ETH</span>
                <a href="/author-profile" className="btn">follow</a>
              </div>
            </div>
            <div className="creator-item">
              <img src="assets/img/icons/start.png" alt="" className="star" />
              <div className="creator-thumb">
                <img src="assets/img/others/creators_05.png" alt="" />
              </div>
              <div className="creator-content">
                <h5 className="title"><a href="/author-profile">Franklin Jonas</a></h5>
                <span>1k Sale 5.47 ETH</span>
                <a href="/author-profile" className="btn">follow</a>
              </div>
            </div>
            <div className="creator-item">
              <img src="assets/img/icons/start.png" alt="" className="star" />
              <div className="creator-thumb">
                <img src="assets/img/others/creators_06.png" alt="" />
              </div>
              <div className="creator-content">
                <h5 className="title"><a href="/author-profile">Franklin Jonas</a></h5>
                <span>1k Sale 5.47 ETH</span>
                <a href="/author-profile" className="btn">follow</a>
              </div>
            </div>
            <div className="creator-item">
              <img src="assets/img/icons/start.png" alt="" className="star" />
              <div className="creator-thumb">
                <img src="assets/img/others/creators_03.png" alt="" />
              </div>
              <div className="creator-content">
                <h5 className="title"><a href="/author-profile">Franklin Jonas</a></h5>
                <span>1k Sale 5.47 ETH</span>
                <a href="/author-profile" className="btn">follow</a>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Creatorpage