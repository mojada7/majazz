import React from 'react'
import FaceSmile from '@heroicons/react/24/outline/FaceSmileIcon'
import SendIcon from '@heroicons/react/24/outline/PaperAirplaneIcon'

function MsgInputCard() {
  return (
    <>
      <div className='h-[80%] rounded-xl w-fit'>
        <FaceSmile  className='text-sky-300 dark:text-sky-300 h-12 w-12'/> 
      </div>
      <input className='h-[80%]  rounded-xl px-4 grow'/>
      <div className='h-[80%] rounded-xl w-fit'>
        <SendIcon className='text-sky-300 dark:text-sky-300 h-12 w-12' /> 
      </div>
    </>
  )
}

export default MsgInputCard