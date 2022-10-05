import { Route, Routes } from "react-router-dom"
import Dashboard from "../components/dashboard/Dashboard"
import Setting from "../components/setting/Setting"
import Profile from "../components/profile/Profile"
import Projects from "../components/projects/Projects"
import Courses from "../components/courses/Courses"
import Friends from "../components/friends/Friends"
import Files from "../components/files/Files"
import Plans from "../components/plans/Plans"
import SharedLayout from "../components/sharedLayout/SharedLayout"

const CustomRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />} >
                <Route index element={<Dashboard />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/friends" element={<Friends />} />
                <Route path="/files" element={<Files />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/*" element={<h1>404 Error</h1>} />
            </Route>
        </Routes>
    )
}

export default CustomRoutes