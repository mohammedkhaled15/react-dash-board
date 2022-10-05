import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import SideNavbar from './SideNavbar'

const SharedLayout = () => {
    return (
        <div className="App grid grid-cols-12 ">
            <SideNavbar />
            <Header />
            <Outlet />
        </div>
    )
}

export default SharedLayout