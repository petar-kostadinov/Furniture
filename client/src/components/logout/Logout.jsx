import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/useAuth";




export default function Logout() {
    const { logout } = useLogout();
    const navigate = useNavigate();
    
    useEffect(() => {
        logout();
        navigate('/login')
    }, [logout, navigate]);

    return <div>Logging out</div>
}