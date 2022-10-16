import TeamMembers from './TeamMembers'

import girl from "../../assets/imgs/girl.jpg"
import girl2 from "../../assets/imgs/girl2.jpg"
import man from "../../assets/imgs/man.jpg"
import man2 from "../../assets/imgs/man2.jpg"
import StatusButton from './StatusButton'


const projects = [
    {
        name: "Ministry Wikipedia",
        finishDate: "10 May 2022",
        client: "Ministry",
        price: 5300,
        team: [girl2, girl, man, man2],
        status: "pending"
    },
    {
        name: "ElZero Shop",
        finishDate: "12 Oct 2021",
        client: "El zero Company",
        price: 1500,
        team: [girl, man, man2],
        status: "inProgress"
    },
    {
        name: "Mohammed khaled",
        finishDate: "20 Sep 2020",
        client: "khaled Dev",
        price: 1200,
        team: [man2, girl2],
        status: "completed"
    },
    {
        name: "Mahmoud Website",
        finishDate: "15 Jan 2020",
        client: "Mahmoud Comp",
        price: 3450,
        team: [man2, girl2, man],
        status: "pending"
    },
    {
        name: "Mohammed khaled",
        finishDate: "20 Sep 2020",
        client: "khaled Dev",
        price: 1200,
        team: [man2, girl2],
        status: "completed"
    },
    {
        name: "Zeco Comp",
        finishDate: "12 Jul 2019",
        client: "khaled Dev",
        price: 6500,
        team: [girl2],
        status: "rejected"
    },
]

const Projects = () => {
    return (
        <article className='projects lg:col-span-12 flex flex-col gap-4 py-4 px-2 justify-start'>
            <header>
                <h3 className='font-bold '>Projects</h3>
            </header>
            <div className='w-full overflow-x-auto'>
                <table className='text-left w-full'>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Finish Date</th>
                            <th>Client</th>
                            <th>Price</th>
                            <th>Team</th>
                            <th>Status</th>
                        </tr>
                        {
                            projects.map((project, index) =>
                                <tr key={index}>
                                    <td>{project.name}</td>
                                    <td>{project.finishDate}</td>
                                    <td>{project.client}</td>
                                    <td>{`$${project.price}`}</td>
                                    <td><TeamMembers members={project.team} /></td>
                                    <td><StatusButton status={project.status} /></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </article>
    )
}

export default Projects