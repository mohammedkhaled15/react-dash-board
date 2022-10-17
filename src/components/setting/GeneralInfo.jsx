import React from 'react'

const GeneralInfo = () => {
    const handleClick = (e) => {
        e.preventDefault()
    }
    return (
        <article className='flex flex-col gap-4 py-4 px-2 justify-start'>
            <header>
                <h3 className='font-bold '>General Info</h3>
                <h6 className='text-text-gray text-2xs'>General Information about your accout</h6>
            </header>
            <form className='flex flex-col gap-2'>
                <label className='text-xs text-text-gray' htmlFor="firstName">First Name:</label>
                <input className="border-2 border-solid p-1" type="text" id='firstName' placeholder='First Name' />
                <label className='text-xs text-text-gray' htmlFor="lastName">Last Name:</label>
                <input className="border-2 border-solid p-1" type="text" id='lastName' placeholder='Last Name' />
                <div className='flex flex-row justify-between'>
                    <input className="border-2 border-solid p-1 text-text-gray" disabled readOnly type="email" value="Mohammedkhaled1590@gmail.com" />
                    <button onClick={handleClick} className="text-blue-500 font-bold">Change</button>
                </div>
            </form>
        </article>
    )
}

export default GeneralInfo