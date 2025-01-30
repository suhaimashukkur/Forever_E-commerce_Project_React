import React from 'react'
import HomeBanner from '../Components/HomeBanner/HomeBanner';
import FeaturedCollections from '../Components/FeaturedCollections/FeaturedCollections';
import ThreeIcons from '../Components/ThreeIcons/ThreeIcons';
import EmailLabel from '../Components/EmailLabel/EmailLabel';
import Product from './Product';
import Delivery from './Delivery';
import MyOrders from './MyOrders';

function Home() {
  return (
    <>
    <HomeBanner />
       <FeaturedCollections title1="LATEST" title2="COLLECTIONS" />
       <FeaturedCollections title1="BEST" title2="SELLER" limit={5} />
       <ThreeIcons />
       <EmailLabel />
      
      
      
       </>
  )
}

export default Home