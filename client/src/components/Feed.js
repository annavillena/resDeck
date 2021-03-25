import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components'
import './Feed.css';
import Chat from '../components/Chat/Chat'
import resume1 from '../uploads/sample_1.pdf'
import resume2 from '../uploads/sample_2.pdf'
import resume3 from '../uploads/sample_3.pdf'
// import resume4 from '../uploads/sample_4.pdf'
//import resume5 from '../uploads/sample_5.pdf'
import resume6 from '../uploads/sample_6.pdf'
import resume7 from '../uploads/sample_7.pdf'
import resume8 from '../uploads/sample_8.pdf'
import resume9 from '../uploads/sample_9.pdf'
import resume10 from '../uploads/sample_10.pdf'
import resume11 from '../uploads/sample_11.pdf'
import resume12 from '../uploads/sample_12.pdf'


const ChatContainer = styled.div`
    position: absolute;
    left: -33vw;
    top: 0;
    width: 33vw;
    height: 100vh;
    z-index: 99;
    opacity: 0;

    transition: left 0.5s, opacity 0.01s;
`


const Feed = (props) => {
    const [chat, setChat] = useState(false)
    const [currentResume, setCurrentResume] = useState(0)
    const [currentMessages, setCurrentMessages] = useState([])
    const [liking, setLiking] = useState(false)
    const [rewinding, setRewinding] = useState(false)
    const [skipping, setSkipping] = useState(false)
    const [saving, setSaving] = useState(false)
    
    const SaveResume = () =>{
        props.setSavedResumes(props.savedResumes.concat(props.resumes[currentResume]))
    }
    const previousValues = useRef({ currentResume, liking, rewinding, skipping, saving })

    const checkKey = (e) => {
        e = e || window.event;
        // if (e.keyCode == '38') {
           
        // }
        if (e.keyCode == '40') {
            nextResume()
            setSkipping(true);
        }
        else if (e.keyCode == '37' && !chat) {
            toggleChat();
        }
        else if (e.keyCode == '39' && !chat) {
            nextResume()
            setLiking(true)
        }
        // else if (e.keycode == '32' && !chat) {
        //     nextResume()
        //     setSkipping(true);
        // }
    }

    // document.body.onkeyup = function(e){
    //     if((e.keyCode === 32 || e.key === 'Spacebar') && !chat){
    //         nextResume()
    //         setSkipping(true);
    //     }
    // }

    document.onkeydown = checkKey;

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
        // {
        //     resume: resume4, 
        //     name: 'Name'
        // }, 
        // {
        //     resume: resume5, 
        //     name: 'Entry Level Resume Guide'
        // }, 
        {
            resume: resume6, 
            name: 'Sam Student'
        },
        {
            resume: resume7, 
            name: 'Matthew Winston'
        },
        {
            resume: resume8, 
            name: 'Craig Novak'
        },
        {
            resume: resume9, 
            name: 'Jane Sample'
        },
        {
            resume: resume10, 
            name: 'Nancy Quinn'
        },
        {
            resume: resume11, 
            name: 'Thomas Miccali'
        },
        {
            resume: resume12, 
            name: 'Jonathan Philipps'
        },
    ]

    // const testFolder = '../uploads/';

    // fs.readdirSync(testFolder).forEach(file => {
    //     console.log(file);
    // });

    // async function next() {
    //     try {
    //       const res = await axios.get('/upload', {
    //         params: {
    //           'folderPath': '../uploads/'
    //         }
    //       });
    //       console.log(response);
    //     } catch(err){
    //         console.error(error);
    //     }
    // }

    function toggleChat() {
        if (chat) {
            const el = document.getElementById('savedHeader')
            el.style.animation = 'none';
            void el.offsetHeight; /* trigger reflow */
            el.style.animation = null; 

            const chat = document.getElementById('chat')
            chat.style.transition = 'left 0.5s, opacity 2s'
            chat.style.left = '-33vw'
            chat.style.opacity = '0'
            document.getElementById('close-chat-button').style.right = '-60px'

            const currentPdf = document.getElementById('current-pdf')
            currentPdf.style.transition = 'left 0.5s, top 0.5s'
            currentPdf.style.left = '50%'
            currentPdf.style.top = '44%'
            // currentPdf.style.height = '84vh'
            // currentPdf.style.width = '65vh'
            document.querySelectorAll('.non-chat').forEach(e => e.style.opacity = '1')
        }
        else {
            const el = document.getElementById('savedHeader')
            el.style.animation = 'none';
            void el.offsetHeight; /* trigger reflow */
            el.style.animation = null; 

            const chat = document.getElementById('chat')
            chat.style.transition = 'left 0.5s, opacity 0.01s'
            chat.style.left = '0'
            chat.style.opacity = '1'
            document.getElementById('close-chat-button').style.right = '40px'

            const currentPdf = document.getElementById('current-pdf')
            currentPdf.style.transition = 'left 0.5s, top 0.5s'
            currentPdf.style.left = '62.5%'
            currentPdf.style.top = '50%'
            // currentPdf.style.height = '100vh'
            // currentPdf.style.width = '90vh'
            document.querySelectorAll('.non-chat').forEach(e => e.style.opacity = '0')
        }
        setChat(!chat)
        props.setChatIsOpen(!chat)
    }
    
    /* Set next resume state */
    const nextResume = () => {
        currentMessages.length = 0
        if (currentResume === props.resumes.length - 1) {
            setCurrentResume(0)
        }
        else {
            setCurrentResume(currentResume + 1)
        }
    }
    
    /* Set previous resume state */
    const previousResume = () => {
        currentMessages.length = 0
        if (currentResume === 0) {
            setCurrentResume(props.resumes.length - 1)
        }
        else {
            setCurrentResume(currentResume - 1)
        }
    }

    /* Whenever state changes... */
    useEffect(() => {
        // const savedHeader = document.getElementById('savedHeader')
        // savedHeader.style.visibility = 'hidden'
        /* Liking */
        if (previousValues.current.liking != liking && previousValues.current.currentResume != currentResume) {
            const el = document.getElementById('savedHeader')
            el.style.animation = 'none';
            void el.offsetHeight; /* trigger reflow */
            el.style.animation = null;

            const nextPdf = document.getElementById('next-pdf')
            nextPdf.style.visibility = 'visible'
            
            const currentPdf = document.getElementById('current-pdf')
            currentPdf.style.transition = 'left 1s'
            currentPdf.style.top = '44%'
            currentPdf.style.left = '248vh'
            
            nextPdf.id = 'current-pdf'
            if (document.getElementById('previous-pdf')) {
                document.getElementById('previous-pdf').remove()
            }
            currentPdf.id = 'previous-pdf'
            
            const newNextPdf = document.createElement('object')
            newNextPdf.id = 'next-pdf'
            newNextPdf.data = props.resumes[currentResume + 1 === props.resumes.length ? 0 : currentResume + 1].resume + '#toolbar=0&navpanes=0&scrollbar=0'
            newNextPdf.type = 'application/pdf'
            nextPdf.parentElement.appendChild(newNextPdf)

            setLiking(false)
            previousValues.current.currentResume = currentResume
        }

        /* Rewinding */
        else if (previousValues.current.rewinding != rewinding && previousValues.current.currentResume != currentResume) {
            const el = document.getElementById('savedHeader')
            el.style.animation = 'none';
            void el.offsetHeight; /* trigger reflow */
            el.style.animation = null; 

            const previousPdf = document.getElementById('previous-pdf')
            previousPdf.style.transition = 'top 0.75s, left 1s'
            previousPdf.style.top = '44%'
            previousPdf.style.left = '50%'
    
            const currentPdf = document.getElementById('current-pdf')
            currentPdf.style.transition = 'visibility 1s'
            currentPdf.style.visibility = 'hidden'
    
            previousPdf.id = 'current-pdf'
            if (document.getElementById('next-pdf')) {
                document.getElementById('next-pdf').remove()
            }
            currentPdf.id = 'next-pdf'

            setRewinding(false)
            previousValues.current.currentResume = currentResume
        }

        /* Skipping */
        else if (previousValues.current.skipping != skipping && previousValues.current.currentResume != currentResume) {
            const el = document.getElementById('savedHeader')
            el.style.animation = 'none';
            void el.offsetHeight; /* trigger reflow */
            el.style.animation = null; 

            const nextPdf = document.getElementById('next-pdf')
            nextPdf.style.visibility = 'visible'
            
            const currentPdf = document.getElementById('current-pdf')
            currentPdf.style.transition = 'top 1s'
            currentPdf.style.left = '50%'
            currentPdf.style.top = '145vh'
            
            nextPdf.id = 'current-pdf'
            if (document.getElementById('previous-pdf')) {
                document.getElementById('previous-pdf').remove()
            }
            currentPdf.id = 'previous-pdf'
            
            const newNextPdf = document.createElement('object')
            newNextPdf.id = 'next-pdf'
            newNextPdf.data = props.resumes[currentResume + 1 === props.resumes.length ? 0 : currentResume + 1].resume + '#toolbar=0&navpanes=0&scrollbar=0'
            newNextPdf.type = 'application/pdf'
            nextPdf.parentElement.appendChild(newNextPdf)

            setSkipping(false)
            previousValues.current.currentResume = currentResume
        }

        else if (previousValues.current.saving != saving) {
            const currentPdf = document.getElementById('current-pdf')
            currentPdf.style.animation = 'fadeoutin 1s linear forwards'

            const savedHeader = document.getElementById('savedHeader')

            savedHeader.style.animation = 'fadeinout 2s linear'
            
            setSaving(false)
        }
    })

    return (
        <div>

            <div className='feed-background'></div>

            <div className='savedHeader' id='savedHeader'><h1>Saved!</h1></div>

            <ChatContainer id='chat' >
                <Chat user={props.currentUserName || 'Wally Worker'} otherUser={props.resumes[currentResume].name} messages={currentMessages} />
            </ChatContainer>

            <svg id='close-chat-button' onClick={toggleChat} width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M54 26.2733V28.6653C53.9968 34.272 52.1813 39.7274 48.8243 44.218C45.4672 48.7086 40.7485 51.9937 35.3719 53.5834C29.9953 55.1731 24.2489 54.9822 18.9896 53.0392C13.7304 51.0962 9.2401 47.5051 6.1885 42.8016C3.13689 38.0981 1.68746 32.5342 2.05636 26.9397C2.42526 21.3451 4.59274 16.0197 8.23553 11.7577C11.8783 7.4956 16.8012 4.52527 22.2701 3.28965C27.7389 2.05404 33.4607 2.61935 38.582 4.90127" stroke="#0D1B4C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M53.9997 7.86536L27.9997 33.8913L20.1997 26.0914" stroke="#0D1B4C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <div className = "chat non-chat" onClick={toggleChat}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="38.5" fill="#3F6699" stroke="#3F6699" stroke-width="3"/>
                <path d="M19 48.6667C19 49.8454 19.4683 50.9759 20.3017 51.8094C21.1352 52.6429 22.2657 53.1111 23.4444 53.1111H50.1111L59 62V26.4444C59 25.2657 58.5317 24.1352 57.6983 23.3017C56.8648 22.4683 55.7343 22 54.5556 22H23.4444C22.2657 22 21.1352 22.4683 20.3017 23.3017C19.4683 24.1352 19 25.2657 19 26.4444V48.6667Z" fill="white"/>
                </svg>
            </div>

            <div className = "like non-chat" onClick={() => { nextResume(); setLiking(true) }}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="38.5" fill="#3F6699" stroke="#3F6699" stroke-width="3"/>
                <path d="M20 60H24C25.1 60 26 59 26 57.7778V37.7778C26 36.5556 25.1 35.5556 24 35.5556H20V60ZM59.66 44.1778C59.88 43.6222 60 43.0222 60 42.4V40C60 37.5556 58.2 35.5556 56 35.5556H45L46.84 25.2222C46.94 24.7333 46.88 24.2 46.68 23.7556C46.22 22.7556 45.64 21.8444 44.92 21.0444L44 20L31.18 34.2444C30.42 35.0889 30 36.2222 30 37.4V54.8222C30 57.6667 32.1 60 34.68 60H50.9C52.3 60 53.62 59.1778 54.34 57.8444L59.66 44.1778Z" fill="white"/>
                </svg>
            </div>

            <div className = "rewind non-chat" onClick={() => { if (!document.getElementById('previous-pdf')) { return } previousResume(); setRewinding(true) }}>
                <svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="38.5" fill="#78C2C3" stroke="#78C2C3" stroke-width="3"/>
                <path d="M25.8787 25.875C29.5059 22.25 34.4841 20 40.0125 20C51.0694 20 60 28.95 60 40C60 51.05 51.0694 60 40.0125 60C30.6817 60 22.9018 53.625 20.6754 45H25.8787C27.93 50.825 33.4834 55 40.0125 55C48.2927 55 55.0219 48.275 55.0219 40C55.0219 31.725 48.2927 25 40.0125 25C35.8599 25 32.1576 26.725 29.4559 29.45L37.5109 37.5H20V20L25.8787 25.875Z" fill="white"/>
                </svg>
            </div>

            <div className = "skip non-chat" onClick={() => { nextResume(); setSkipping(true) }}>
                <svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="38.5" fill="#3F6699" stroke="#3F6699" stroke-width="3"/>
                <path d="M42.25 55.9584L62.5 40.5L42.25 25.0417V55.9584Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.5 55.9584L37.75 40.5L17.5 25.0417V55.9584Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

            <div className = "save non-chat" onClick={()=> { SaveResume(); setSaving(true) }}>
                <svg width="60" height="60" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                <circle id="svg_1" stroke-width="3" stroke="#78C2C3" fill="#78C2C3" r="38.5" cy="40" cx="40"/>
                <path id="svg_2" fill="white" d="m51.25,17.625l-22.5,0c-1.1935,0 -2.3381,0.5356 -3.182,1.4889c-0.8439,0.9533 -1.318,2.2462 -1.318,3.5944l0,40.6667l15.75,-7.625l15.75,7.625l0,-40.6667c0,-1.3482 -0.4741,-2.6411 -1.318,-3.5944c-0.8439,-0.9533 -1.9885,-1.4889 -3.182,-1.4889z"/>
                </svg>
            </div>

            <object data={props.resumes[0].resume + '#toolbar=0&navpanes=0&scrollbar=0'} type="application/pdf" id='current-pdf'></object>
            <object data={props.resumes[1].resume + '#toolbar=0&navpanes=0&scrollbar=0'} type="application/pdf" id='next-pdf'></object>

        </div>
    )
   
};

export default Feed;