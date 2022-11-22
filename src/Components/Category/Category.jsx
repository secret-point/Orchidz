import React from 'react'

const Category = () => {
  return (
    
    <div className="category-area">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <ul className="category-list">
            <li className="active"><a href="/index"><img src="assets/img/icons/cat_001.png" alt="" /> All</a></li>
            <li><a href="/nft-marketplace"><img src="assets/img/icons/cat_01.png" alt="" /> Games</a></li>
            <li><a href="/nft-marketplace"><img src="assets/img/icons/cat_02.png" alt="" /> Art</a></li>
            <li><a href="/nft-marketplace"><img src="assets/img/icons/cat_03.png" alt="" /> Trading Cards</a></li>
            <li><a href="/nft-marketplace"><img src="assets/img/icons/cat_04.png" alt="" /> Music</a></li>
            <li><a href="/nft-marketplace"><img src="assets/img/icons/cat_05.png" alt="" /> Domain Names</a></li>
            <li><a href="/nft-marketplace"><img src="assets/img/icons/cat_06.png" alt="" /> Memes</a></li>
            <li><a href="/nft-marketplace"><img src="assets/img/icons/cat_07.png" alt="" /> Collectibles</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Category