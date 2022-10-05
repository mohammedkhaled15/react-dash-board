import team from '../../assets/imgs/welcome-team.png'
import profile from '../../assets/imgs/profile.jpg'

const WelcomeCard = () => {
    return (
        <article className='text-right'>
            <header className='bg-shadow-gray flex justify-between p-2 pb-6 relative '>
                <div className="tagname h-22 text-center">
                    <h3 className='font-bold'>Welcome</h3>
                    <h5 className='text-text-gray text-xs'>Mhammed Khaled</h5>
                </div>
                <img src={team} alt="team" className='w-[120px]' />
                <img src={profile} alt="profile" className='absolute border-4 border-white rounded-full top-[70%]' />
            </header>
            <span className='w-[100%] inline-block bg-shadow-gray h-[2px] mt-12 '></span>
            <div className="data flex px-6 my-4 justify-between ">
                <div className="box text-center">
                    <h5 className='text-xs'>Mohammed Khaled</h5>
                    <h6 className='text-text-gray text-xs'>Developer</h6>
                </div>
                <div className="box text-center">
                    <h5 className='text-xs'>80</h5>
                    <h6 className='text-text-gray text-xs'>Projects</h6>
                </div>
                <div className="box text-center">
                    <h5 className='text-xs'>$8500</h5>
                    <h6 className='text-text-gray text-xs'>Earned</h6>
                </div>
            </div>
            <span className='w-[100%] inline-block bg-shadow-gray h-[2px] '></span>
            <button className='bg- bg-blue-button p-2 mr-6 my-4 inline-block text-white rounded-lg'>Profile</button>
        </article>
    )
}

export default WelcomeCard