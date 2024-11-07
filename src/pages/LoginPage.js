import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../css files/styles.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
        setEmail("");
        setPassword("");
    };

    const navigate = useNavigate();

const loginUser = () => {
    fetch("http://localhost:4000/api/login", {
        method: "POST",
        body: JSON.stringify({
            email,
            password,
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
                alert(data.message);
                navigate("/dashboard");
                localStorage.setItem("_id", data.id);
            }
        })
        .catch((err) => console.error(err));
};

    return (
        <div className='form-container'>
            <h1 className='Title'>Log into your account</h1>
            <form className='form' onSubmit={handleSubmit}>
                <fieldset className="form-field">
                <legend>Email Address</legend>
                <input
                    type='text'
                    name='email'
                    id='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </fieldset>
                <fieldset className="form-field">
                <legend>Password</legend>
                <input
                    type='password'
                    name='password'
                    id='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </fieldset>
                <button className='submit-button'>SIGN IN</button>
                <p>
                    Don't have an account? <Link to='/register'>Create one</Link>
                </p>
            </form>
        </div>
    );
};
export default Login;