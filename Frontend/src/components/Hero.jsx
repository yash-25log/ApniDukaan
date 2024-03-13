// import React from 'react'
// import { Button } from 'flowbite-react';
import Button from '@mui/material/Button';


const Hero = () => {
  return (
    <div>
        <div className="items-center justify-center flex flex-col">
            <h1 className="text-6xl justify-center text-center p-20 mt-10 font-bold text-balance">
                Apni Dukaan
            </h1>
            <div className="max-w-lg  text-center">
                <h2 className="text-center -mt-9 text-2xl w-100p text- m-">
                Discover a world of endless possibilities with a wide range of products, unbeatable deals, and seamless shopping experiences
                </h2>
            </div>
            <div className='text-center m-10'>
            <Button variant="contained" className=''>Get Started</Button>
            </div>
        </div>
    </div>
  )
}

export default Hero