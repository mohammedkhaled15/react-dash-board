import GeneralInfo from "./GeneralInfo"
import LatestActiv from "./LatestActiv"
import MySkills from "./MySkills"

const Profile = () => {
    return (
        <section className='lg:col-span-10 col-span-11 profile'>
            <h1 className='title'>Profile</h1>
            <main className='grid grid-cols-12 gap-2'>
                <GeneralInfo />
                <MySkills />
                <LatestActiv />
            </main>
        </section>
    )
}

export default Profile