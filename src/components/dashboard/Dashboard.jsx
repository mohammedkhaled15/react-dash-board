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
import Projects from "./Projects"

import { WidCont } from "../../context/WidgetsContext"
import { useContext } from "react"

const Dashboard = () => {
    const [widgets] = useContext(WidCont)
    console.log(widgets)
    return (
        <section className='lg:col-span-10 col-span-11 dashboard'>
            <h1 className='title'>Dashboard</h1>
            <main className='grid grid-cols-12 gap-2'>
                <WelcomeCard />
                {widgets[0].isChecked && <QuickDrafts />}
                {widgets[1].isChecked && <YearlyTargets />}
                {widgets[2].isChecked && <TicketStatistics />}
                {widgets[3].isChecked && <LatestNews />}
                {widgets[4].isChecked && <LatestTasks />}
                {widgets[5].isChecked && <TopSearchItems />}
                <LatestUploads />
                <LatestProjectProgress />
                <Reminders />
                <LatestPost />
                <SocialMedia />
                <Projects />
            </main>
        </section>
    )
}

export default Dashboard