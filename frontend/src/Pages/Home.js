import React from 'react'
import HomeBanner from '../Components/HomeBanner/HomeBanner';
import FeaturedCollections from '../Components/FeaturedCollections/FeaturedCollections';
import ThreeIcons from '../Components/ThreeIcons/ThreeIcons';
import EmailLabel from '../Components/EmailLabel/EmailLabel';

function Home() {
  return (
    <>
    <HomeBanner />
       <FeaturedCollections type="Latest Collections-" />
       <FeaturedCollections type="Best Seller-" />
       <ThreeIcons />
       <EmailLabel />
       </>
  )
}

export default Home