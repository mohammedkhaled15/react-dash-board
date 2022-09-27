import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-[#fff] col-span-2 p-4 shadow-lg shadow-slate-500 h-screen'>
            <h1 className='text-center font-bold'>Mohammed Khaled</h1>
            <div className='divider my-2 mx-auto w-[80%] h-[2px] bg-black text-center relative after:content-[""] after:absolute after:h-4 after:w-4 after:rounded-full after:left-[50%] after:top-[50%] after:-translate-x-1/2 after:-translate-y-1/2 after:tra after:bg-black'></div>
        </nav>
    )
}

export default Navbar