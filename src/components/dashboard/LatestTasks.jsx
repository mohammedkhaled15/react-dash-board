const latestTasks = [
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


const LatestTasks = () => {
    return (
        <article className='flex flex-col gap-4 py-4 px-2 justify-start'>
            <header>
                <h3 className='font-bold '>Latest News</h3>
            </header>
            <main className="flex flex-col gap-2 mt-4">
                {
                    latestTasks.map((task, index) =>
                        <div key={index}>
                            <h2 className={` ${task.cancelled ? "hidden" : "block text-xs font-bold"}`}>{task.title}</h2>
                            <del className={` ${task.cancelled ? "block text-xs font-bold text-text-gray" : "hidden"}`}>{task.title}</del>
                            <h6 className={` ${task.cancelled ? "hidden" : "block text-text-gray text-[0.6rem]"}`}>{task.subtitle}</h6>
                            <del className={`   ${task.cancelled ? "block text-text-gray text-[0.6rem]" : "hidden"}`}>{task.subtitle}</del>
                            <span className={`${index === latestTasks.length - 1 ? "hidden" : "inline-block"} w-[100%] bg-shadow-gray h-[2px]`}></span>
                        </div>
                    )
                }
            </main>
        </article>
    )
}

export default LatestTasks