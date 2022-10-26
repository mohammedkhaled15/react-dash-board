import Divider from "../utilitis/Divider"

const latestActiv = [
    {
        title: "Record one new video",
        subtitle: "Record Python create exe project",
        cancelled: false,
    },
    {
        title: "Write article",
        subtitle: "write low level vs high level language",
        cancelled: false,
    },
    {
        title: "finish project",
        subtitle: "publish academy programming project",
        cancelled: false,
    },
    {
        title: "Attend meeting",
        subtitle: "Attend the projectbuisness analysis meeting",
        cancelled: true,
    },
    {
        title: "finish lesson",
        subtitle: "finish teaching flex box",
        cancelled: false,
    },
]


const LatestActiv = () => {
    return (
        <article className='flex flex-col gap-4 py-4 px-2 justify-start col-span-8'>
            <header>
                <h3 className='font-bold '>Latest Activities</h3>
                <h6 className="text-text-gray text-xs">Complete Skill List</h6>
            </header>
            <main className="flex flex-col gap-2 mt-4">

            </main>
        </article>
    )
}

export default LatestActiv