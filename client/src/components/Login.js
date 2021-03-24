import React, {useState} from 'react';
import './Login.css';
import {Button, ButtonGroup, ToggleButton, Radio} from 'react-bootstrap';
import httpUser from "../httpUser";
import { Link, Route} from 'react-router-dom'

const Login = (props) => {
    const [fields, setFields] = useState({email: "", password: ""});

    const onInputChange = (e) => {
        e.persist();
        setFields(fields => ({...fields, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loggedInUser = await httpUser.logIn(fields);
        if (loggedInUser) {
            props.setCurrentUser(httpUser.getCurrentUser());
            props.history.push('/Feed');
        }
    }

    return (
        <div>

            <div className = "resDeck">
                <svg width="109" height="70" viewBox="0 0 109 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 32.088V42.9911C30.2289 19.4578 40.2628 94.5309 101.621 48.8666C103.808 47.2443 105.673 44.5421 106.985 41.095C108.297 37.6479 108.998 33.6077 109 29.4754C42.057 86.101 31.711 7.50775 1.43214 28.4225C1.00977 28.7145 0.647512 29.2199 0.392203 29.8734C0.136891 30.5268 0.000271976 31.2982 0 32.088Z" fill="#78C2C3"/>
                <path d="M108.713 4.68834C88.6252 -10.9499 77.4554 16.9548 54.2148 24.0381C67.3012 28.0264 84.2176 25.4099 108.713 4.68834Z" fill="#3F6699"/>
                <path d="M0 23.9045C31.2017 -0.389828 40.889 80.3772 107.704 24.9898C108.092 24.6691 108.419 24.1646 108.648 23.5344C108.878 22.9042 109 22.1742 109 21.4287V10.3869C48.315 61.7179 34.1402 1.93173 9.46382 5.88571C6.87737 6.29885 4.47302 8.3757 2.72226 11.7091C0.971499 15.0425 0.000627809 19.3919 0 23.9045Z" fill="#78C2C3"/>
                <path d="M0.286621 49.0766C20.3707 33.4384 31.5424 61.3431 54.7825 68.4277C41.6932 72.4141 24.7802 69.7982 0.286621 49.0766Z" fill="#0D1B4C"/>
                </svg>
            </div>

            <div className = "swirl">
                <svg viewBox="0 0 1440 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 50L60.125 66.6667C120.25 83.3333 240.5 116.667 360.75 125C481 133.333 601.25 116.667 721.5 91.6667C841.75 66.6667 962 33.3333 1082.25 16.6667C1202.5 0 1322.75 0 1382.88 0H1443V450H1382.88C1322.75 450 1202.5 450 1082.25 450C962 450 841.75 450 721.5 450C601.25 450 481 450 360.75 450C240.5 450 120.25 450 60.125 450H0V50Z" fill="#F3ECC8"/>
                </svg>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className="rectLogin">
                        <div className = "emailHeadingLogin">Email</div>
                        <input type="text" name="email" value={fields.email} onChange={onInputChange} className="inputBoxEmailLogin"/>
                        <div className = "passHeadingLogin">Password</div>
                        <input type="password" name="password" value={fields.password} onChange={onInputChange} className="inputBoxPassLogin"/>
                        <div className = "noAccountLogin">Don't have an account yet?</div>
                        <div className = "noAccountBoldLogin"><Link to='/signup' style={{color: "#0D1B4C"}}>Sign Up</Link></div>
                    </div>
                    <div className = "loginTitle">Log In</div>
                    <div className='loginBtnPosition'><Button className="loginBtn" type='submit'>LOGIN</Button></div>
                </form>
            </div>
        </div>
    )
}

export default Login;