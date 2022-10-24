import { useState } from "react"

const ToggleSwitch = ({ onOrOff, name }) => {
    const [checked, setChecked] = useState(onOrOff)
    return (
        <div>
            <label htmlFor={name} className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value={checked} id={name} className="sr-only peer" onChange={(e) => setChecked(!checked)} />
                <div className="w-7 h-4 bg-gray-200 rounded-full peer  peer-focus:ring-blue-300  dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
        </div>
    )
}

export default ToggleSwitch