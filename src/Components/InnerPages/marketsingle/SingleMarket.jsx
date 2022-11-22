import React from 'react'


const SingleMarket = () => {
  return (
       
    <section className="market-single-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="market-single-img">
            <img src="assets/img/others/market_details_img.png" alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="market-single-top">
            <div className="market-single-title-wrap">
              <h2 className="title">Anatomy Science Club</h2>
              <ul className="market-details-meta">
                <li>Owned by <a href="/#">B14484</a></li>
                <li className="wishlist">6 favorites</li>
              </ul>
            </div>
            <div className="market-single-action">
              <ul>
                <li><a href="/#"><i className="fas fa-share-alt" /></a></li>
                <li><a href="/#"><i className="fi-sr-menu-dots" /></a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="market-single-creator">
                <div className="thumb"><img src="assets/img/others/mp_avatar01.png" alt="" /></div>
                <div className="info">
                  <h5 className="title"><a href="/author-profile">David Michels</a></h5>
                  <span>Creators by</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="market-single-creator">
                <div className="thumb"><img src="assets/img/others/mp_avatar02.png" alt="" /></div>
                <div className="info">
                  <h5 className="title"><a href="/author-profile">MR. Tartos</a></h5>
                  <span>Collection by</span>
                </div>
              </div>
            </div>
          </div>
          <div className="market-single-content">
            <p>What even is an NFT? NFT stands for non-fungible token, which basically means that it's one-of-kind digital asset that belongs to you and you only. The most popular NFTs right now include artwork and music also include videos.</p>
          </div>
          <div className="highest-bid-wrap">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-md-6">
                <h5 className="title">Highest bid</h5>
                <div className="highest-bid-avatar">
                  <div className="thumb"><img src="assets/img/others/heighest_avatar.png" alt="" /></div>
                  <div className="content">
                    <h5 className="title"><a href="/author-profile">Tomas lindahl</a></h5>
                    <span>3.005wETH</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-6">
                <h5 className="title">Auction has ended</h5>
                <div className="bid-countdown-wrap">
                  <div className="coming-time" data-countdown="2022/05/16" />
                </div>
              </div>
            </div>
          </div>
          <a href="/#" className="place-bid-btn">Place a bid</a>
        </div>
        <div className="col-lg-6">
          <div className="activity-table-responsive">
            <table className="table activity-table">
              <thead>
                <tr>
                  <th scope="col" className="title">Description</th>
                  <th scope="col">Floor Price</th>
                  <th scope="col">Owners</th>
                  <th scope="col" className="time">Assets</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="author">
                    <img src="assets/img/others/mp_activity_author01.png" alt="" /> <a href="/nft-marketplace">Trading Pet</a>
                  </th>
                  <td>+5486%</td>
                  <td>-965%</td>
                  <td>2,356 ETH</td>
                </tr>
                <tr>
                  <th scope="row" className="author">
                    <img src="assets/img/others/mp_activity_author02.png" alt="" /> <a href="/nft-marketplace">Trading Craft</a>
                  </th>
                  <td>+5486%</td>
                  <td>-965%</td>
                  <td>2,356 ETH</td>
                </tr>
                <tr>
                  <th scope="row" className="author">
                    <img src="assets/img/others/mp_activity_author03.png" alt="" /> <a href="/nft-marketplace">Trading Cards</a>
                  </th>
                  <td>+5486%</td>
                  <td>-965%</td>
                  <td>2,356 ETH</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="bid-history-wrap">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="bid-tab" data-bs-toggle="tab" data-bs-target="#bid" type="button" role="tab" aria-controls="bid" aria-selected="true">Bid History</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="info-tab" data-bs-toggle="tab" data-bs-target="#info" type="button" role="tab" aria-controls="info" aria-selected="false">Info</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="provenance-tab" data-bs-toggle="tab" data-bs-target="#provenance" type="button" role="tab" aria-controls="provenance" aria-selected="false">Provenance</button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="bid" role="tabpanel" aria-labelledby="bid-tab">
                <div className="bid-history-overflow scroll">
                  <ul className="bid-history-list">
                    <li>
                      <div className="bid-history-item">
                        <div className="highest-bid-avatar">
                          <div className="thumb"><img src="assets/img/others/heighest_avatar.png" alt="" /></div>
                          <div className="content">
                            <h5 className="title"><a href="/author-profile">Tomas lindahl</a></h5>
                            <span>Bid listed</span>
                          </div>
                        </div>
                        <div className="bid-history-info">
                          <span>8 hours ago</span>
                          <h6 className="title">25 ETH</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="bid-history-item">
                        <div className="highest-bid-avatar">
                          <div className="thumb"><img src="assets/img/others/heighest_avatar02.png" alt="" /></div>
                          <div className="content">
                            <h5 className="title"><a href="/author-profile">David Michels</a></h5>
                            <span>Bid listed</span>
                          </div>
                        </div>
                        <div className="bid-history-info">
                          <span>8 hours ago</span>
                          <h6 className="title">25 ETH</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="bid-history-item">
                        <div className="highest-bid-avatar">
                          <div className="thumb"><img src="assets/img/others/heighest_avatar03.png" alt="" /></div>
                          <div className="content">
                            <h5 className="title"><a href="/author-profile">Jonny Dev</a></h5>
                            <span>Bid listed</span>
                          </div>
                        </div>
                        <div className="bid-history-info">
                          <span>8 hours ago</span>
                          <h6 className="title">25 ETH</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="bid-history-item">
                        <div className="highest-bid-avatar">
                          <div className="thumb"><img src="assets/img/others/heighest_avatar04.png" alt="" /></div>
                          <div className="content">
                            <h5 className="title"><a href="/author-profile">Tomas lindahl</a></h5>
                            <span>Bid listed</span>
                          </div>
                        </div>
                        <div className="bid-history-info">
                          <span>8 hours ago</span>
                          <h6 className="title">25 ETH</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="bid-history-item">
                        <div className="highest-bid-avatar">
                          <div className="thumb"><img src="assets/img/others/heighest_avatar05.png" alt="" /></div>
                          <div className="content">
                            <h5 className="title"><a href="/author-profile">Tomas Komai</a></h5>
                            <span>Bid listed</span>
                          </div>
                        </div>
                        <div className="bid-history-info">
                          <span>8 hours ago</span>
                          <h6 className="title">25 ETH</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="bid-history-item">
                        <div className="highest-bid-avatar">
                          <div className="thumb"><img src="assets/img/others/heighest_avatar06.png" alt="" /></div>
                          <div className="content">
                            <h5 className="title"><a href="/author-profile">Tomas Harne</a></h5>
                            <span>Bid listed</span>
                          </div>
                        </div>
                        <div className="bid-history-info">
                          <span>8 hours ago</span>
                          <h6 className="title">25 ETH</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="bid-history-item">
                        <div className="highest-bid-avatar">
                          <div className="thumb"><img src="assets/img/others/heighest_avatar.png" alt="" /></div>
                          <div className="content">
                            <h5 className="title"><a href="/author-profile">Tomas lindahl</a></h5>
                            <span>Bid listed</span>
                          </div>
                        </div>
                        <div className="bid-history-info">
                          <span>8 hours ago</span>
                          <h6 className="title">25 ETH</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                <div className="bid-history-overflow scroll">
                  <ul className="bid-history-list">
                    <li>
                      <div className="bid-history-item">
                        <div className="highest-bid-avatar">
                          <div className="thumb"><img src="assets/img/others/heighest_avatar02.png" alt="" /></div>
                          <div className="content">
                            <h5 className="title"><a href="/#">Tomas lindahl</a></h5>
                            <span>Bid listed</span>
                          </div>
                        </div>
                        <div className="bid-history-info">
                          <span>8 hours ago</span>
                          <h6 className="title">25 ETH</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="bid-history-item">
                        <div className="highest-bid-avatar">
                          <div className="thumb"><img src="assets/img/others/heighest_avatar03.png" alt="" /></div>
                          <div className="content">
                            <h5 className="title"><a href="/#">Tomas lindahl</a></h5>
                            <span>Bid listed</span>
                          </div>
                        </div>
                        <div className="bid-history-info">
                          <span>8 hours ago</span>
                          <h6 className="title">25 ETH</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="bid-history-item">
                        <div className="highest-bid-avatar">
                          <div className="thumb"><img src="assets/img/others/heighest_avatar04.png" alt="" /></div>
                          <div className="content">
                            <h5 className="title"><a href="/#">Tomas lindahl</a></h5>
                            <span>Bid listed</span>
                          </div>
                        </div>
                        <div className="bid-history-info">
                          <span>8 hours ago</span>
                          <h6 className="title">25 ETH</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="bid-history-item">
                        <div className="highest-bid-avatar">
                          <div className="thumb"><img src="assets/img/others/heighest_avatar05.png" alt="" /></div>
                          <div className="content">
                            <h5 className="title"><a href="/#">Tomas lindahl</a></h5>
                            <span>Bid listed</span>
                          </div>
                        </div>
                        <div className="bid-history-info">
                          <span>8 hours ago</span>
                          <h6 className="title">25 ETH</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="bid-history-item">
                        <div className="highest-bid-avatar">
                          <div className="thumb"><img src="assets/img/others/heighest_avatar06.png" alt="" /></div>
                          <div className="content">
                            <h5 className="title"><a href="/#">Tomas lindahl</a></h5>
                            <span>Bid listed</span>
                          </div>
                        </div>
                        <div className="bid-history-info">
                          <span>8 hours ago</span>
                          <h6 className="title">25 ETH</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="bid-history-item">
                        <div className="highest-bid-avatar">
                          <div className="thumb"><img src="assets/img/others/heighest_avatar02.png" alt="" /></div>
                          <div className="content">
                            <h5 className="title"><a href="/#">Tomas lindahl</a></h5>
                            <span>Bid listed</span>
                          </div>
                        </div>
                        <div className="bid-history-info">
                          <span>8 hours ago</span>
                          <h6 className="title">25 ETH</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="bid-history-item">
                        <div className="highest-bid-avatar">
                          <div className="thumb"><img src="assets/img/others/heighest_avatar.png" alt="" /></div>
                          <div className="content">
                            <h5 className="title"><a href="/#">Tomas lindahl</a></h5>
                            <span>Bid listed</span>
                          </div>
                        </div>
                        <div className="bid-history-info">
                          <span>8 hours ago</span>
                          <h6 className="title">25 ETH</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-pane fade" id="provenance" role="tabpanel" aria-labelledby="provenance-tab">
                <div className="bid-history-overflow scroll">
                  <ul className="bid-history-list">
                    <li>
                      <div className="bid-history-item">
                        <div className="highest-bid-avatar">
                          <div className="thumb"><img src="assets/img/others/heighest_avatar.png" alt="" /></div>
                          <div className="content">
                            <h5 className="title"><a href="/#">Tomas lindahl</a></h5>
                            <span>Bid listed</span>
                          </div>
                        </div>
                        <div className="bid-history-info">
                          <span>8 hours ago</span>
                          <h6 className="title">25 ETH</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="bid-history-item">
                        <div className="highest-bid-avatar">
                          <div className="thumb"><img src="assets/img/others/heighest_avatar02.png" alt="" /></div>
                          <div className="content">
                            <h5 className="title"><a href="/#">Tomas lindahl</a></h5>
                            <span>Bid listed</span>
                          </div>
                        </div>
                        <div className="bid-history-info">
                          <span>8 hours ago</span>
                          <h6 className="title">25 ETH</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="bid-history-item">
                        <div className="highest-bid-avatar">
                          <div className="thumb"><img src="assets/img/others/heighest_avatar03.png" alt="" /></div>
                          <div className="content">
                            <h5 className="title"><a href="/#">Tomas lindahl</a></h5>
                            <span>Bid listed</span>
                          </div>
                        </div>
                        <div className="bid-history-info">
                          <span>8 hours ago</span>
                          <h6 className="title">25 ETH</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="bid-history-item">
                        <div className="highest-bid-avatar">
                          <div className="thumb"><img src="assets/img/others/heighest_avatar04.png" alt="" /></div>
                          <div className="content">
                            <h5 className="title"><a href="/#">Tomas lindahl</a></h5>
                            <span>Bid listed</span>
                          </div>
                        </div>
                        <div className="bid-history-info">
                          <span>8 hours ago</span>
                          <h6 className="title">25 ETH</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="bid-history-item">
                        <div className="highest-bid-avatar">
                          <div className="thumb"><img src="assets/img/others/heighest_avatar05.png" alt="" /></div>
                          <div className="content">
                            <h5 className="title"><a href="/#">Tomas lindahl</a></h5>
                            <span>Bid listed</span>
                          </div>
                        </div>
                        <div className="bid-history-info">
                          <span>8 hours ago</span>
                          <h6 className="title">25 ETH</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="bid-history-item">
                        <div className="highest-bid-avatar">
                          <div className="thumb"><img src="assets/img/others/heighest_avatar06.png" alt="" /></div>
                          <div className="content">
                            <h5 className="title"><a href="/#">Tomas lindahl</a></h5>
                            <span>Bid listed</span>
                          </div>
                        </div>
                        <div className="bid-history-info">
                          <span>8 hours ago</span>
                          <h6 className="title">25 ETH</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="bid-history-item">
                        <div className="highest-bid-avatar">
                          <div className="thumb"><img src="assets/img/others/heighest_avatar.png" alt="" /></div>
                          <div className="content">
                            <h5 className="title"><a href="/#">Tomas lindahl</a></h5>
                            <span>Bid listed</span>
                          </div>
                        </div>
                        <div className="bid-history-info">
                          <span>8 hours ago</span>
                          <h6 className="title">25 ETH</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    

  )
}

export default SingleMarket