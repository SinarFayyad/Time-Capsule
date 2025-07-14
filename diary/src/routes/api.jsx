<<<<<<< Updated upstream
import LandingPage from '../pages/landingPage/landingPage';
import MainPage from '../pages/mainPage/mainPage'
import LoginPage from '../pages/loginPage/loginPage'
import SignUpPage from '../pages/signupPage/signupPage';
<<<<<<< Updated upstream
import AddMessage from '../pages/addMessage/addMessage';
=======
=======
import LandingPage from '../pages/landingPage'
import MainPage from '../pages/mainPage'
import LoginPage from '../pages/loginPage/index'
import SignUpPage from '../pages/signupPage/index';
import AddMessage from '../pages/addMessage/index';
>>>>>>> Stashed changes
>>>>>>> Stashed changes
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