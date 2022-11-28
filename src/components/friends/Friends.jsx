import React from 'react'
import img from "../../assets/imgs/profile.jpg"
import Divider from "../utilitis/Divider"
import { BsFillTelephoneFill } from "react-icons/bs"
import { BsEnvelope } from "react-icons/bs"
import { BiSmile } from "react-icons/bi"
import { MdLink } from "react-icons/md"
import { MdFeed } from "react-icons/md"

const friends = Array(10).fill(
  {
    name: "Ahmed Nasser",
    title: "JavaScript Developer",
    img: img,
    noOfFriends: 99,
    noOfProjects: 15,
    noOfArticles: 25,
    dateJoined: "02/10/2021"
  }, 0)


const Friends = () => {
  return (
    <section className='lg:col-span-10 col-span-11'>
      <h1 className='title'>Friends</h1>
      <main className='grid grid-cols-12 gap-2'>
        {
          friends.map((friend, index) =>
            <article key={index} className='relative flex flex-col gap-2 col-span-12 md:col-span-4 lg:col-span-3 p-2'>
              <span className='absolute left-2 bg-[#eee] rounded-full p-1'><BsFillTelephoneFill /></span>
              <span className='absolute left-10 bg-[#eee] rounded-full p-1'><BsEnvelope /></span>
              <div className="w-[30%] mt-8 mx-auto rounded-full  overflow-hidden">
                <img src={friend.img} className="w-full object-center object-cover" alt="bg" />
              </div>
              <div className="px-2 mx-auto">
                <h2 className="font-bold">{friend.name}</h2>
                <h6 className='text-text-gray text-2xs text-justify'>{friend.title}</h6>
              </div>
              <Divider />
              <div className='py-2'>
                <span className='flex flex-row gap-2 items-center font-bold'><BiSmile size={20} />{friend.noOfFriends} Friends</span>
                <span className='flex flex-row gap-2 items-center font-bold'><MdLink size={20} />{friend.noOfProjects} Projects</span>
                <span className='flex flex-row gap-2 items-center font-bold'><MdFeed size={20} />{friend.noOfArticles} Articles</span>
              </div>
              <Divider />
              <div className='flex flex-row gap-1 items-center justify-center'>
                <span className='text-text-gray text-xs'>Joined {friend.dateJoined}</span>
                <button className='btn btn-xs btn- btn-primary bg-[#0477FF] border-none'>Profile</button>
                <button className='btn btn-xs btn-error'>Remove</button>
              </div>
            </article>
          )
        }
      </main>
    </section>
  )
}

export default Friends