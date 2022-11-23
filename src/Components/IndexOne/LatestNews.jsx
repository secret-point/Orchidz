import React from 'react'

const LatestNews = () => {
  return (
    <section className="latest-news-area">
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <div className="section-title mb-45">
            <h2 className="title">Latest Updates <img src="assets/img/icons/title_icon01.png" alt="" /></h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-4 col-md-6 col-sm-9">
          <div className="latest-news-item">
            <div className="latest-news-thumb">
              <img src="assets/img/blog/news_thumb01.png" alt="" />
            </div>
            <div className="latest-news-content">
              <ul className="latest-news-meta">
                <li><i className="flaticon-user" /><a href="/blog">Admin</a></li>
                <li><i className="fi-sr-calendar" /> Dec 12, 2022</li>
              </ul>
              <h4 className="title"><a href="/blog-details">Metacurio Presents : Top 5 Most Popular NFT Games.</a></h4>
              <a href="/blog-details" className="btn">read more</a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 col-sm-9">
          <div className="latest-news-item">
            <div className="latest-news-thumb">
              <img src="assets/img/blog/news_thumb02.png" alt="" />
            </div>
            <div className="latest-news-content">
              <ul className="latest-news-meta">
                <li><i className="flaticon-user" /><a href="/blog">Admin</a></li>
                <li><i className="fi-sr-calendar" /> Dec 19, 2022</li>
              </ul>
              <h4 className="title"><a href="/blog-details">NFTs, rare digital items worlds crypto collectibles</a></h4>
              <a href="/blog-details" className="btn">read more</a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6 col-sm-9">
          <div className="latest-news-item">
            <div className="latest-news-thumb">
              <img src="assets/img/blog/news_thumb03.png" alt="" />
            </div>
            <div className="latest-news-content">
              <ul className="latest-news-meta">
                <li><i className="flaticon-user" /><a href="/blog">Admin</a></li>
                <li><i className="fi-sr-calendar" /> Dec 19, 2022</li>
              </ul>
              <h4 className="title"><a href="/blog-details">Asian Market Tips And Tricks</a></h4>
              <a href="/blog-details" className="btn">read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default LatestNews