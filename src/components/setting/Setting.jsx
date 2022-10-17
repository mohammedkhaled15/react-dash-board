import React from 'react'
import GeneralInfo from './GeneralInfo'
import SecurityInfo from './SecurityInfo'
import SiteControl from './SiteControl'
import SocialInfo from './SocialInfo'

const Setting = () => {
    return (
        <section className='lg:col-span-10 col-span-11 setting'>
            <h1 className='title'>Setting</h1>
            <main className='grid grid-cols-12 gap-2'>
                <SiteControl />
                <GeneralInfo />
                <SecurityInfo />
                <SocialInfo />
            </main>
        </section>
    )
}

export default Setting