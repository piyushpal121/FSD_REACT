import React from 'react'

function Home() {
  return (
    <nav>
    <div className='bg-zinc-800'>
      <div className='flex text-white items-center gap-8 p-4'>
        <div id="logo" className='text-2xl font-bold  tracking-widest '>Logo</div>
        {/* <ul className='flex gap-4 text-lg'>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/registration">Registration</Link></li>
        </ul> */}
      </div>
    </div>
    </nav>
  )
}

export default Home