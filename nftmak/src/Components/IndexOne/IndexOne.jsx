import React from 'react'
import AreaBg from './AreaBg'
import Banner from './Banner'
import DesignNews from './DesignNews'
import ExploreProduct from './ExploreProduct'
import LatestNews from './LatestNews'
import Testimonial from './Testimonial'
import TopCollection from './TopCollection'


const IndexOne = () => {
  return (
    <main>
        <Banner/>
        <TopCollection/>
        <AreaBg/>
        <ExploreProduct/>
        <LatestNews/>
        <DesignNews/>
        <Testimonial/>
    </main>
  )
}

export default IndexOne