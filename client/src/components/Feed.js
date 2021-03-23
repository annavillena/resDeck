import React, {useState} from 'react';
import './Feed.css';
import SampleResume from "./sampleRes.jpg"
import resume1 from '../uploads/sample_1.pdf'
import resume2 from '../uploads/sample_2.pdf'
import resume3 from '../uploads/sample_3.pdf'
import resume4 from '../uploads/sample_4.pdf'
import resume5 from '../uploads/sample_5.pdf'
import resume6 from '../uploads/sample_6.pdf'

const Feed = () => {
    const [chat, setChat] = useState(false)
    const [currentResume, setCurrentResume] = useState(0)
    const resumes = [resume1, resume2, resume3, resume4, resume5, resume6]

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

    function goChat(){
        if(chat)
        setChat(false)
        else
            setChat(true)
    }
    

    if(chat){
        return <div>Chat Page!</div>
    }

    const nextResume = () => {
        if (currentResume === resumes.length - 1) {
            setCurrentResume(0)
        }
        else {
            setCurrentResume(currentResume + 1)
        }
    }

    const previousResume = () => {
        if (currentResume === 0) {
            setCurrentResume(resumes.length - 1)
        }
        else {
            setCurrentResume(currentResume - 1)
        }
    }


    return (
        <div>

            <div className='feed-background'></div>

            <div className = "_resDeck">
                <svg width="109" height="70" viewBox="0 0 109 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 32.088V42.9911C30.2289 19.4578 40.2628 94.5309 101.621 48.8666C103.808 47.2443 105.673 44.5421 106.985 41.095C108.297 37.6479 108.998 33.6077 109 29.4754C42.057 86.101 31.711 7.50775 1.43214 28.4225C1.00977 28.7145 0.647512 29.2199 0.392203 29.8734C0.136891 30.5268 0.000271976 31.2982 0 32.088Z" fill="#78C2C3"/>
                <path d="M108.713 4.68834C88.6252 -10.9499 77.4554 16.9548 54.2148 24.0381C67.3012 28.0264 84.2176 25.4099 108.713 4.68834Z" fill="#3F6699"/>
                <path d="M0 23.9045C31.2017 -0.389828 40.889 80.3772 107.704 24.9898C108.092 24.6691 108.419 24.1646 108.648 23.5344C108.878 22.9042 109 22.1742 109 21.4287V10.3869C48.315 61.7179 34.1402 1.93173 9.46382 5.88571C6.87737 6.29885 4.47302 8.3757 2.72226 11.7091C0.971499 15.0425 0.000627809 19.3919 0 23.9045Z" fill="#78C2C3"/>
                <path d="M0.286621 49.0766C20.3707 33.4384 31.5424 61.3431 54.7825 68.4277C41.6932 72.4141 24.7802 69.7982 0.286621 49.0766Z" fill="#0D1B4C"/>
                </svg>
            </div>

            <div className = "_menu">
                <svg width="70" height="47" viewBox="0 0 70 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 23.5H68.5" stroke="#0D1B4C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 1H68.5" stroke="#0D1B4C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 46H68.5" stroke="#0D1B4C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

            <div className = "chat" onClick={()=>goChat()}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="38.5" fill="#3F6699" stroke="#3F6699" stroke-width="3"/>
                <path d="M19 48.6667C19 49.8454 19.4683 50.9759 20.3017 51.8094C21.1352 52.6429 22.2657 53.1111 23.4444 53.1111H50.1111L59 62V26.4444C59 25.2657 58.5317 24.1352 57.6983 23.3017C56.8648 22.4683 55.7343 22 54.5556 22H23.4444C22.2657 22 21.1352 22.4683 20.3017 23.3017C19.4683 24.1352 19 25.2657 19 26.4444V48.6667Z" fill="white"/>
                </svg>
            </div>

            <div className = "like" onClick={nextResume}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="38.5" fill="#3F6699" stroke="#3F6699" stroke-width="3"/>
                <path d="M20 60H24C25.1 60 26 59 26 57.7778V37.7778C26 36.5556 25.1 35.5556 24 35.5556H20V60ZM59.66 44.1778C59.88 43.6222 60 43.0222 60 42.4V40C60 37.5556 58.2 35.5556 56 35.5556H45L46.84 25.2222C46.94 24.7333 46.88 24.2 46.68 23.7556C46.22 22.7556 45.64 21.8444 44.92 21.0444L44 20L31.18 34.2444C30.42 35.0889 30 36.2222 30 37.4V54.8222C30 57.6667 32.1 60 34.68 60H50.9C52.3 60 53.62 59.1778 54.34 57.8444L59.66 44.1778Z" fill="white"/>
                </svg>
            </div>

            <div className = "rewind" onClick={previousResume}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="38.5" fill="#78C2C3" stroke="#78C2C3" stroke-width="3"/>
                <path d="M25.8787 25.875C29.5059 22.25 34.4841 20 40.0125 20C51.0694 20 60 28.95 60 40C60 51.05 51.0694 60 40.0125 60C30.6817 60 22.9018 53.625 20.6754 45H25.8787C27.93 50.825 33.4834 55 40.0125 55C48.2927 55 55.0219 48.275 55.0219 40C55.0219 31.725 48.2927 25 40.0125 25C35.8599 25 32.1576 26.725 29.4559 29.45L37.5109 37.5H20V20L25.8787 25.875Z" fill="white"/>
                </svg>
            </div>

            <div className = "skip" onClick={nextResume}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="38.5" fill="#3F6699" stroke="#3F6699" stroke-width="3"/>
                <path d="M42.25 55.9584L62.5 40.5L42.25 25.0417V55.9584Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.5 55.9584L37.75 40.5L17.5 25.0417V55.9584Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

            <div className = "save" onClick={nextResume}>
                <svg width="84" height="82" viewBox="0 0 84 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M82.5 41C82.5 62.7814 64.4018 80.5 42 80.5C19.5982 80.5 1.5 62.7814 1.5 41C1.5 19.2186 19.5982 1.5 42 1.5C64.4018 1.5 82.5 19.2186 82.5 41Z" fill="#78C2C3" stroke="#78C2C3" stroke-width="3"/>
                <rect width="54" height="61" transform="translate(15 12)" fill="#78C2C3"/>
                <path d="M53.25 19.625H30.75C29.5565 19.625 28.4119 20.1606 27.568 21.1139C26.7241 22.0672 26.25 23.3601 26.25 24.7083V65.375L42 57.75L57.75 65.375V24.7083C57.75 23.3601 57.2759 22.0672 56.432 21.1139C55.5881 20.1606 54.4435 19.625 53.25 19.625Z" fill="white"/>
                </svg>
            </div>

            <object data={resumes[currentResume] + '#toolbar=0&navpanes=0&scrollbar=0'} type="application/pdf" className='pdf'></object>

        </div>
    )
   
};

export default Feed;