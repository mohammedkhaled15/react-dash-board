import React from 'react'

const Projects = () => {
    return (
        <article className='projects lg:col-span-12 flex flex-col gap-4 py-4 px-2 justify-start'>
            <header>
                <h3 className='font-bold '>Projects</h3>
            </header>
            <table className='text-left'>
                <thead className='bg-[#eee]'>
                    <tr>
                        <th>Name</th>
                        <th>Finish Date</th>
                        <th>Client</th>
                        <th>Price</th>
                        <th>Team</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ministry Wikipedia</td>
                        <td>Ministry Wikipedia</td>
                        <td>Ministry Wikipedia</td>
                        <td>Ministry Wikipedia</td>
                        <td>Ministry Wikipedia</td>
                        <td>Ministry Wikipedia</td>
                    </tr>
                </tbody>
            </table>
        </article>
    )
}

export default Projects