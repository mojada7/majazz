import CologoContainer from '@/components/coLogoContainer'
import Logo from '@/components/firstPageLogo'
import SearchCity from '@/components/searchCity'
import ShortcutContainer from '@/components/shortcutContainer'
import Slogan from '@/components/slogan'
import CenterFlexCol from '@/components/wraper/centerFlexCol'
import FullScreenMain from '@/components/wraper/fullScreenMain'
import React from 'react'

function Agahi() {
  return (
    <FullScreenMain>
      <CenterFlexCol>
        <Logo/>
        <ShortcutContainer/>
        <Slogan/>
        <SearchCity/>
        <CologoContainer/>
      </CenterFlexCol>
    </FullScreenMain>
  )
}

export default Agahi