'use client'
import React, { SyntheticEvent, useRef } from 'react'
import FaceSmile from '@heroicons/react/24/outline/FaceSmileIcon'
import SendIcon from '@heroicons/react/24/outline/PaperAirplaneIcon'



function MsgInputCard({setMsg} : any) {


  const msgCreator = (msg:string)=> {
    const meseg = {
      message : msg,
      date : `${new Date().getHours()}:${new Date().getMinutes()}`,
      sender : 0,
      state : 0

    }
    return meseg
  }




const enterAction = (e:any)=> {
  if(e.keyCode == 13) {
    sendMsg()
  }
}


  const inputRef = useRef('')
  const inputR : any = useRef(null)
  const sendMsg = ()=> {
    setMsg(msgCreator(inputRef.current))
    inputRef.current = ''
    if(inputR.current){ 
      inputR.current.value = ''
    }
  }
  const inputAction = (e:any)=>{
    e.preventDefault()
    inputRef.current = e.target.value
  }
  return (
    <>

      <FaceSmile  className='text-sky-300 dark:text-sky-400 w-8 lg:h-12 h-8 lg:w-12'/> 
      <input ref={inputR} onKeyDown={(e)=>enterAction(e)} onChange={(e)=>{inputAction(e)}} dir='rtl' placeholder='پیام ...' className='h-[80%] rounded-md outline-none px-4 grow'/>
      <SendIcon onClick={sendMsg} className='text-sky-300 dark:text-sky-400 w-8 lg:h-12 h-8 lg:w-12' /> 

    </>
  )
}

export default MsgInputCard