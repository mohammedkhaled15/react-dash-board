import { FileIcon } from 'react-file-icon';

const latestUploads = [
    {
        fileName: "my-file.pdf",
        author: "Elzero",
        size: 2.5,
        color: "#F15642"
    },
    {
        fileName: "my-video-file.avi",
        author: "Elzero",
        size: 2.5,
        color: "#5d78f3"
    },
    {
        fileName: "my-psd-file.psd",
        author: "Elzero",
        size: 2.5,
        color: "#633029"
    },
    {
        fileName: "my-zip-file.zip",
        author: "Elzero",
        size: 2.5,
        color: "#206d3e"
    },
]

const LatestUploads = () => {
    return (
        <article className='flex flex-col gap-4 py-4 px-2 justify-start'>
            <header>
                <h3 className='font-bold '>Latest Uploads</h3>
            </header>
            <main className="flex flex-col gap-2 mt-4">
                {
                    latestUploads.map((file, index) =>
                        <div key={index}>
                            <div className='flex flex-row justify-between items-center'>
                                <section className='flex flex-row justify-start items-center gap-4'>
                                    <div className=' w-[15%] md:w-[10%] flex items-center justify-center'>
                                        <FileIcon color={file.color} extension={file.fileName.slice(file.fileName.indexOf(".") + 1, file.fileName.length)} />
                                    </div>
                                    <div>
                                        <h3 className='font-bold'>{file.fileName}</h3>
                                        <h6 className='text-text-gray text-xs'>{file.author}</h6>
                                    </div>
                                </section>
                                <span className='bg-shadow-gray p-1 rounded-lg text-xs'>{`${file.size}mb`}</span>
                            </div>
                            <span className={`${index === latestUploads.length - 1 ? "hidden" : "inline-block"} w-[100%] bg-shadow-gray h-[2px]`}></span>
                        </div>
                    )
                }
            </main>
        </article>
    )
}

export default LatestUploads