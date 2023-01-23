import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SET_ACCOUNT } from "../redux/slices/account";
import { useSelector } from 'react-redux';
import './Register.css';

/*
*   razvan123@email.com
*   razvan123
* */

const RegisterPage = () => {

    useEffect(() => { document.title = "Register Page"; })
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const account = useSelector((state) => state.account);

    useEffect(() => {
        if(Object.keys(account).length) {
            navigate("/");
        }
    }, [ account ]);

    const [emailRegister, setEmailRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    const [repeatPasswordRegister, setRepeatPasswordRegister] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [position, setPosition] = useState("");
    const [location, setLocation] = useState("");

    const [loading] = useState(false);
    const [error, setError] = useState("");

    const postRequest = async () => {
        const {data} = await axios({
            method: 'POST',
            url: 'http://localhost:4000/registerpage',
            data: {
                emailRegister,
                passwordRegister,
                firstName,
                lastName,
                position,
                location
            }
        });
        dispatch(SET_ACCOUNT(data));
        navigate("/");
    }

    const submitHandler = async () => {
        if (
            !emailRegister.length ||
            !passwordRegister.length ||
            !repeatPasswordRegister.length ||
            !firstName.length ||
            !lastName.length ||
            !position.length ||
            !location.length
        )
            return setError("Please fill all fields.");
        if (!emailRegister.includes("@"))
            return setError("Provide a valid email address.");
        if (passwordRegister !== repeatPasswordRegister)
            return setError("Passwords do not match.");
        setError("");
        await postRequest();
    };

    return (
        <div className={"register-page"}>
            <h1 className="register_title"> Register </h1>
            <div className={"register-form"}>
                <input type={"email"} placeholder={"Email"} value={emailRegister} onChange={((e) => setEmailRegister(e.target.value))} required /> <br />
                <input type={"password"} placeholder={"Password"} value={passwordRegister} onChange={((e) => setPasswordRegister(e.target.value))} required /> <br />
                <input type={"password"} placeholder={"Repeat password"} value={repeatPasswordRegister} onChange={((e) => setRepeatPasswordRegister(e.target.value))} required /> <br />
                <input type={"text"} placeholder={"First Name"} value={firstName} onChange={((e) => setFirstName(e.target.value))} required /> <br />
                <input type={"text"} placeholder={"Last Name"} value={lastName} onChange={((e) => setLastName(e.target.value))} required /> <br />
                <input type={"text"} placeholder={"Position"} value={position} onChange={((e) => setPosition(e.target.value))} required /> <br />
                <input type={"text"} placeholder={"Location"} value={location} onChange={((e) => setLocation(e.target.value))} required /> <br />
                {loading ? (
                    <span>Loading...</span>
                ) : (
                <button onClick={submitHandler} className={"register_button"}> Register </button>
                    )} <br />
                <Link to={"/loginpage"} className={"signin_navigate"}> You have an account? <span className="signin"> Sign in! </span></Link>
                {error.length ? <span>{error}</span> : null}
            </div>
        </div>
    );
}

export default RegisterPage;