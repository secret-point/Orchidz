import React from 'react'
import Slider from 'react-slick';


 function PrevArrow(props){
    const {className,onClick} = props;
    return(
      <button type='button' className={className} onClick={onClick}><i className="fi-sr-arrow-left"></i></button>
    )
 }

 function NextArrow(props){
   const {className,onClick} = props;
   return(
     <button type='button' className={className} onClick={onClick}><i className="fi-sr-arrow-right"></i></button>
   )
 }

const TopCollection = () => {
  const settings = {
    dots: false,
	infinite: true,
	speed: 1000,
	autoplay: false,
	arrows: false,
	prevArrow: <PrevArrow/>,
	nextArrow: <NextArrow/>,
	appendArrows: ".top-collection-nav",
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
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
    <section className="top-collection-area">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="section-title mb-40">
            <h2 className="title">Top collections <img src="assets/img/icons/title_icon01.png" alt="" /></h2>
          </div>
        </div>
        <div className="col-md-6">
          <div className="top-collection-nav" />
        </div>
      </div>
      <Slider className="row top-collection-active" {...settings}>
        <div className="col-xl-3">
          <div className="top-collection-item">
            <div className="collection-item-top">
              <ul>
                <li className="avatar"><a href="/author-profile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></a>By <a href="/author-profile" className="name">Jeff</a></li>
                <li className="info-dots dropdown">
                  <span />
                  <span />
                  <span />
                  <a href="/#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" />
                  <ul className="dropdown-menu">
                    <li><a href="/nft-marketplace">Artwork</a></li>
                    <li><a href="/nft-marketplace">Action</a></li>
                    <li><a href="/nft-marketplace">Author Action</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collection-item-thumb">
              <a href="/market-single"><img src="assets/img/others/top_collection01.jpg" alt="" /></a>
            </div>
            <div className="collection-item-content">
              <h5 className="title"><a href="/market-single">NFT Collection</a> <span className="price">5.4 ETH</span></h5>
            </div>
            <div className="collection-item-bottom">
              <ul>
                <li className="bid"><a href="/market-single" className="btn">place a bid</a></li>
                <li className="wishlist"><a href="/login-register">59</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3">
          <div className="top-collection-item">
            <div className="collection-item-top">
              <ul>
                <li className="avatar"><a href="/author-profile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></a>By <a href="/author-profile" className="name">Jeff</a></li>
                <li className="info-dots dropdown">
                  <span />
                  <span />
                  <span />
                  <a href="/#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" />
                  <ul className="dropdown-menu">
                    <li><a href="/nft-marketplace">Artwork</a></li>
                    <li><a href="/nft-marketplace">Action</a></li>
                    <li><a href="/nft-marketplace">Author Action</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collection-item-thumb">
              <a href="/market-single"><img src="assets/img/others/top_collection02.jpg" alt="" /></a>
            </div>
            <div className="collection-item-content">
              <h5 className="title"><a href="/market-single">Colorful Abstract</a> <span className="price">5.4 ETH</span></h5>
            </div>
            <div className="collection-item-bottom">
              <ul>
                <li className="bid"><a href="/market-single" className="btn">place a bid</a></li>
                <li className="wishlist"><a href="/login-register">59</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3">
          <div className="top-collection-item">
            <div className="collection-item-top">
              <ul>
                <li className="avatar"><a href="/author-profile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></a>By <a href="/author-profile" className="name">Jeff</a></li>
                <li className="info-dots dropdown">
                  <span />
                  <span />
                  <span />
                  <a href="/#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" />
                  <ul className="dropdown-menu">
                    <li><a href="/nft-marketplace">Artwork</a></li>
                    <li><a href="/nft-marketplace">Action</a></li>
                    <li><a href="/nft-marketplace">Author Action</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collection-item-thumb">
              <a href="/market-single"><img src="assets/img/others/top_collection03.jpg" alt="" /></a>
            </div>
            <div className="collection-item-content">
              <h5 className="title"><a href="/market-single">The girl firefly</a> <span className="price">5.4 ETH</span></h5>
            </div>
            <div className="collection-item-bottom">
              <ul>
                <li className="bid"><a href="/market-single" className="btn">place a bid</a></li>
                <li className="wishlist"><a href="/login-register">59</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3">
          <div className="top-collection-item">
            <div className="collection-item-top">
              <ul>
                <li className="avatar"><a href="/author-profile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></a>By <a href="/author-profile" className="name">Jeff</a></li>
                <li className="info-dots dropdown">
                  <span />
                  <span />
                  <span />
                  <a href="/#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" />
                  <ul className="dropdown-menu">
                    <li><a href="/nft-marketplace">Artwork</a></li>
                    <li><a href="/nft-marketplace">Action</a></li>
                    <li><a href="/nft-marketplace">Author Action</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collection-item-thumb">
              <a href="/market-single"><img src="assets/img/others/top_collection04.jpg" alt="" /></a>
            </div>
            <div className="collection-item-content">
              <h5 className="title"><a href="/market-single">Forest Princess</a> <span className="price">5.4 ETH</span></h5>
            </div>
            <div className="collection-item-bottom">
              <ul>
                <li className="bid"><a href="/market-single" className="btn">place a bid</a></li>
                <li className="wishlist"><a href="/login-register">59</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3">
          <div className="top-collection-item">
            <div className="collection-item-top">
              <ul>
                <li className="avatar"><a href="/author-profile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></a>By <a href="/author-profile" className="name">Jeff</a></li>
                <li className="info-dots dropdown">
                  <span />
                  <span />
                  <span />
                  <a href="/#" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" />
                  <ul className="dropdown-menu">
                    <li><a href="/nft-marketplace">Artwork</a></li>
                    <li><a href="/nft-marketplace">Action</a></li>
                    <li><a href="/nft-marketplace">Author Action</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="collection-item-thumb">
              <a href="/market-single"><img src="assets/img/others/top_collection05.jpg" alt="" /></a>
            </div>
            <div className="collection-item-content">
              <h5 className="title"><a href="/market-single">NFT Painting</a> <span className="price">5.4 ETH</span></h5>
            </div>
            <div className="collection-item-bottom">
              <ul>
                <li className="bid"><a href="/market-single" className="btn">place a bid</a></li>
                <li className="wishlist"><a href="/login-register">59</a></li>
              </ul>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  </section>
  )
}

export default TopCollection