import React from 'react'
import Category from '../Category/Category'
import WeekFeatures from '../IndexOne/WeekFeatures'
import Banner from './Banner'

import ArtWorks from './ArtWorks'


const NftMarket = () => {
  return (
    <main>
        <Banner title="NFT Marketplace"/>
        <Category/>
        <ArtWorks/>
        <WeekFeatures/>
    </main>
  )
}

export default NftMarket