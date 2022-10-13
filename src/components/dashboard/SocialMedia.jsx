import { BsTwitter } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { BsYoutube } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"

const socialMedia = [
    {
        icon: BsTwitter,
        noOfReactions: 90000,
        subTitle: "Followers",
        button: "Follow",
        bgColor: "bg-[#1DA1F2]",
        lightbg: "bg-[#D2ECFC]",
        textColor: "text-[#1DA1F2]"
    },
    {
        icon: FaFacebookF,
        noOfReactions: 2000000,
        subTitle: "Likes",
        button: "Like",
        bgColor: "bg-[#1877F2]",
        lightbg: "bg-[#D2ECFC]",
        textColor: "text-[#1877F2]"
    },
    {
        icon: BsYoutube,
        noOfReactions: 1000000,
        subTitle: "Subscribers",
        button: "Subscribe",
        bgColor: "bg-[#FF0000]",
        lightbg: "bg-[#FFCCCC]",
        textColor: "text-[#FF0000]"
    },
    {
        icon: AiFillLinkedin,
        noOfReactions: 70000,
        subTitle: "Followers",
        button: "Follow",
        bgColor: "bg-[#1877F2]",
        lightbg: "bg-[#D2ECFC]",
        textColor: "text-[#1877F2]"
    },
]

const SocialMedia = () => {
    return (
        <article className='flex flex-col gap-4 py-4 px-2 justify-start'>
            <header>
                <h3 className='font-bold '>Social Media</h3>
            </header>
            <main className="flex flex-col gap-2 mt-4">
                {
                    socialMedia.map((item, index) =>
                        <div key={index} className="flex flex-row">
                            <span className={`${item.bgColor} w-[15%] text-white p-2 flex justify-center items-center`}><item.icon size={28} /></span>
                            <span className={`${item.lightbg} ${item.textColor} flex-1 flex flex-row justify-between items-center pl-3 py-4 font-bold`}>
                                {`${item.noOfReactions > 1000 && item.noOfReactions < 1000000 ? item.noOfReactions / 1000 + "K" : ""} ${item.noOfReactions >= 1000000 ? item.noOfReactions / 1000000 + "M" : " "} ${item.subTitle}`}
                                <span className={`text-white mr-2 py-1 px-2 text-center rounded-lg text-sm cursor-pointer ${item.bgColor}`}>{item.button}</span>
                            </span>
                        </div>
                    )
                }
            </main>
        </article>
    )
}

export default SocialMedia