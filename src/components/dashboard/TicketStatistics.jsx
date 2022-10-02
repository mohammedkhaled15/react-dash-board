import { GrTicket } from "react-icons/gr"
import { BiLoaderCircle } from "react-icons/bi"
import { FcApproval } from "react-icons/fc"
import { TiDeleteOutline } from "react-icons/ti"

const tickets = [
    {
        icon: GrTicket,
        count: 2500,
        name: "Total",
        color: "#F5A052"
    },
    {
        icon: BiLoaderCircle,
        count: 500,
        name: "Pending",
        color: "#0075FF"
    },
    {
        icon: FcApproval,
        count: 1900,
        name: "Closed",
        color: "#22CBC0"
    },
    {
        icon: TiDeleteOutline,
        count: 100,
        name: "Deleted",
        color: "#F44336"
    },
]

const TicketStatistics = () => {
    return (
        <article className='flex flex-col gap-4 py-4 px-2 justify-start'>
            <header>
                <h3 className='font-bold '>Ticket Statistics</h3>
                <h6 className="text-text-gray text-xs">Every Thing About Support Tickets</h6>
            </header>
            <main className='grid grid-cols-2 gap-2'>
                {
                    tickets.map((ticket, index) =>
                        <figure key={index} className="col-span-1 flex flex-col justify-center items-center gap-4 border border-text-gray rounded-xl p-2">
                            {<ticket.icon color={ticket.color} size={30} />}
                            <h2 className="font-bold text-2xl">{ticket.count}</h2>
                            <h5 className="text-xs text-text-gray">{ticket.name}</h5>
                        </figure>
                    )
                }
            </main>
        </article>
    )
}

export default TicketStatistics