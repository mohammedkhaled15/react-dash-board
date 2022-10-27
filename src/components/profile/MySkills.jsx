import Divider from "../utilitis/Divider"

const skills = [
    { prop1: "HTML", prop2: "Pugjs", prop3: "HAML" },
    { prop1: "CSS", prop2: "SASS", prop3: "STYLUS" },
    { prop1: "JavaScript", prop2: "TypeScript" },
    { prop1: "ReactJs", prop2: "VueJS" },
    { prop1: "Jest", prop2: "Jasmine" },
    { prop1: "PHP", prop2: "Laravel" },
    { prop1: "Python", prop2: "Django" }
]
const MySkills = () => {
    return (
        <article className='flex flex-row flex-wrap  py-4 px-2 justify-start col-span-12 md:col-span-4'>
            <header>
                <h3 className='font-bold '>My Skills</h3>
                <h6 className="text-text-gray text-xs">Complete Skill List</h6>
            </header>
            <main className="w-[100%] md:w-[75%] flex flex-col gap-1 mt-4">
                {
                    skills.map((skillType, index) =>
                        <div key={index}>
                            {
                                Object.entries(skillType).map((skill, index) =>
                                    <span key={index} className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">{skill[1]}</span>
                                )
                            }
                            <Divider array={skills} index={index} />
                        </div>
                    )
                }
            </main>
        </article>
    )
}

export default MySkills