import { BsTwitter } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { BsYoutube } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"

const socials = [
    {
        icon: FaFacebookF,
        placeholder: "Facebook username"
    },
    {
        icon: BsTwitter,
        placeholder: "Twitter username"
    },
    {
        icon: AiFillLinkedin,
        placeholder: "Linkedin username"
    },
    {
        icon: BsYoutube,
        placeholder: "Youtube username"
    },

]

const SocialInfo = () => {
    return (
        <article className='flex flex-col gap-4 py-4 px-2 justify-start'>
            <header>
                <h3 className='font-bold '>Social Info</h3>
                <h6 className='text-text-gray text-2xs'>Social Media Information</h6>
            </header>
            <div className="flex flex-col gap-2">
                {
                    socials.map((social, index) =>
                        <div key={index} className="flex flex-row gap-0 items-center relative">
                            <span className="absolute left-2 text-text-gray top-[50%] -translate-y-[50%] after:w-[2px] after:bg-[#E5E7EB] after:h-6 after:absolute after:left-5 after:top-[50%] after:-translate-y-[50%] ">
                                <social.icon />
                            </span>
                            <input type="text" placeholder={social.placeholder} className="focus:outline-none  pl-8 p-3 text-xs border-2 border-solid h-6 w-full rounded-lg " />
                        </div>
                    )
                }
            </div>
        </article>
    )
}

export default SocialInfo