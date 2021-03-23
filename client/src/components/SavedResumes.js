import React, {useState} from 'react';
import './SavedResumes.css'
import {Button, ButtonGroup, ToggleButton, Radio} from 'react-bootstrap'
import NavBar from '../components/NavBar/NavBar'
import Chat from '../components/Chat/Chat'
import SampleResume from "./sampleRes.jpg"
import resume1 from '../uploads/sample_1.pdf'
import resume2 from '../uploads/sample_2.pdf'
import resume3 from '../uploads/sample_3.pdf'
import resume4 from '../uploads/sample_4.pdf'
import resume5 from '../uploads/sample_5.pdf'
import resume6 from '../uploads/sample_6.pdf'

const SavedResumes = () => {
    const resumes = [
        {
            resume: resume1,
            name: 'Cocoa Touch',
        }, 
        {
            resume: resume2,
            name: 'Abigail Berns'
        }, 
        {
            resume: resume3,
            name: 'Cindy Lou Who'
        }, 
        {
            resume: resume4, 
            name: 'Name'
        }, 
        {
            resume: resume5, 
            name: 'Entry Level Resume Guide'
        }, 
        {
            resume: resume6, 
            name: 'Sam Student'
        }
    ]

    return (
        <div>

            <div className = "swirl">
                <svg viewBox="0 0 1440 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 50L60.125 66.6667C120.25 83.3333 240.5 116.667 360.75 125C481 133.333 601.25 116.667 721.5 91.6667C841.75 66.6667 962 33.3333 1082.25 16.6667C1202.5 0 1322.75 0 1382.88 0H1443V450H1382.88C1322.75 450 1202.5 450 1082.25 450C962 450 841.75 450 721.5 450C601.25 450 481 450 360.75 450C240.5 450 120.25 450 60.125 450H0V50Z" fill="#F3ECC8"/>
                </svg>
            </div>


            <div className = "savedTitle">Saved Resumes</div>
            <div className = "allResumes">
                <object data={resumes[0].resume + '#toolbar=0&navpanes=0&scrollbar=0'} type="application/pdf" className='pdfSaved1'></object>
                <object data={resumes[1].resume + '#toolbar=0&navpanes=0&scrollbar=0'} type="application/pdf" className='pdfSaved2'></object>
                <object data={resumes[2].resume + '#toolbar=0&navpanes=0&scrollbar=0'} type="application/pdf" className='pdfSaved3'></object>
                <object data={resumes[4].resume + '#toolbar=0&navpanes=0&scrollbar=0'} type="application/pdf" className='pdfSaved4'></object>
            </div>


            <div class='non-chat'>
                <NavBar />
            </div>

        </div>
    )
}

export default SavedResumes;