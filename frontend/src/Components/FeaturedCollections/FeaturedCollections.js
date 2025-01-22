import React from 'react'

import gridimg1 from '../../assets/images/Rectangle 3608.png';
import gridimg2 from '../../assets/images/Rectangle 3609.png';
import gridimg3 from '../../assets/images/Rectangle 3611.png';
import gridimg4 from '../../assets/images/Rectangle 3613.png';
import gridimg5 from '../../assets/images/Rectangle 3615.png';
import gridimg6 from '../../assets/images/Rectangle 3616.png';
import gridimg7 from '../../assets/images/Rectangle 3617.png';
import gridimg8 from '../../assets/images/Rectangle 3619.png';
import gridimg9 from '../../assets/images/Rectangle 3634.png';
import gridimg10 from '../../assets/images/Rectangle 3635.png';

function FeaturedCollections({type}) {
    let latestCollections = [{
        image:gridimg1,
        title:"Women Round Neck Cotton Top",
        subtitle:"$149"
    },
    {
        image:gridimg2,
        title:"Women Round Neck Cotton Top",
        subtitle:"$149"
    },
    {
        image:gridimg3,
        title:"Women Round Neck Cotton Top",
        subtitle:"$149"
    },
    {
        image:gridimg4,
        title:"Women Round Neck Cotton Top",
        subtitle:"$149"
    },
    {
        image:gridimg5,
        title:"Women Round Neck Cotton Top",
        subtitle:"$149"
    },
    {
        image:gridimg6,
        title:"Women Round Neck Cotton Top",
        subtitle:"$149"
    },
    {
        image:gridimg7,
        title:"Women Round Neck Cotton Top",
        subtitle:"$149"
    },
    {
        image:gridimg8,
        title:"Women Round Neck Cotton Top",
        subtitle:"$149"
    },
    {
        image:gridimg9,
        title:"Women Round Neck Cotton Top",
        subtitle:"$149"
    },{
        image:gridimg10,
        title:"Women Round Neck Cotton Top",
        subtitle:"$149"
    }]

    const isBestSeller = type === "Best Seller";
    const displayedCollections = isBestSeller? latestCollections.slice(0,5):latestCollections
  return (
    <section>
    <div className='mt-20 ml-40 mr-40'>
        
        <div className='text-center  text-3xl font-semibold leading-10 text-[#707070] '>{type}</div>
        <div className='text-center leading-5 text-lg font-normal text-[#868686] mb-12 mt-5'>Lorem ipsum asnf drukk ldungvjf mkdjfndn mndjf mkfhgfm mgfjhgmfng nbvhf fgjgh</div>
    <div className='grid grid-cols-5 gap-7 '>
    {
        displayedCollections.map((i) =>(
            <>
            <div >
            <img className="" src={i.image} alt='grid-img' />
           
            <div className='font-medium leading-4 text-[#494949] text-xs mt-5 mb-2'>{i.title}</div>
            <div className='font-medium leading-4 text-[#494949] text-xs '>{i.subtitle}</div>
            </div>
            
            </>
            

        ))
    }
    </div>
    </div>
    </section>
  )
}



export default FeaturedCollections