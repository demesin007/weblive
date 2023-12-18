import React, { useState } from "react";
import "./register-page.css";

const RegisterPage = ({ onRegister }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        // Add your registration logic here
        // For simplicity, just check if all fields are not empty
        if (
            firstName.trim() !== "" &&
            lastName.trim() !== "" &&
            accountNumber.trim() !== "" &&
            username.trim() !== "" &&
            password.trim() !== ""
        ) {
            // Assuming you want to pass more information to onRegister
            onRegister({
                firstName,
                lastName,
                accountNumber,
                username,
                password,
            });
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <label>
                First Name:
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <label>
                Last Name:
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <label>
                Account Number:
                <input
                    type="text"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                />
            </label>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default RegisterPage;
