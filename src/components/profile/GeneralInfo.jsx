import Profile from "../../assets/imgs/man.jpg"
import Divider from "../utilitis/Divider"
import Star from "../utilitis/Star"
import ToggleSwitch from "../utilitis/ToggleSwitch"

const information = [
    {
        name: "General Information",
        info1T: "Full Name:",
        info1S: "Mohammed Khaled",
        info2T: "Gender:",
        info2S: "Male",
        info3T: "Country:",
        info3S: "Egypt",
        info4: true,
    },
    {
        name: "Personal Information",
        info1T: "Email:",
        info1S: "MohammedKhaled1590@gmail.com",
        info2T: "Phone:",
        info2S: "0123456789",
        info3T: "Date Of Birth:",
        info3S: "01/05/1990",
        info4: false,
    },
    {
        name: "Job Information",
        info1T: "Title:",
        info1S: "Front End Developer",
        info2T: "Programming Language:",
        info2S: "Js",
        info3T: "Years of Exp:",
        info3S: "15+",
        info4: true,
    },
    {
        name: "Billing Information",
        info1T: "Payment Method:",
        info1S: "Visa",
        info2T: "Email:",
        info2S: "email@domain.com",
        info3T: "Subscription:",
        info3S: "Monthly",
        info4: false,
    },

]

const GeneralInfo = () => {
    return (
        <article className='flex flex-row flex-wrap  py-4 px-2 justify-start col-span-12'>
            <aside className="w-[100%] md:w-[25%] flex flex-col gap-2 justify-center items-center">
                <div className="w-[50%] rounded-full overflow-hidden ">
                    <img src={Profile} alt="profile" className="w-full" />
                </div>
                <h3 className="font-bold">Mohammed Khaled</h3>
                <h6 className="text-text-gray">Level 20</h6>
                <div className="w-[80%] bg-gray-200 rounded-full h-1">
                    <div className="bg-blue-600 h-1 rounded-full" style={{ width: "80%" }}></div>
                </div>
                <div className="flex items-center ">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" ><Star /></svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" ><Star /></svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" ><Star /></svg>
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" ><Star /></svg>
                    <svg className="w-5 h-5 text-text-gray" fill="currentColor" ><Star /></svg>
                </div>
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">400 Rating</p>
            </aside>
            <main className="w-[100%] md:w-[75%] flex flex-col gap-1 mt-4">
                {
                    information.map((info, index) =>
                        <section key={index} className="">
                            <h6 className="mb-4 text-text-gray font-bold">{info.name}</h6>
                            <div className="flex flex-row flex-wrap gap-2 md:gap-4 items-center">
                                <h6 className="text-xs  font-thin w-[50%] md:w-[40%]"><span className="md:block text-text-gray font-bold">{info.info1T}</span> {info.info1S}</h6>
                                <h6 className="text-xs  font-thin w-[50%] md:w-[25%]"><span className="md:block text-text-gray font-bold">{info.info2T}</span> {info.info2S}</h6>
                                <h6 className="text-xs  font-thin w-[50%] md:w-[20%]"><span className="md:block text-text-gray font-bold">{info.info3T}</span> {info.info3S}</h6>
                                <ToggleSwitch checked={info.info4} name={info.name} />
                            </div>
                            <Divider index={index} array={information} />

                        </section>
                    )
                }
            </main>
        </article>
    )
}

export default GeneralInfo