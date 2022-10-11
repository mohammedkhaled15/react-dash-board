import { BsFillPersonFill } from "react-icons/bs"
import { BsCurrencyDollar } from "react-icons/bs"
import { DiCode } from "react-icons/di"

import ProgressBar from "@ramonak/react-progress-bar";

const targets = [
    {
        name: "Money",
        value: 20000,
        progress: 80,
        icon: BsCurrencyDollar,
        bgColor: "bg-[#CCE3FF]",
        color: "bg-[#0075FF]",
        progressColor: "#0075FF",
        progressbgColor: "#CCE3FF"
    },
    {
        name: "Projects",
        value: 24,
        progress: 55,
        icon: DiCode,
        bgColor: "bg-[#FDECCE]",
        color: "bg-[#F6AA29]",
        progressColor: "#F6AA29",
        progressbgColor: "#FDECCE"
    },
    {
        name: "Team",
        value: 12,
        progress: 75,
        icon: BsFillPersonFill,
        bgColor: "bg-[#D3F3DF]",
        color: "bg-[#22C55E]",
        progressColor: "#22C55E",
        progressbgColor: "#D3F3DF"
    },
]

const YearlyTargets = () => {
    return (
        <article className='flex flex-col gap-4 py-4 px-2 justify-start'>
            <header>
                <h3 className='font-bold '>Yearly Targets</h3>
                <h6 className="text-text-gray text-xs">Targets of the year</h6>
            </header>
            <main>
                {
                    targets.map((target, index) =>
                        <div key={index} className="flex flex-row gap-6 my-2">
                            <div className={` p-6 mr-2 ${target.bgColor}`}>
                                {<target.icon size={22} color={`${target.color}`} />}
                            </div>
                            <div className="data flex-1 flex flex-col gap-1 justify-center">
                                <h5 className="text-text-gray text-xs">{target.name}</h5>
                                <h3 className="font-bold">{target.name === "Money" ? `$${target.value.toLocaleString("en-US")}` : target.value}</h3>
                                <ProgressBar className="relative" completed={target.progress} maxCompleted={100} baseBgColor={`${target.progressbgColor}`} bgColor={`${target.progressColor}`} height="7px" labelAlignment="right" labelSize="10px" labelColor="#fff" width="100%" customLabelStyles={{ position: "absolute", bottom: "120%", backgroundColor: target.progressColor, padding: "3px", left: `${target.progress - 10}%`, borderRadius: "4px" }} />
                            </div>
                        </div>
                    )
                }
            </main>
        </article>
    )
}

export default YearlyTargets