import React from 'react'
import CenterFlex from '../wraper/centerFlex'
import ShortcutIcon from '../shortcutIcon'

function ShortcutContainer() {
  return (
    <div className='w-[95%] md:w-[85%] lg:w-[75%] border-b-2 border-gray'>
      <div className='flex justify-between'>
          <ShortcutIcon>ثبت آگهی</ShortcutIcon>
          <ShortcutIcon>بازار اصلی</ShortcutIcon>
          <ShortcutIcon>بگرد دنبالش</ShortcutIcon>
          <ShortcutIcon>درباره ی اینجا</ShortcutIcon>
      </div>
    </div>

  )
}

export default ShortcutContainer