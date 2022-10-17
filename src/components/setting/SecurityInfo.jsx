import { useState } from 'react'
import Divider from '../utilitis/tooltip/Divider'

const options = [
    {
        title: "Password",
        subTitle: "Last Change On 25/10/2021.",
        buttonType: "primary",
        buttonText: "Change"
    },
    {
        title: "Two Factor Authentication",
        subTitle: "Enable/Disable the feature",
        buttonType: "switch",
        buttonText: ""
    },
    {
        title: "Devices",
        subTitle: "Check The login devices list.",
        buttonType: "standard",
        buttonText: "Devices"
    },
]

const SecurityInfo = () => {
    const [authChecked, setAuthChecked] = useState(true)

    const handleAuthClick = (e) => {
        setAuthChecked(!authChecked)
    }
    // console.log(authChecked)

    return (
        <article className='flex flex-col gap-4 py-4 px-2 justify-start'>
            <header>
                <h3 className='font-bold '>Security Info</h3>
                <h6 className='text-text-gray text-2xs'>Security Information About Your Acount</h6>
            </header>
            {
                options.map((option, index) =>
                    <div key={index} className="flex flex-col">
                        <div className='flex flex-row justify-between items-center'>
                            <div>
                                <h3 className='font-bold text-sm'>{option.title}</h3>
                                <h6 className='text-text-gray text-2xs'>{option.subTitle}</h6>
                            </div>
                            {
                                option.buttonType === "switch" ? <label htmlFor="TwoFactorAuth" className="inline-flex relative items-center cursor-pointer">
                                    <input defaultChecked type="checkbox" value={authChecked} onClick={handleAuthClick} id="TwoFactorAuth" className="sr-only peer" />
                                    <div className="w-7 h-4 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label> : option.buttonType === "primary" ? <button className='btn btn-xs btn-primary'>{option.buttonText}</button> : <button className='btn btn-xs '>{option.buttonText}</button>
                            }
                        </div>
                        <Divider index={index} array={options} />
                    </div>
                )
            }
        </article>
    )
}

export default SecurityInfo