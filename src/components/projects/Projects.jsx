import girl from "../../assets/imgs/girl.jpg"
import girl2 from "../../assets/imgs/girl2.jpg"
import man from "../../assets/imgs/man.jpg"
import man2 from "../../assets/imgs/man2.jpg"

import TeamMembers from "../dashboard/TeamMembers"

import ProgressBar from "@ramonak/react-progress-bar";

import Divider from "../utilitis/Divider"

const projects = [
    {
        title: "El-Zero Dashboard",
        releaseDate: "15/10/2021",
        subTitle: "El-Zero Dashboard design & progranmming & hosting",
        contributers: [girl, girl2, man, man2],
        usedSkills: ["Programming", "Design", "Hosting", "Marketing"],
        progress: {
            percent: 50,
            bgColor: "#F44336"
        },
        price: "2500"
    }
]

const Projects = () => {
    return (
        <section className='lg:col-span-10 col-span-11 profile'>
            <h1 className='title'>Projects</h1>
            <main className='grid grid-cols-12 gap-2'>
                {
                    projects.map((project, index) =>
                        <article key={index} className='flex flex-col gap-4 py-4 px-2'>
                            <header className="flex flex-row justify-between items-center">
                                <div>
                                    <h3 className='font-bold '>{project.title}</h3>
                                    <h6 className='text-text-gray text-2xs'>{project.subTitle}</h6>
                                </div>
                                <span className='text-text-gray text-2xs'>{project.releaseDate}</span>
                            </header>
                            <div className='flex flex-row justify-between items-center'>
                                <TeamMembers members={project.contributers} />
                            </div>
                            <Divider />
                            <div className="flex flex-row justify-end gap-0 my-1">
                                {
                                    project.usedSkills.map((skill, index) => <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium mr-1 px-2.5 py-0.5 rounded ">{skill}</span>)
                                }
                            </div>
                            <Divider />
                            <div className="flex flex-row justify-between items-center">
                                <ProgressBar className="inline-block w-[70%]" isLabelVisible={false} completed={project.progress.percent} maxCompleted={100} baseBgColor={"#ECECEC"} bgColor={`${project.progress.bgColor}`} height="7px" labelAlignment="right" labelSize="10px" labelColor="#fff" />
                                <span className="text-text-gray text-2xs">{`$ ${project.price}`}</span>
                            </div>
                        </article>
                    )
                }
            </main>
        </section>
    )
}

export default Projects