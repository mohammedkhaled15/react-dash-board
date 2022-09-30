import WelcomeCard from "./WelcomeCard"
import QuickDrafts from "./QuickDrafts"

const Dashboard = () => {
    return (
        <section className='lg:col-span-10 col-span-11 dashboard'>
            <h1 className='title'>Dashboard</h1>
            <main className='grid grid-cols-12 gap-2'>
                <WelcomeCard />
                <QuickDrafts />
                <article className='text-center bg-slate-600 col-span-4 h-40'>Year Targets</article>
                <article className='text-center bg-slate-600 col-span-4 h-40'>Ticket Statistics</article>
                <article className='text-center bg-slate-600 col-span-4 h-40'>Latest News</article>
                <article className='text-center bg-slate-600 col-span-4 h-40'>Latest Tasks</article>
                <article className='text-center bg-slate-600 col-span-4 h-40'>Top Search Items</article>
                <article className='text-center bg-slate-600 col-span-4 h-40'>Latest Uploads</article>
                <article className='text-center bg-slate-600 col-span-4 h-40'>Last Project Progress</article>
                <article className='text-center bg-slate-600 col-span-4 h-40'>Reminders</article>
                <article className='text-center bg-slate-600 col-span-4 h-40'>Latest Post</article>
                <article className='text-center bg-slate-600 col-span-4 h-40'>Social Media Stats</article>
                <article className='text-center bg-slate-600 col-span-12 h-40'>Projects</article>
            </main>
        </section>
    )
}

export default Dashboard