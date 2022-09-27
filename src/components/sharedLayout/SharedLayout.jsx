import uuid from "react-uuid"
import { Link, NavLink } from "react-router-dom"
import { AiOutlineDashboard } from "react-icons/ai"
import { FiSettings } from "react-icons/fi"
import { CgProfile } from "react-icons/cg"
import { GrProjects } from "react-icons/gr"
import { FaUniversity } from "react-icons/fa"
import { FaUserFriends } from "react-icons/fa"
import { ImFilesEmpty } from "react-icons/im"
import { HiOutlineCreditCard } from "react-icons/hi"


const linksData = [
    // {
    //     name: "Dashboard",
    //     icon: AiOutlineDashboard
    // },
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

const SharedLayout = () => {
    return (
        <nav className='bg-[#fff] col-span-3 p-4 shadow-lg shadow-slate-500 min-h-screen'>
            <header className="mb mb-16">
                <h1 className='text-center font-bold'>Mohammed Khaled</h1>
                <div className='divider'></div>
            </header>

            <main className="flex flex-col items-start">
                <>
                    <NavLink key={uuid()} className={({ isActive }) => isActive ? "active link" : "link"} to={`/`}>
                        <span className="flex items-center text-lg">{<AiOutlineDashboard />}</span>
                        <h5>Dashboard</h5>
                    </NavLink>
                    {
                        linksData.map((linkData) =>
                            <NavLink key={uuid()} className={({ isActive }) => isActive ? "active link" : "link"} to={`${linkData.name.toLocaleLowerCase()}`}>
                                <span className="flex items-center text-lg">{<linkData.icon />}</span>
                                <h5>{linkData.name}</h5>
                            </NavLink>
                        )
                    }
                </>
            </main>
        </nav>
    )
}

export default SharedLayout