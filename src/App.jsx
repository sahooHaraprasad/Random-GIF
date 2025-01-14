import React from 'react'
import Random from "./components/Random"
import Tag from "./components/Tag"
const App = () => {
  return (
    <div className='w-full h-screen flex flex-col background absolute overflow-hidden items-center'>
      <h1 className='bg-white rounded-ld relative w-11/12 text-center mt-[40px]  text-4xl font-bold'>RANDON GIF'S</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App
