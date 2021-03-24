import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import './LinkedIn.css';
import {Button, ButtonGroup, ToggleButton, Radio} from 'react-bootstrap'
import Feed from "./Feed";
import config from "../config";
import axios from 'axios';

const LinkedIn = (props) => {
    const [linkedIn, setLinkedIn] = useState("");

    console.log(linkedIn);

    const onChange = (e) => {
        e.persist();
        setLinkedIn(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const linkedInLink = {
            linkedInURL: linkedIn
        };
        axios.put(config.baseURL + "api/users/" + props.currentUserID, linkedInLink).then(res => {
            if (res.status === 200 && res.data.msg === "User successfully updated") {
                props.history.push("/Feed");
            }
        })

    }

    const onSkipClick = () => {
        props.history.push("/Feed");
    }
    
    return (
        <div>
            <div className = "swirl">
                <svg viewBox="0 0 1440 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 50L60.125 66.6667C120.25 83.3333 240.5 116.667 360.75 125C481 133.333 601.25 116.667 721.5 91.6667C841.75 66.6667 962 33.3333 1082.25 16.6667C1202.5 0 1322.75 0 1382.88 0H1443V450H1382.88C1322.75 450 1202.5 450 1082.25 450C962 450 841.75 450 721.5 450C601.25 450 481 450 360.75 450C240.5 450 120.25 450 60.125 450H0V50Z" fill="#F3ECC8"/>
                </svg>
            </div>

           <div className="rectLinked">
               <div className = "linkedinHeading">LinkedIn Profile Link</div>
               <input type="text" className="inputBoxLinkedIn" name='linkedin' value={linkedIn} onChange={onChange}/>
               <Link><div className="skipStep" onClick={()=>onSkipClick()}>Skip this step</div></Link>
           </div>

           <div className = "linkedinTitle">Add LinkedIn</div>
       
           <div className='nextBtnPosition'><Button className="nextBtn" onClick={handleSubmit}>NEXT</Button></div>
        </div>
    )
}

export default LinkedIn;