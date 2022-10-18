import { createContext, useState } from 'react'

const widgets = [
    {
        id: 1,
        name: "Quick Draft",
        isChecked: false
    },
    {
        id: 2,
        name: "Yearly Targets",
        isChecked: false
    },
    {
        id: 3,
        name: "Tickets Statistics",
        isChecked: false
    },
    {
        id: 4,
        name: "Latest News",
        isChecked: false
    },
    {
        id: 5,
        name: "Latest Tasks",
        isChecked: false
    },
    {
        id: 6,
        name: "Top Search Items",
        isChecked: false
    },
]

export const WidCont = createContext()

const WidgetsContext = ({ children }) => {

    const [widgetsData, setWidgetsData] = useState(widgets)

    return (
        <WidCont.Provider value={[widgetsData, setWidgetsData]}>
            {children}
        </WidCont.Provider>
    )
}

export default WidgetsContext