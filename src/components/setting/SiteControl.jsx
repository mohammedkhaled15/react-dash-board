import { useState } from 'react'

const SiteControl = () => {
    const [checked, setChecked] = useState(true)

    const handleClick = () => {
        setChecked(!checked)
    }
    // console.log(checked)

    return (
        <article className='flex flex-col gap-4 py-4 px-2 justify-start'>
            <header>
                <h3 className='font-bold '>Site Control</h3>
                <h6 className='text-text-gray text-2xs'>Control the Website if there is Maintenance</h6>
            </header>
            <div className='flex flex-row justify-between items-center'>
                <div>
                    <h4 className='font-bold'>Website Control</h4>
                    <h6 className='text-text-gray text-2xs'>Open/Close Website and Type the reason</h6>
                </div>
                <label htmlFor="SiteControl" className="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" defaultChecked onClick={handleClick} value={checked} id="SiteControl" className="sr-only peer" />
                    <div className="w-7 h-4 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            </div>
            <textarea disabled={checked} style={{ resize: "none" }} className='border-2 border-solid p-1' placeholder='Close Message Content'></textarea>
        </article>
    )
}

export default SiteControl