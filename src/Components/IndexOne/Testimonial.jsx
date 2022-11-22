import React from 'react'
import Slider from "react-slick"

const Testimonial = () => {

  const settings = {
  dots: true,
	infinite: true,
	speed: 1000,
	autoplay: false,
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
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
   
    <section className="testimonial--area">
    <div className="container">
      <div className="testimonial-shape-wrap">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9 col-md-10">
            <Slider className="testimonial-active"{...settings}>
              <div className="testimonial--item text-center">
                <div className="testimonial-rating">
                  <img src="assets/img/others/star.png" alt="" />
                </div>
                <div className="testimonial--content">
                  <p>“ What even is an NFT? NFT stands for non-fungible token, which basically means that it's one kind digital asset that belongs to you and you only. The most popular NFTs right include artwork and music, include videos and even tweets “</p>
                  <div className="testimonial--avatar--info">
                    <h5 className="title">Alexandra Pilot</h5>
                    <a href="/contact." className="see-all">See All Reviews</a>
                  </div>
                </div>
              </div>
              <div className="testimonial--item text-center">
                <div className="testimonial-rating">
                  <img src="assets/img/others/star.png" alt="" />
                </div>
                <div className="testimonial--content">
                  <p>“ What even is an NFT? NFT stands for non-fungible token, which basically means that it's one kind digital asset that belongs to you and you only. The most popular NFTs right include artwork and music, include videos and even tweets “</p>
                  <div className="testimonial--avatar--info">
                    <h5 className="title">Alexandra Pilot</h5>
                    <a href="/contact." className="see-all">See All Reviews</a>
                  </div>
                </div>
              </div>
              <div className="testimonial--item text-center">
                <div className="testimonial-rating">
                  <img src="assets/img/others/star.png" alt="" />
                </div>
                <div className="testimonial--content">
                  <p>“ What even is an NFT? NFT stands for non-fungible token, which basically means that it's one kind digital asset that belongs to you and you only. The most popular NFTs right include artwork and music, include videos and even tweets “</p>
                  <div className="testimonial--avatar--info">
                    <h5 className="title">Alexandra Pilot</h5>
                    <a href="/contact." className="see-all">See All Reviews</a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonial