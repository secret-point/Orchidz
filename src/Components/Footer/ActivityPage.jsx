import React from 'react'
const ActivityPage = () => {
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
            <div className="welcome-activity-img">
              <img src="assets/img/others/welcome_img01.png" alt="" />
            </div>
            <div className="welcome-activity-content">
              <h3 className="title">welcome to Orchidz</h3>
              <p>The top NFTs, ranked by volume, floor price and other <a href="/login-register">statistics.</a></p>
            </div>
          </div>
          <div className="activity-table-wrap">
            <div className="activity-table-nav">
              <h4 className="title">All Activity</h4>
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
            
              <div className="tab-pane fade" id="month" role="tabpanel" aria-labelledby="month-tab">
                <div className="activity-table-responsive">
                  <table className="table activity-table">
                    <thead>
                      <tr>
                        <th scope="col">Item Details</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">From</th>
                        <th scope="col">To</th>
                        <th scope="col" className="time">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" className="author">
                          <img src="assets/img/others/activity_author06.png" alt="" /> <a href="/author-profile">Art collection</a>
                        </th>
                        <td className="price"><img src="assets/img/icons/coin.svg" alt="" /> 0.025</td>
                        <td>17</td>
                        <td>Meta</td>
                        <td>A22F7</td>
                        <td>a minute ago</td>
                      </tr>
                      <tr>
                        <th scope="row" className="author">
                          <img src="assets/img/others/activity_author05.png" alt="" /> <a href="/author-profile">Pie collection</a>
                        </th>
                        <td className="price"><img src="assets/img/icons/coin.svg" alt="" /> 0.055</td>
                        <td>24</td>
                        <td>Meta</td>
                        <td>A22F7</td>
                        <td>2 minute ago</td>
                      </tr>
                      <tr>
                        <th scope="row" className="author">
                          <img src="assets/img/others/activity_author04.png" alt="" /> <a href="/author-profile">Con collection</a>
                        </th>
                        <td className="price"><img src="assets/img/icons/coin.svg" alt="" /> 0.075</td>
                        <td>22</td>
                        <td>Meta</td>
                        <td>A22F7</td>
                        <td>3 minute ago</td>
                      </tr>
                      <tr>
                        <th scope="row" className="author">
                          <img src="assets/img/others/activity_author03.png" alt="" /> <a href="/author-profile">Tun collection</a>
                        </th>
                        <td className="price"><img src="assets/img/icons/coin.svg" alt="" /> 0.025</td>
                        <td>18</td>
                        <td>Meta</td>
                        <td>A22F7</td>
                        <td>4 minute ago</td>
                      </tr>
                      <tr>
                        <th scope="row" className="author">
                          <img src="assets/img/others/activity_author02.png" alt="" /> <a href="/author-profile">Art collection</a>
                        </th>
                        <td className="price"><img src="assets/img/icons/coin.svg" alt="" /> 0.095</td>
                        <td>16</td>
                        <td>Meta</td>
                        <td>A22F7</td>
                        <td>5 minute ago</td>
                      </tr>
                      <tr>
                        <th scope="row" className="author">
                          <img src="assets/img/others/activity_author.png" alt="" /> <a href="/author-profile">Art collection</a>
                        </th>
                        <td className="price"><img src="assets/img/icons/coin.svg" alt="" /> 0.115</td>
                        <td>20</td>
                        <td>Meta</td>
                        <td>A22F7</td>
                        <td>6 minute ago</td>
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

export default ActivityPage