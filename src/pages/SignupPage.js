import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../css files/styles.css'
import axios from "axios";

function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signUp = () => {
        fetch("http://localhost:4000/api/register", {
            method: "POST",
            body: JSON.stringify({
                name,
                email,
                name,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error_message) {
                    alert(data.error_message);
                } else {
                    alert("Account created successfully!");
                    navigate("/");
                }
            })
            .catch((err) => console.error(err));
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        signUp();
        setEmail("");
        setName("");
        setPassword("");
    };

    return (
        <div className="form-container">
        <h1 className='Title'>Sign Up</h1>
        <form onSubmit={handleSignup} className="form">
            <fieldset className="form-field">
                <legend>Name</legend>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            </fieldset>
    
            <fieldset className="form-field">
                <legend>Email</legend>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </fieldset>
    
            <fieldset className="form-field">
                <legend>Password</legend>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </fieldset>

            <button type="submit" className="submit-button">Sign Up</button>
            <p>
                Have an account? <Link to='/login'>Sign in</Link>
            </p>
        </form>
      </div>
    );
}

export default SignupPage;
