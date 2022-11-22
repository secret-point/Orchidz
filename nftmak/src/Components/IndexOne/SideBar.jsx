import React from 'react'

const SideBar = () => {
  return (
    <div className="sidebar">
    <div className="sidebar-logo mb-25">
      <a href="/#"><img src="assets/img/logo/logo.png" alt="" /></a>
    </div>
    <div className="sidebar-icon">
      <ul>
        <li className="active"><a href="/#"><i className="fi-sr-apps-delete" /></a></li>
        <li><a href="/nft-live-bidding"><i className="fi-sr-book-alt" /></a></li>
        <li><a href="/collections"><i className="fi-sr-butterfly" /></a></li>
        <li><a href="/create-item"><i className="fi-sr-camping" /></a></li>
        <li><a href="/category"><i className="fi-sr-crown" /></a></li>
        <li><a href="/author-profile"><i className="fi-sr-settings" /></a></li>
        <li><a href="/#" id="btnFullscreen"><i className="fi-sr-tool-marquee" /></a></li>
      </ul>
    </div>
  </div>
  )
}

export default SideBar
