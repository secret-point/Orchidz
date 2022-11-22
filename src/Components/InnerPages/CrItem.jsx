import React from 'react'

const CrItem = () => {
  return (
    <div className="create-item-area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-3 col-lg-4 col-md-6">
          <aside className="create-item-sidebar">
            <h4 className="title">Preview item</h4>
            <div className="top-collection-item mb-0">
              <div className="collection-item-top">
                <ul>
                  <li className="avatar"><a href="/author-profile" className="thumb"><img src="assets/img/others/top_col_avatar.png" alt="" /></a>By <a href="/author-profile" className="name">Jonson</a></li>
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
                <a href="/market-single"><img src="assets/img/others/top_collection06.jpg" alt="" /></a>
              </div>
              <div className="collection-item-content">
                <h5 className="title"><a href="/market-single">NFT Collection</a> <span className="price">5.4 ETH</span></h5>
              </div>
              <div className="collection-item-bottom">
                <ul>
                  <li className="bid"><a href="/market-single" className="btn">place a bid</a></li>
                  <li className="wishlist"><a href="/#">59</a></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
        <div className="col-xl-9 col-lg-8">
          <div className="method-wrap">
            <h4 className="title">Select method</h4>
            <ul className="method-list">
              <li><a href="/#" className="active"><i className="flaticon-tag" /> Fixed Price</a></li>
              <li><a href="/#"><i className="flaticon-timer" /> Time Auctions</a></li>
              <li><a href="/#"><i className="flaticon-add-user" /> Open For Bids</a></li>
            </ul>
          </div>
          <form action="#" className="create-item-form">
            <div className="form-grp">
              <label htmlFor="file">Upload file</label>
              <input id="file" type="file" />
            </div>
            <div className="form-grp">
              <label htmlFor="price">Price</label>
              <input id="price" type="text" placeholder="Enter price for one item (ETH)" />
            </div>
            <div className="form-grp">
              <label htmlFor="title">Title</label>
              <input id="title" type="text" placeholder="Enter price for one item (ETH)" />
            </div>
            <div className="form-grp">
              <label htmlFor="desc">Description</label>
              <textarea name="message" id="desc" placeholder="e.g. This is very limited item" defaultValue={""} />
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-grp">
                  <label htmlFor="royalties">Royalties</label>
                  <input id="royalties" type="text" placeholder="(10%)" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-grp">
                  <label htmlFor="size">Size</label>
                  <input id="size" type="text" placeholder="e.g. Size" />
                </div>
              </div>
            </div>
            <button type="submit" className="btn">Create Item</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CrItem