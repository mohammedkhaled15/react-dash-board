import { useContext } from "react"
import { WidCont } from "../../context/WidgetsContext"

const WidgetControl = () => {

    const [widgetsData, setWidgetsData] = useContext(WidCont)

    // const handleWidgetSubmission = (e) => {
    //     e.preventDefault()
    //     console.log(widgetsData)
    // }

    const changeCheck = (id) => {
        console.log(id)
        const temp = [...widgetsData]
        const index = temp.findIndex((wid) => wid.id === id)
        if (index === -1) return
        temp[index].isChecked = !temp[index].isChecked
        setWidgetsData(temp)
    }

    return (
        <article className='flex flex-col gap-4 py-4 px-2 justify-start'>
            <header>
                <h3 className='font-bold '>Widget Control</h3>
                <h6 className='text-text-gray text-2xs'>Show/Hide Widgets</h6>
            </header>
            <form className="flex flex-col gap-2">
                {
                    widgetsData.map((widget, index) =>
                        <div key={index} className="flex flex-col gap-1">
                            <div className="flex items-center">
                                <input checked={widget.isChecked} onChange={() => changeCheck(widget.id)} id={widget.name} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor={widget.name} className="ml-2 text-sm font-medium">{widget.name}</label>
                            </div>
                        </div>
                    )
                }
                {/* <button className="btn btn-xs">Save</button> */}
            </form>
        </article>
    )
}

export default WidgetControl