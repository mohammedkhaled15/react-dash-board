import pic1 from "../../assets/imgs/latest-news-1.jpg"
import pic2 from "../../assets/imgs/latest-news-2.jpg"
import pic3 from "../../assets/imgs/latest-news-3.jpg"
import pic4 from "../../assets/imgs/latest-news-4.jpg"
import Divider from "../utilitis/tooltip/Divider"
const latestNews = [
    {
        imgSrc: pic1,
        title: "Created Sass Section",
        subTitle: "New Sass example and Tutorilas",
        since: 3
    },
    {
        imgSrc: pic2,
        title: "Change the design",
        subTitle: "A Brand new website design",
        since: 5
    },
    {
        imgSrc: pic3,
        title: "Team Increased",
        subTitle: "3 developers joined the team",
        since: 7
    },
    {
        imgSrc: pic4,
        title: "Added Payment GateWay",
        subTitle: "Many new payment gateway added",
        since: 9
    },
]


const LatestNews = () => {
    return (
        <article className='flex flex-col gap-4 py-4 px-2 justify-start'>
            <header>
                <h3 className='font-bold '>Latest News</h3>
            </header>
            <main className="flex flex-col gap-4 mt-4">
                {
                    latestNews.map((news, index) =>
                        <div key={index}>
                            <div className="flex flex-row justify-between items-center flex-wrap gap-2">
                                <div className="flex flex-row  justify-start gap-2 w-[80%]">
                                    <div className="w-1/2 md:w-1/4 rounded-lg overflow-hidden">
                                        <img className="w-full h-full" src={news.imgSrc} alt="topic" />
                                    </div>
                                    <div className="text-ellipsis overflow-hidden w-3/4">
                                        <h3 className="text-sm font-bold ">{news.title}</h3>
                                        <h6 className="text-text-gray text-xs">{news.subTitle}</h6>
                                    </div>
                                </div>
                                <span className="t text-[0.6rem] bg-shadow-gray p-1 rounded-lg">{`${news.since} Days ago`}</span>
                            </div>
                            <Divider index={index} array={latestNews} />
                        </div>
                    )
                }
            </main>
        </article>
    )
}

export default LatestNews