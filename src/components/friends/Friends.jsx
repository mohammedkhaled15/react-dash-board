import React from 'react'
import img from "../../assets/imgs/profile.jpg"
import Divider from "../utilitis/Divider"
import { BsFillTelephoneFill } from "react-icons/bs"

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
      <main className='grid grid-cols-10 gap-2'>
        {
          friends.map((friend, index) =>
            <article key={index} className='relative flex flex-col gap-2 col-span-10 md:col-span-5 lg:col-span-2 p-2'>
              <span><img src={BsFillTelephoneFill} alt="tele" /></span>
              <span><img src={BsFillTelephoneFill} alt="tele" /></span>
              <div className="w-[30%] rounded-full  overflow-hidden">
                <img src={friend.img} className="w-full object-center object-cover" alt="bg" />
              </div>
              <div className="px-2">
                <h2 className="font-bold">{friend.name}</h2>
                <h6 className='text-text-gray text-2xs text-justify'>{friend.title}</h6>
              </div>
              <Divider />

            </article>
          )
        }
      </main>
    </section>
  )
}

export default Friends