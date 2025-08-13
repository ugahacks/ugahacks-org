import React from 'react'

const Team = () => {
    return (
        <div className="min-h-screen p-2 bg-[#27282f] flex flex-col items-center pt-30">
            <h1 className='text-4xl text-white font-raleway'>Meet The Team!<span className="cursor-blink text-[#aaa] -ml-1 -mt-2 inline-block">|</span></h1>
            <div className="w-full max-w-7xl px-6">
                <div className="flex gap-8 mt-20 ml-60">
                    <h2 className='text-base text-gray-400 font-raleway'>UGAHacks 11</h2>
                    <h2 className='text-base text-gray-400 font-raleway'>UGAHacksX</h2>
                    <h2 className='text-base text-gray-400 font-raleway'>UGAHacks 9</h2>
                    <h2 className='text-base text-gray-400 font-raleway'>UGAHacks 8</h2>
                    <h2 className='text-base text-gray-400 font-raleway'>UGAHacks 7</h2>
                    <h2 className='text-base text-gray-400 font-raleway'>UGAHacks 5</h2>
                </div>
                <div className="flex gap-8 ml-60 mt-4">
                    <h2 className='text-base text-gray-400 font-raleway'>UGAHacks 4</h2>
                    <h2 className='text-base text-gray-400 ml-2 font-raleway'>UGAHacks 3</h2>
                    <h2 className='text-base text-gray-400 -ml-1 font-raleway'>UGAHacks 2</h2>
                    <h2 className='text-base text-gray-400 font-raleway'>UGAHacks 1</h2>
                </div>
            </div>
        </div>
    )
}

export default Team