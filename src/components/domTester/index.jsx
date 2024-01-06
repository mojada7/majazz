'use client'
import React, { useEffect } from 'react'

function DomTester() {
    function getFullScreen() {
        if (document.body.requestFullscreen) {
            document.body.requestFullscreen();
        } else if (document.body.mozRequestFullScreen) { /* Firefox */
            document.body.mozRequestFullScreen();
        } else if (document.body.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            document.body.webkitRequestFullscreen();
        } else if (document.body.msRequestFullscreen) { /* IE/Edge */
            document.body.msRequestFullscreen();
        }
    }

    useEffect(()=>{
        getFullScreen()
    ,[]})
  return (
    <div className='w-full h-full bg-blue-400 text-center pt-8'>DomTester</div>
  )
}

export default DomTester