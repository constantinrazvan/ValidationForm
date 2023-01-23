import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate }  from 'react-router-dom';
import axios from "axios";
import { SET_ACCOUNT } from "../redux/slices/account";
import {useDispatch, useSelector} from "react-redux";
import "./Login.css";

/*
**** Available account for login in ****
    email: razvan12@gmail.com
    password: razvan123
****************************************
*/

const Login = () => {

    useEffect(() => {
        document.title = "Login Page";
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const account = useSelector((state) => state.account);
    console.log(Object.keys(account).length);

    useEffect(() => {
        if(Object.keys(account).length) {
            navigate("/");
        }
    }, [ account ]);

    async function submitHandler(e) {
         e.preventDefault();

         const {data} = await axios.post(
                "http://localhost:4000/loginpage",
                {
                    email: e.target.email.value,
                    password: e.target.password.value
                }
            )
            dispatch(SET_ACCOUNT(data));
            navigate("/");
     }

    return (
        <form onSubmit={submitHandler} className={"login-page"}>
            <h1 className="login_title"> Login </h1>
            <div className={"login-form"}>
                <input type={"email"} name={"email"} placeholder={"Email"} required /> <br />
                <input type={"password"} name={"password"} placeholder={"Password"} required /> <br />
                <button type={"submit"} className={"login_button"}> Login </button> <br />
                <Link to={"/registerpage"} className="signup_navigate"> You don't have an account? <span className={"sign"}>Sign up!</span> </Link>
            </div>
        </form>
    );
}

export default Login;