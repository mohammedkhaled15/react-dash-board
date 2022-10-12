const LatestProjectProgress = () => {
    return (
        <article className='flex flex-col gap-4 py-4 px-2 justify-start'>
            <header>
                <h3 className='font-bold '>Latest Project Progress</h3>
            </header>
            <main className="flex flex-col gap-2 mt-4">
                <ul className="steps steps-vertical">
                    <li className="step step-success">Got the Project</li>
                    <li className="step step-success">Started The Project</li>
                    <li className="step step-success">The Project About to Finish</li>
                    <li className="step step-warning">Test The Project</li>
                    <li className="step step-neutral">Finish The Project</li>
                </ul>
            </main>
        </article>
    )
}

export default LatestProjectProgress