import React from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import { AiOutlineBell } from "react-icons/ai"
import profile from "./../../assets/imgs/profile.jpg"

const Header = () => {
    return (
        <header className='col-span-10 row-span-1 bg-white h-fit p-4 flex justify-between'>
            <div className="search relative">
                <AiOutlineSearch size={17} className=' absolute text-text-gray top-[50%] left-1 -translate-y-1/2 cursor-pointer' />
                <input type="text" placeholder='Type a Keyword' className='pl-6 py-1 w-[100%] text-md border text-text-gray border-text-gray rounded-lg focus:outline-none' />
            </div>
            <div className="notif-profile flex gap-4 items-center">
                <span className='cursor-pointer'><AiOutlineBell size={20} /></span>
                <img src={profile} alt="profile" className='w-[40px] rounded-full cursor-pointer' />
            </div>
        </header>
    )
}

export default Header