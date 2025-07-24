import { useNavigate } from "react-router-dom";

const ProtectedRoute = () => {

    const navigate = useNavigate();
    
    if(!localStorage.getItem("id")){
        navigate("/signup");
    }
}

export default ProtectedRoute