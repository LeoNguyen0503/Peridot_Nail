import {verifyAdmin} from "../api/admin.js"
import { useNavigate } from "react-router-dom";

function Auth() {
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const username = document.querySelector("input[name=username]").value;
        const password = document.querySelector("input[name=password]").value;

        const login = {
            login: username,
            password: password
        };

        try {
            const response = await verifyAdmin(login);
            if (response.success) {
                sessionStorage.setItem("credential", "true");
                navigate("/booking-list");
            } else if (response.message === "Admin not found"){
                alert("Admin not found, wrong username")
            } else {
                alert("Wrong password")
            }
        } catch (e) {
            console.error(e);
            alert("Error while logging in!");
        }

    }

    return (
        <div className="booking-form">
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type="text" name="username" required/>
                <label>Password: </label>
                <input type="password" name="password" required/>
                <br/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Auth;