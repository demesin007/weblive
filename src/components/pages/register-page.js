import React, { useState } from "react";
import "./register-page.css";

const RegisterPage = ({ onRegister }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {

        if (
            firstName.trim() !== "" &&
            lastName.trim() !== "" &&
            accountNumber.trim() !== "" &&
            username.trim() !== "" &&
            password.trim() !== ""
        ) {

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
            <h2>Tirkelu</h2>
            <label>
                Aty:
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <label>
                Tegi:
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <label>
                Nomer:
                <input
                    type="text"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                />
            </label>
            <label>
                Paydalanuşı aty:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label>
                Qupïya söz:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button onClick={handleRegister}>Tirkelu</button>
        </div>
    );
};

export default RegisterPage;
