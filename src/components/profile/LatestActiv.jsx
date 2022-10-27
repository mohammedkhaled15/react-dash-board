import Divider from "../utilitis/Divider"
import { FaStore } from "react-icons/fa"
import { GiGraduateCap } from "react-icons/gi"
import { BsPatchCheckFill } from "react-icons/bs"

const latestActiv = [
    {
        icon: FaStore,
        iconBgColor: "bg-[#E45271]",
        title: "Store",
        desc: "Bought the mastering python course",
        time: "18:10",
        date: "yesterday"
    },
    {
        icon: GiGraduateCap,
        iconBgColor: "bg-[#BB1526]",
        title: "Academy",
        desc: "Got the PHP Certificate",
        time: "16:05",
        date: "yesterday"
    },
    {
        icon: BsPatchCheckFill,
        iconBgColor: "bg-[#1A92E4]",
        title: "Badges",
        desc: "Unlock the 10 skil Badges",
        time: "17:05",
        date: "yesterday"
    },
    {
        icon: FaStore,
        iconBgColor: "bg-[#E45271]",
        title: "Store",
        desc: "Bought the Typescript course",
        time: "11:10",
        date: "yesterday"
    },
]


const LatestActiv = () => {
    return (
        <article className='flex flex-col gap-4 py-4 px-2 justify-start col-span-12 md:col-span-8'>
            <header>
                <h3 className='font-bold '>Latest Activities</h3>
                <h6 className="text-text-gray text-xs">Complete Skill List</h6>
            </header>
            <main className="flex flex-col gap-2 mt-4">
                {
                    latestActiv.map((activity, index) =>
                        <div key={index}>
                            <div className="flex flex-row justify-between p-1">
                                <aside className="flex flex-row flex-wrap gap-2 items-start">
                                    <div className="overflow-hidden self-center">
                                        <activity.icon className={`${activity.iconBgColor} rounded-full text-[3rem] p-2 text-white w-ful h-full`} />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="font-bold text-sm">{activity.title}</h2>
                                        <h4 className="text-text-gray text-xs">{activity.desc}</h4>
                                    </div>
                                </aside>
                                <aside>
                                    <h2 className="font-bold text-sm">{activity.time}</h2>
                                    <h4 className="text-text-gray text-xs">{activity.date}</h4>
                                </aside>
                            </div>
                            <Divider array={latestActiv} index={index} />
                        </div>
                    )
                }
            </main>
        </article>
    )
}

export default LatestActiv