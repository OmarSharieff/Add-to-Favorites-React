import React from 'react'

const Navbar = ({data}) => {
  return (
    <div className='w-full py-8 px-20 flex justify-between items-center'>
      <h1 className='text-5xl font-bold'>Orange</h1>
      <div className="flex py-3 px-5 bg-white gap-3 text-xl font-semibold rounded-full items-center">
        <h3>Favorites</h3>
        <div className='flex justify-center items-center rounded-full w-7 h-7 bg-orange-500 text-white text-lg font-semibold'>
          <h4>{(data.filter(items=>items.added).length)}</h4>
        </div>
      </div>
    </div>
  )
}

export default Navbar
