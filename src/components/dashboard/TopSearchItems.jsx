const topSearchItems = [
    {
        keyword: "Programming",
        searchCount: 220,
    },
    {
        keyword: "JavaScript",
        searchCount: 180,
    },
    {
        keyword: "PHP",
        searchCount: 160,
    },
    {
        keyword: "Code",
        searchCount: 145,
    },
    {
        keyword: "Design",
        searchCount: 110,
    },
    {
        keyword: "Logic",
        searchCount: 95,
    },
]

const TopSearchItems = () => {
    return (
        <article className='flex flex-col gap-4 py-4 px-2 justify-start'>
            <header>
                <h3 className='font-bold '>Top Search Items</h3>
            </header>
            <main className="flex flex-col gap-2 mt-4">
                <div className="flex flex-row justify-between mb-2 text-text-gray">
                    <h2>Keyword</h2>
                    <h2>Search Count</h2>
                </div>
                {
                    topSearchItems.map((item, index) =>
                        <div key={index} className="flex flex-row justify-between">
                            <h3>{item.keyword}</h3>
                            <span className="text-xs bg-[#eee] rounded-lg p-2">{item.searchCount}</span>
                        </div>
                    )
                }
            </main>
        </article>
    )
}

export default TopSearchItems