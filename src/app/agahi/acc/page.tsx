import FullScreenMain from '@/components/wraper/fullScreenMain'
import React from 'react'

function Acc() {
  return (
    <div className='w-[100vw] h-[100vh] overflow-hidden flex flex-col lg:flex-row'>

            <div className='w-full h-[60%] lg:w-[70%] lg:h-[90%]'>
                <div className='w-full h-[40%]'>
                    <div className='flex'>
                        <div className='bg-stone-100 h-[10vh] w-[10vh] ms-4 mt-3 rounded-full border-[1px] border-blacks'>

                        </div>
                        <div className='px-2 py-2 mt-[10%] lg:mt-6 ms-4'>
                            <div>
                            محمد داودی
                            </div>
                            <div className='text-[6px] lg:text-[8px] mt-1'>
                            KUpRKfFLfRYC9AIKjbJTWit+CqvjWYzvQwECAwEAAQJAIJLixBy2qpFoS4DSmoEm
                            </div>

                        </div>

                    </div>
                </div>
                <div className='w-full h-[60%]'>
                    <div className='w-[98%] h-[98%] bg-gray-100 dark:bg-black rounded-xl mx-auto'>

                    </div>
                </div>
            </div>
            <div className='w-[full] h-[29%] mt-[1%] lg:w-[30%] lg:h-[90%] flex justify-center gap-1'>

                    <div className='w-[48%] rounded-lg text-center pt-20 h-full bg-gray-100 dark:bg-black'>transactions</div>
                    <div className='w-[48%] rounded-lg text-center pt-20 h-full bg-gray-100 dark:bg-black'>totalCoins</div>


            </div>
            <div className='w-[100%] mt-[1%] h-[10%] bg-gray-100 dark:bg-black'>

            </div>

    </div>
  )
}

export default Acc