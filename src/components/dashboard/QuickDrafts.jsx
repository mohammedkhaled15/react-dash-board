

const QuickDrafts = () => {
    return (
        <article className='flex flex-col gap-4 py-4 px-2 justify-start'>
            <h3 className='font-bold '>Quick Drafts</h3>
            <h6 className="text-text-gray">Write a Draft for Your Ideas</h6>
            <input type="text" placeholder="Title" className="bg-shadow-gray p-2 rounded-lg" />
            <textarea placeholder="Your Thoughts" className="bg-shadow-gray p-2 resize-none"></textarea>
            <button className="bg-blue-700 p-2 px-4 self-end mr-[15%] mb-4 inline-block text-white rounded-lg">Save</button>
        </article>
    )
}

export default QuickDrafts