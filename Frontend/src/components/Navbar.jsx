// import React from 'react'

function Navbar() {
  return (
    <>
      <nav>
        <div className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
          <div className="pl-8 justify-between">
            <a href="/" className="text-2xl p-4">ApniDukaan</a>
            
          </div>  
          <div className="space-x-4">
          <a href="/categories" className="text-xl p-4">Categories</a>
            <a href="/trending" className="text-xl p-4">Trending</a>
            <a href="/deals" className="text-xl p-4">Deals</a>
            <input className="pl-4 border border-gray rounded-lg" type="text" placeholder="Search Product" />
          </div>
          <div className="pr-8">
            <a href="/login" className="p-4">Login</a>
            <a href="/signup" className="p-4">Signup</a>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar