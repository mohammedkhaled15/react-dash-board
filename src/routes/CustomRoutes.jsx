import { Route, Routes } from "react-router-dom"
import App from "./../App"
import Setting from "../components/setting/Setting"
import Profile from "../components/profile/Profile"
import Projects from "../components/projects/Projects"
import Courses from "../components/courses/Courses"
import Friends from "../components/friends/Friends"
import Files from "../components/files/Files"
import Plans from "../components/plans/Plans"

const CustomRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} >
                <Route path="setting" element={<Setting />} />
                <Route path="profile" element={<Profile />} />
                <Route path="projects" element={<Projects />} />
                <Route path="courses" element={<Courses />} />
                <Route path="friends" element={<Friends />} />
                <Route path="files" element={<Files />} />
                <Route path="plans" element={<Plans />} />
            </Route>
        </Routes>
    )
}

export default CustomRoutes