const reminders = [
    {
        title: "Check My Tasks List",
        date: "28/09/2022 - 12:00am",
        backColor: "bg-[#3369df]",
        borderColor: "border-[#3369df]"
    },
    {
        title: "Check My Projects",
        date: "26/10/2022 - 12:00am",
        backColor: "bg-[#96d6ab]",
        borderColor: "border-[#96d6ab]"
    },
    {
        title: "Call My Clients",
        date: "26/10/2022 - 12:00am",
        backColor: "bg-[#8f1d1d]",
        borderColor: "border-[#8f1d1d]"
    },
    {
        title: "Finish The Development WorkShop",
        date: "26/10/2022 - 12:00am",
        backColor: "bg-[#a07c2d]",
        borderColor: "border-[#a07c2d]"
    },
]


const Reminders = () => {
    return (
        <article className='flex flex-col gap-4 py-4 px-2 justify-start'>
            <header>
                <h3 className='font-bold '>Reminder</h3>
            </header>
            <main className="flex flex-col gap-4 mt-4">
                {
                    reminders.map((rem, index) =>
                        <div key={index} className="flex flex-row items-center flex-wrap">
                            <div className={`w-[15%] h-[100%] border-r-2 border-solid ${rem.borderColor} flex justify-center items-center mr-4 relative`}>
                                <span className={`w-[20px] h-[20px] absolute rounded-full ${rem.backColor}`}></span>
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">{rem.title}</h3>
                                <h6 className="text-text-gray text-xs">{rem.date}</h6>
                            </div>
                        </div>
                    )
                }
            </main>
        </article>
    )
}

export default Reminders