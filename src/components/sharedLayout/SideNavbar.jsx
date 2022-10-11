import uuid from "react-uuid"
import { NavLink } from "react-router-dom"
import { AiOutlineDashboard } from "react-icons/ai"
import { FiSettings } from "react-icons/fi"
import { CgProfile } from "react-icons/cg"
import { GrProjects } from "react-icons/gr"
import { FaUniversity } from "react-icons/fa"
import { FaUserFriends } from "react-icons/fa"
import { ImFilesEmpty } from "react-icons/im"
import { HiOutlineCreditCard } from "react-icons/hi"
import Tooltip from "../utilitis/tooltip/Tooltip.jsx"

const linksData = [
    {
        name: "Dashboard",
        icon: AiOutlineDashboard
    },
    {
        name: "Setting",
        icon: FiSettings
    },
    {
        name: "Profile",
        icon: CgProfile
    },
    {
        name: "Projects",
        icon: GrProjects
    },
    {
        name: "Courses",
        icon: FaUniversity
    },
    {
        name: "Friends",
        icon: FaUserFriends
    },
    {
        name: "Files",
        icon: ImFilesEmpty
    },
    {
        name: "Plans",
        icon: HiOutlineCreditCard
    },
]

const SideNavbar = () => {
    return (
        <nav className='bg-white col-span-1 lg:col-span-2 row-span-6 p-1 md:p-4 shadow-lg shadow-slate-500 min-h-screen   relative '>
            <header className=" mb-16">
                <h1 className='text-center font-bold hidden lg:block'>Mohammed Khaled</h1>
                <h1 className='text-center font-bold lg:hidden text-2xl pt-4'>M</h1>
                <div className='divider'></div>
            </header>

            <main className="flex flex-col items-center lg:items-start fixed left-0 z-20 sm:left-[2%]">
                {
                    linksData.map((linkData) =>
                        <Tooltip key={uuid()} content={linkData.name} direction="right" delay={1500}>
                            <NavLink end={linkData.name === "Dashboard"} className={({ isActive }) => isActive ? "active link" : "link"} to={`${linkData.name === "Dashboard" ? "/" : linkData.name.toLocaleLowerCase()}`}>
                                <span className="flex items-center text-lg lg:mr-2">{<linkData.icon />}</span>
                                <h5 className="hidden lg:block">{linkData.name}</h5>
                            </NavLink>
                        </Tooltip>
                    )
                }
            </main>
        </nav>
    )
}

export default SideNavbar