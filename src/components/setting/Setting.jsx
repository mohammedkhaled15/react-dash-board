import React from 'react'
import BackupManager from './BackupManager'
import GeneralInfo from './GeneralInfo'
import SecurityInfo from './SecurityInfo'
import SiteControl from './SiteControl'
import SocialInfo from './SocialInfo'
import WidgetControl from './WidgetControl'

const Setting = () => {
    return (
        <section className='lg:col-span-10 col-span-11 setting'>
            <h1 className='title'>Setting</h1>
            <main className='grid grid-cols-12 gap-2'>
                <SiteControl />
                <GeneralInfo />
                <SecurityInfo />
                <SocialInfo />
                <WidgetControl />
                <BackupManager />
            </main>
        </section>
    )
}

export default Setting