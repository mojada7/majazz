'use client'

import { useRouter } from 'next/navigation'
function BackButton() {
    const router = useRouter()
  return (
    <button className='w-full h-fulls' type="button" onClick={() => router.back()}>
      Back
    </button>
  )
}

export default BackButton