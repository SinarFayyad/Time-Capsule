import LogOut from '../pages/logOut'
import ProtectedRoute from './ProtectedRoute'
import ViewMessage from '../pages/viewMessage'
import MainPage from '../pages/mainPage/index'
import EditProfile from '../pages/editProfile'
import Profile from '../pages/profilePage/index'
import LoginPage from '../pages/loginPage/index'
import { Routes, Route } from "react-router-dom"
import SignUpPage from '../pages/signupPage/index'
import AddMessage from '../pages/addMessage/index'
import LandingPage from '../pages/landingPage/index'

const MyRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />

            <Route element={<ProtectedRoute/>}>
                <Route path='/logOut' element={<LogOut />} />
                <Route path='/profile' element={<Profile />} />
                <Route path="/mainPage" element={<MainPage />} />
                <Route path='/addMessage' element={<AddMessage />} />
                <Route path='/editProfile' element={<EditProfile />} />
                <Route path='/viewMessage/:message_id' element={<ViewMessage />} />
            </Route>
        </Routes>
    );
};

export default MyRoutes;