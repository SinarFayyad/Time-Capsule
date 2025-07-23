import LogOut from '../pages/logOut'
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
            <Route path='/logOut' element= {<LogOut/>}/>
            <Route path='/profile' element={ <Profile/>}/>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/mainPage" element={<MainPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path='/addMessage' element={<AddMessage/>}/>
            <Route path='/editProfile' element={ <EditProfile/>}/>
        </Routes>
    );
};

export default MyRoutes;