import React, {useState} from 'react';
import './SavedResumes.css'
import {Container, Row, Col} from 'react-bootstrap'
import NavBar from '../components/NavBar/NavBar'
import Chat from '../components/Chat/Chat'
import SampleResume from "./sampleRes.jpg"


const SavedResumes = (props) => {


    return (
        <div>

            <div className = "swirl">
                <svg viewBox="0 0 1440 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 50L60.125 66.6667C120.25 83.3333 240.5 116.667 360.75 125C481 133.333 601.25 116.667 721.5 91.6667C841.75 66.6667 962 33.3333 1082.25 16.6667C1202.5 0 1322.75 0 1382.88 0H1443V450H1382.88C1322.75 450 1202.5 450 1082.25 450C962 450 841.75 450 721.5 450C601.25 450 481 450 360.75 450C240.5 450 120.25 450 60.125 450H0V50Z" fill="#F3ECC8"/>
                </svg>
            </div>


            <div className = "savedTitle">Saved Resumes</div>
            <div className = "allResumes">
                <Container>
                {props.resumes.map((resumeObj) => {
                    return <object data={resumeObj.resume + '#toolbar=0&navpanes=0&scrollbar=0'} type="application/pdf" className ="pdfSaved"></object>
                })}
                </Container>
            
            </div>
            


            <NavBar />
            

        </div>
    )
}

export default SavedResumes;