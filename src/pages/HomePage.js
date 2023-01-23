import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RES_ACCOUNT } from "../redux/slices/account";
import ChartComponent from '../components/ChartComponent';
import './HomePage.css';

const HomePage = () => {

    useEffect(() => { document.title = "Homepage" })

    const account = useSelector((state) => state.account);
    console.log(account);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function signOut() {
        dispatch(RES_ACCOUNT(account));
        navigate("/loginpage");
    }

    return (
        <div className={"animated-div"}>
            <div style={{textAlign: 'center'}}>
                <h1> Welcome! </h1> <br />
                <ChartComponent /><br />
                <button onClick={signOut}> Sign out </button>
            </div>
        </div>
    );
}

export default HomePage;