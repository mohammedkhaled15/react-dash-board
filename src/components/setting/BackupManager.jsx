import Divider from "../utilitis/Divider"
import { ImDatabase } from "react-icons/im"

const backupOptions = ["Daily", "Weekly", "Monthly"]

const BackupManager = () => {
    return (
        <article className='flex flex-col gap-4 py-4 px-2 justify-start'>
            <header>
                <h3 className='font-bold '>Backup Manager</h3>
                <h6 className='text-text-gray text-2xs'>Control Backup Time and Location</h6>
            </header>
            <div className="flex flex-col gap-2">
                {
                    backupOptions.map((opt, index) =>
                        <div key={index} className="flex items-center">
                            <input id={opt} type="radio" value="" name="backup-option" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor={opt} className="ml-2 text-sm font-medium ">{opt}</label>
                        </div>
                    )
                }
            </div>
            <Divider index={0} array={[1, 2, 3]} />
            <ul className="flex flex-row gap-1">
                {
                    ["Megaman", "Zero", "Segma"].map((plan, index) =>
                        <li key={index} className="w-[33%] flex flex-col items-center justify-center">
                            <input type="checkbox" name="backup-plan" id={plan} value="" className="hidden peer" required="" />
                            <label htmlFor={plan} className="inline-flex justify-center py-4 items-center  w-full  bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-300 peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-blue-600 hover:bg-gray-50 dark:text-text-gray  " >
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <ImDatabase />
                                    <div className="w-full text-xs font-xs">{plan}</div>
                                </div>
                            </label>
                        </li>
                    )
                }
            </ul>
        </article>
    )
}

export default BackupManager