import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login-page.css";

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Add your login logic here
        // For simplicity, just check if both username and password are not empty
        if (username.trim() !== "" && password.trim() !== "") {
            onLogin(username);
        }
    };

    return (
        <div className="login-container">
            <h2>Kiru</h2>
            <label>
                Paydalanuşı aty:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Qupïya söz:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button onClick={handleLogin}>Kiru</button>

            {/* Add a link to the RegisterPage */}
            <p>
                Tirkelmegensiz be? <Link to="/register">Tirkelu</Link>
            </p>
        </div>
    );
};

export default LoginPage;
