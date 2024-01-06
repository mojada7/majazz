import FullScreenMain from '@/components/wraper/fullScreenMain'
import DomTester from '@/components/domTester'
import React from 'react'

function Acc() {
  return (
    <div className='w-[100vw] h-[100vh] overflow-hidden'>
        <div className='w-[100%] h-[90%] lg:h-[85%] overflow-hidden flex flex-col lg:flex-row'>

            <div className='w-full h-[60%] lg:w-[70%] lg:h-[100%]'>
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
                    <div className='w-[99%] h-[99%] bg-gray-100 dark:bg-black rounded-xl mx-auto'>

                    </div>
                </div>
            </div>
            <div className='w-[full] h-[39%] mt-[1%] lg:mt-[6%] lg:w-[30%] lg:h-[100%] flex justify-start'>

                    <div className='w-[49.5%] me-[1%] rounded-lg text-center pt-20 h-full bg-gray-100 dark:bg-black'>transactions</div>
                    <div className='w-[49.5%] rounded-lg text-center pt-20 h-full bg-gray-100 dark:bg-black'>totalCoins</div>


            </div>

        </div>
        <div className='w-[100%] h-[10%] lg:h-[15%] bg-gray-100 dark:bg-black'>
            <DomTester />
        </div>

    </div>

  )
}

export default Acc