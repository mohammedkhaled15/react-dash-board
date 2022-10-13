import profile from "../../assets/imgs/profile.jpg"
import { AiOutlineHeart } from "react-icons/ai"
import { FaRegComments } from "react-icons/fa"
const LatestPost = () => {
    return (
        <article className='flex flex-col gap-4 py-4 px-2 justify-start'>
            <header className="flex flex-col gap-2">
                <h3 className='font-bold '>Latest Post</h3>
                <div className="flex flex-row gap-2 items-center">
                    <div className="w-[15%] overflow-hidden">
                        <img src={profile} alt="profile img" className="rounded-full" />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold">Osama Elzero</h3>
                        <h6 className="text-xs text-text-gray">About 3 hours ago</h6>
                    </div>
                </div>
                <span className={`w-[100%] bg-shadow-gray h-[2px]`}></span>
            </header>
            <section className="uppercase font-semibold text-justify text-[0.75rem] ">
                you can foolall of the people some of the time, and some of the people all of the time, but you can't fool the all of the people all the time.
            </section>
            <span className={`w-[100%] bg-shadow-gray h-[2px]`}></span>
            <div className="flex flex-row justify-between text-text-gray">
                <span className="flex flex-row items-center gap-1 text-sm">1.8k <AiOutlineHeart size={18} /></span>
                <span className="flex flex-row items-center gap-1 text-sm">500 <FaRegComments size={18} /></span>
            </div>
        </article>
    )
}

export default LatestPost