import React from 'react'

const SecurityInfo = () => {
    return (
        <article className='flex flex-col gap-4 py-4 px-2 justify-start'>
            <header>
                <h3 className='font-bold '>Security Info</h3>
                <h6 className='text-text-gray text-2xs'>Security Information About Your Acount</h6>
            </header>
            <div className='flex flex-row justify-between items-center'>
                <div>
                    <h3>Passsword</h3>
                    <h6 className='text-text-gray text-2xs'>Last Change On 25/10/2021</h6>
                </div>
                <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" id="default-toggle" className="sr-only peer" />
                    <div className="w-7 h-4 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            </div>
        </article>
    )
}

export default SecurityInfo