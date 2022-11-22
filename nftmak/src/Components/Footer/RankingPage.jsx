import React from 'react'

const RankingPage = () => {
  return (
    <div className="activity-area">
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-4 order-2 order-lg-0">
          <aside className="activity-sidebar">
            <ul className="activity-sidebar-list">
              <li>
                <a href="/nft-marketplace">
                  <div className="icon"><i className="fi-sr-bug" /></div>
                  <p>Domain Names <span>find your website name</span></p>
                </a>
              </li>
              <li>
                <a href="/nft-marketplace">
                  <div className="icon"><i className="fi-sr-crown" /></div>
                  <p>Collectibles</p>
                </a>
              </li>
              <li>
                <a href="/nft-marketplace">
                  <div className="icon"><i className="fi-sr-mode-landscape" /></div>
                  <p>Photography</p>
                </a>
              </li>
              <li>
                <a href="/nft-marketplace">
                  <div className="icon"><i className="fi-sr-snowflake" /></div>
                  <p>Virtual Worlds</p>
                </a>
              </li>
              <li>
                <a href="/nft-marketplace">
                  <div className="icon"><i className="fi-sr-tennis" /></div>
                  <p>Sports</p>
                </a>
              </li>
              <li>
                <a href="/nft-marketplace">
                  <div className="icon"><i className="fi-sr-vector" /></div>
                  <p>Trading Cards</p>
                </a>
              </li>
            </ul>
          </aside>
        </div>
        <div className="col-xl-9 col-lg-8">
          <div className="welcome-activity">
            <div className="welcome-activity-img welcome-img-two">
              <img src="assets/img/others/welcome_img02.png" alt="" />
            </div>
            <div className="welcome-activity-content">
              <h3 className="title">welcome to Rankings</h3>
              <p>The top NFTs, ranked by volume, floor price and other <a href="/login-register">statistics.</a></p>
            </div>
          </div>
          <div className="activity-table-wrap">
            <div className="activity-table-nav">
              <h4 className="title">All Collection</h4>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="nft-tab" data-bs-toggle="tab" data-bs-target="#nft" type="button" role="tab" aria-controls="nft" aria-selected="true">All NFT</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="month-tab" data-bs-toggle="tab" data-bs-target="#month" type="button" role="tab" aria-controls="month" aria-selected="false">Last Month</button>
                </li>
              </ul>
            </div>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="nft" role="tabpanel" aria-labelledby="nft-tab">
                <div className="activity-table-responsive">
                  <table className="table activity-table">
                    <thead>
                      <tr>
                        <th scope="col">Collection</th>
                        <th scope="col">Volume</th>
                        <th scope="col">24h %</th>
                        <th scope="col">7d %</th>
                        <th scope="col">Floor Price</th>
                        <th scope="col">Owners</th>
                        <th scope="col" className="time">Assets</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" className="author">
                          <img src="assets/img/others/activity_author.png" alt="" /> <a href="/nft-marketplace">Art collection</a>
                        </th>
                        <td className="price">13,5624</td>
                        <td>+5486%</td>
                        <td>-965%</td>
                        <td>10,2356 ETH</td>
                        <td>4.3k</td>
                        <td>45k</td>
                      </tr>
                      <tr>
                        <th scope="row" className="author">
                          <img src="assets/img/others/activity_author02.png" alt="" /> <a href="/nft-marketplace">Leo collection</a>
                        </th>
                        <td className="price">15,5624</td>
                        <td>+5486%</td>
                        <td>-965%</td>
                        <td>10,2356 ETH</td>
                        <td>4.3k</td>
                        <td>85k</td>
                      </tr>
                      <tr>
                        <th scope="row" className="author">
                          <img src="assets/img/others/activity_author03.png" alt="" /> <a href="/nft-marketplace">Mar collection</a>
                        </th>
                        <td className="price">19,5624</td>
                        <td>+5486%</td>
                        <td>-965%</td>
                        <td>10,2356 ETH</td>
                        <td>4.3k</td>
                        <td>15k</td>
                      </tr>
                      <tr>
                        <th scope="row" className="author">
                          <img src="assets/img/others/activity_author04.png" alt="" /> <a href="/nft-marketplace">Pie collection</a>
                        </th>
                        <td className="price">16,5624</td>
                        <td>+5486%</td>
                        <td>-965%</td>
                        <td>10,2356 ETH</td>
                        <td>4.3k</td>
                        <td>13k</td>
                      </tr>
                      <tr>
                        <th scope="row" className="author">
                          <img src="assets/img/others/activity_author05.png" alt="" /> <a href="/nft-marketplace">Tun collection</a>
                        </th>
                        <td className="price">21,5624</td>
                        <td>+5486%</td>
                        <td>-965%</td>
                        <td>10,2356 ETH</td>
                        <td>4.3k</td>
                        <td>20k</td>
                      </tr>
                      <tr>
                        <th scope="row" className="author">
                          <img src="assets/img/others/activity_author06.png" alt="" /> <a href="/nft-marketplace">Kol collection</a>
                        </th>
                        <td className="price">29,5624</td>
                        <td>+5486%</td>
                        <td>-965%</td>
                        <td>10,2356 ETH</td>
                        <td>4.3k</td>
                        <td>22k</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab-pane fade" id="month" role="tabpanel" aria-labelledby="month-tab">
                <div className="activity-table-responsive">
                  <table className="table activity-table">
                    <thead>
                      <tr>
                        <th scope="col">Collection</th>
                        <th scope="col">Volume</th>
                        <th scope="col">24h %</th>
                        <th scope="col">7d %</th>
                        <th scope="col">Floor Price</th>
                        <th scope="col">Owners</th>
                        <th scope="col" className="time">Assets</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" className="author">
                          <img src="assets/img/others/activity_author06.png" alt="" /> <a href="/nft-marketplace">Art collection</a>
                        </th>
                        <td className="price">13,5624</td>
                        <td>+5486%</td>
                        <td>-965%</td>
                        <td>10,2356 ETH</td>
                        <td>4.3k</td>
                        <td>45k</td>
                      </tr>
                      <tr>
                        <th scope="row" className="author">
                          <img src="assets/img/others/activity_author05.png" alt="" /> <a href="/nft-marketplace">Leo collection</a>
                        </th>
                        <td className="price">15,5624</td>
                        <td>+5486%</td>
                        <td>-965%</td>
                        <td>10,2356 ETH</td>
                        <td>4.3k</td>
                        <td>85k</td>
                      </tr>
                      <tr>
                        <th scope="row" className="author">
                          <img src="assets/img/others/activity_author04.png" alt="" /> <a href="/nft-marketplace">Mar collection</a>
                        </th>
                        <td className="price">19,5624</td>
                        <td>+5486%</td>
                        <td>-965%</td>
                        <td>10,2356 ETH</td>
                        <td>4.3k</td>
                        <td>15k</td>
                      </tr>
                      <tr>
                        <th scope="row" className="author">
                          <img src="assets/img/others/activity_author03.png" alt="" /> <a href="/nft-marketplace">Pie collection</a>
                        </th>
                        <td className="price">16,5624</td>
                        <td>+5486%</td>
                        <td>-965%</td>
                        <td>10,2356 ETH</td>
                        <td>4.3k</td>
                        <td>13k</td>
                      </tr>
                      <tr>
                        <th scope="row" className="author">
                          <img src="assets/img/others/activity_author02.png" alt="" /> <a href="/nft-marketplace">Tun collection</a>
                        </th>
                        <td className="price">21,5624</td>
                        <td>+5486%</td>
                        <td>-965%</td>
                        <td>10,2356 ETH</td>
                        <td>4.3k</td>
                        <td>20k</td>
                      </tr>
                      <tr>
                        <th scope="row" className="author">
                          <img src="assets/img/others/activity_author.png" alt="" /> <a href="/nft-marketplace">Kol collection</a>
                        </th>
                        <td className="price">29,5624</td>
                        <td>+5486%</td>
                        <td>-965%</td>
                        <td>10,2356 ETH</td>
                        <td>4.3k</td>
                        <td>22k</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RankingPage