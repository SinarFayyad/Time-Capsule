import LandingPage from '../pages/landingPage/landingPage';
import MainPage from '../pages/mainPage/mainPage'
import LoginPage from '../pages/loginPage/loginPage'
import SignUpPage from '../pages/signupPage/signupPage';
import AddMessage from '../pages/addMessage/addMessage';
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