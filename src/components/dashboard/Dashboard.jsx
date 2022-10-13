import WelcomeCard from "./WelcomeCard"
import QuickDrafts from "./QuickDrafts"
import YearlyTargets from "./YearlyTargets"
import TicketStatistics from "./TicketStatistics"
import LatestNews from "./LatestNews"
import LatestTasks from "./LatestTasks"
import TopSearchItems from "./TopSearchItems"
import LatestUploads from "./LatestUploads"
import LatestProjectProgress from "./LatestProjectProgress"
import Reminders from "./Reminders"
import LatestPost from "./LatestPost"
import SocialMedia from "./SocialMedia"

const Dashboard = () => {
    return (
        <section className='lg:col-span-10 col-span-11 dashboard'>
            <h1 className='title'>Dashboard</h1>
            <main className='grid grid-cols-12 gap-2'>
                <WelcomeCard />
                <QuickDrafts />
                <YearlyTargets />
                <TicketStatistics />
                <LatestNews />
                <LatestTasks />
                <TopSearchItems />
                <LatestUploads />
                <LatestProjectProgress />
                <Reminders />
                <LatestPost />
                <SocialMedia />
                <article className='text-center bg-slate-600 col-span-12 h-40'>Projects</article>
            </main>
        </section>
    )
}

export default Dashboard