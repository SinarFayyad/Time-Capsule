import LandingPage from '../pages/landingPage/index';
import MainPage from '../pages/mainPage/index'
import LoginPage from '../pages/loginPage/index'
import SignUpPage from '../pages/signupPage/index';
import AddMessage from '../pages/addMessage/index';

import { Routes, Route } from "react-router-dom";

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/mainPage" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path='/addMessage' element={<AddMessage/>}/>
        </Routes>
    );
};

export default MyRoutes;