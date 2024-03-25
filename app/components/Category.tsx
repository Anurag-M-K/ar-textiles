import React from 'react'

function Category() {
  return (
        <><h2 className='text-black text-xl text-center my-10  '>See by Categories</h2><div className='grid grid-cols-2  md:grid-cols-4'>
          <div className='bg-red-400 w-full h-60'></div>
          <div className='bg-blue-400 w-full h-60'></div>
          <div className='bg-violet-400 w-full h-60'></div>
          <div className='bg-green-400 w-full h-60'></div>
      </div></>
  )
}

export default Category