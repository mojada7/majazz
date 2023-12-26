import React from 'react'
import CenterFlex from '../wraper/centerFlex'
import CenterFlexCol from '../wraper/centerFlexCol'
import pic1 from '../../../public/icon/metavers.png'
import pic2 from '../../../public/icon/block.png'
import pic3 from '../../../public/icon/vote.png'
import Image from 'next/image'

function CologoContainer() {
  return (
    <div className='w-[60%] md:w-[40%] lg:w-[20%] pt-4 opacity-70'>
        <CenterFlex>
            <CenterFlexCol>
                <Image className='lg:scale-100 md:scale-90 scale-75' src={pic1} alt='' width={40}/>
                <div className='md:mt-3 lg:mt-1 text-[9px] md:text-xs'>metavers</div>
            </CenterFlexCol>
            <CenterFlexCol>
                <Image className='lg:scale-100 md:scale-90 scale-75' src={pic2} alt='' width={40}/>
                <div className='md:mt-3 lg:mt-1 text-[9px] md:text-xs'>blockchain</div>
            </CenterFlexCol>
            <CenterFlexCol>
                <Image className='lg:scale-100 md:scale-90 scale-75' src={pic3} alt='' width={40}/>
                <div className='md:mt-3 lg:mt-1 text-[9px] md:text-xs'>electral</div>
            </CenterFlexCol>
        </CenterFlex>
    </div>

  )
}

export default CologoContainer