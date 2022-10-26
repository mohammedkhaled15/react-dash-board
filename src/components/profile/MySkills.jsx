import Divider from "../utilitis/Divider"

const skills = [
    ["HTML", "Pugjs", "HAML"],
    ["CSS", "SASS", "STYLUS"],
    ["JavaScript", "TypeScript"],
    ["ReactJs", "VueJS"],
    ["Jest", "Jasmine"],
    ["PHP", "Laravel"],
    ["Python", "Django"]

]
const MySkills = () => {
    return (
        <article className='flex flex-row flex-wrap  py-4 px-2 justify-start col-span-4'>
            <header>
                <h3 className='font-bold '>My Skills</h3>
                <h6 className="text-text-gray text-xs">Complete Skill List</h6>
            </header>
            <main className="w-[100%] md:w-[75%] flex flex-col gap-1 mt-4">
                {
                    skills.map((skillType, index) =>
                        <div key={index}>
                            {
                                skillType.map((skill, index) =>
                                    <span className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{skill}</span>
                                )
                            }
                            <Divider index={index} array={skills} />
                        </div>
                    )
                }
            </main>
        </article>
    )
}

export default MySkills