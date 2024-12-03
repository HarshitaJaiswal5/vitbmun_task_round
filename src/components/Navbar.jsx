import React from 'react'

const Navbar = () => {
    return (
        <div className='h-14 bg-[#16c5d7] flex justify-around items-center  '>
            <img src="./public/vitb_mun_logo.jpg" alt="" className='rounded-full h-12 w-12' />
            <h2 className='text-white font-semibold text-2xl'>VITB MUN</h2>
            <div className='text-white font-semibold text-md flex'>
                <ul className='flex gap-3'>
                    <li><a href="Home">Home</a></li>
                    <li><a href="About">About</a></li>
                    <li><a href="Contact">Contact</a></li>
                </ul>
            </div>

         
        </div>
    )
}

export default Navbar