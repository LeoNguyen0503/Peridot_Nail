import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function Admin() {
    const navigate = useNavigate();
    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem("credential");
        if (!isLoggedIn) {
            navigate("/auth");
        }
    }, [navigate]);
    return  (
        <div>Admin page</div>
    )
}

export default Admin