import React, { useState, Fragment } from 'react';
import './SignIn.css';
import SampleResume from "./sampleRes.jpg"
import axios from 'axios'
import httpUser from '../httpUser'
import {Button, ButtonGroup, ToggleButton, Radio} from 'react-bootstrap'
import LinkedIn from "./LinkedIn"
import './FileUpload.css';

const SignIn = (props) => {
    const [fields, setFields] = useState({firstName: "", lastName: "", email: "", password: ""});
    const [userRole, setUserRole] = useState('');
    const [resumeFile, setResumeFile] = useState('');
    const [resumeFilename, setResumeFilename] = useState('Choose Resume PDF');
    const [imageFile, setImageFile] = useState('');
    const [imageFilename, setImageFilename] = useState('Choose Profile Image');
    const resumeIcon = <svg width="58" height="56" viewBox="0 0 58 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M54.4083 31.4944V28.0532H43.7224V45.2593H47.2844V38.3769H52.6273V34.9357H47.2844V31.4944H54.4083Z" fill="#3F6699"/>
    <path d="M34.8174 45.2593H27.6935V28.0532H34.8174C36.234 28.0546 37.5922 28.5989 38.5939 29.5666C39.5956 30.5343 40.159 31.8465 40.1604 33.2151V40.0975C40.159 41.4661 39.5956 42.7782 38.5939 43.746C37.5922 44.7137 36.234 45.258 34.8174 45.2593ZM31.2555 41.8181H34.8174C35.2896 41.8177 35.7423 41.6362 36.0762 41.3137C36.4101 40.9911 36.5979 40.5537 36.5984 40.0975V33.2151C36.5979 32.7589 36.4101 32.3215 36.0762 31.9989C35.7423 31.6763 35.2896 31.4949 34.8174 31.4944H31.2555V41.8181Z" fill="#3F6699"/>
    <path d="M20.5696 28.0532H11.6647V45.2593H15.2266V40.0975H20.5696C21.5139 40.0961 22.419 39.7331 23.0867 39.0881C23.7544 38.443 24.1301 37.5685 24.1316 36.6563V31.4944C24.1306 30.5821 23.755 29.7073 23.0872 29.0621C22.4194 28.417 21.514 28.0541 20.5696 28.0532ZM15.2266 36.6563V31.4944H20.5696L20.5714 36.6563H15.2266Z" fill="#3F6699"/>
    <path d="M40.1604 24.612V17.7296C40.1667 17.5035 40.1222 17.2787 40.03 17.0708C39.9378 16.8629 39.8 16.6767 39.6262 16.5252L27.1593 4.48088C27.0025 4.31285 26.8098 4.17969 26.5946 4.09057C26.3793 4.00146 26.1467 3.95851 25.9126 3.9647H8.10274C7.15891 3.96742 6.25455 4.33085 5.58716 4.97562C4.91977 5.62038 4.54359 6.49409 4.54077 7.40592V48.7006C4.54077 49.6133 4.91605 50.4886 5.58405 51.1339C6.25205 51.7793 7.15805 52.1418 8.10274 52.1418H36.5985V48.7006H8.10274V7.40592H22.3506V17.7296C22.3534 18.6414 22.7296 19.5151 23.397 20.1599C24.0644 20.8047 24.9688 21.1681 25.9126 21.1708H36.5985V24.612H40.1604ZM25.9126 17.7296V8.09417L35.8861 17.7296H25.9126Z" fill="#3F6699"/>
    </svg>;
     const imageIcon = <svg width="58" height="56" viewBox="0 0 58 56" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M52.9016 9H5.81117C4.80937 9 4 9.7689 4 10.7206V45.1328C4 46.0846 4.80937 46.8535 5.81117 46.8535H52.9016C53.9034 46.8535 54.7128 46.0846 54.7128 45.1328V10.7206C54.7128 9.7689 53.9034 9 52.9016 9ZM50.6376 42.9821H8.07513V40.8367L15.9141 32.0024L24.4096 41.5733L37.6255 26.69L50.6376 41.3475V42.9821ZM50.6376 36.0028L37.9708 21.7325C37.7896 21.5282 37.4614 21.5282 37.2803 21.7325L24.4096 36.2287L16.2594 27.0503C16.0782 26.846 15.75 26.846 15.5688 27.0503L8.07513 35.492V12.8714H50.6376V36.0028ZM17.5838 24.9157C18.2379 24.9157 18.8855 24.7933 19.4898 24.5555C20.0941 24.3177 20.6432 23.9692 21.1057 23.5298C21.5682 23.0904 21.9351 22.5688 22.1854 21.9947C22.4357 21.4206 22.5645 20.8053 22.5645 20.184C22.5645 19.5626 22.4357 18.9473 22.1854 18.3732C21.9351 17.7992 21.5682 17.2775 21.1057 16.8382C20.6432 16.3988 20.0941 16.0503 19.4898 15.8125C18.8855 15.5747 18.2379 15.4523 17.5838 15.4523C16.2628 15.4523 14.9959 15.9508 14.0619 16.8382C13.1278 17.7255 12.6031 18.9291 12.6031 20.184C12.6031 21.4389 13.1278 22.6424 14.0619 23.5298C14.9959 24.4171 16.2628 24.9157 17.5838 24.9157ZM17.5838 18.6784C18.4611 18.6784 19.1686 19.3506 19.1686 20.184C19.1686 21.0174 18.4611 21.6895 17.5838 21.6895C16.7065 21.6895 15.999 21.0174 15.999 20.184C15.999 19.3506 16.7065 18.6784 17.5838 18.6784Z" fill="#3F6699"/>
     </svg>;
  
    const onResumeChange = (e) => {
      setResumeFile(e.target.files[0]);
      setResumeFilename(e.target.files[0].name);
    };

    const onImageChange = (e) => {
        setImageFile(e.target.files[0]);
        setImageFilename(e.target.files[0].name);
    };
  
    const uploadResume = async () => {
      const formData = new FormData();
      formData.append('file', resumeFile);
  
      try {
        const res = await axios.post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        const { fileName, filePath } = res.data;
        return filePath;
      } catch (err) {
        // if (err.response.status === 500) {
        //   setMessage('There was a problem with the server');
        // } else {
        //   setMessage(err.response.data.msg);
        // }
      }
    };

    const uploadImage = async () => {
        const formData = new FormData();
        formData.append('file', imageFile);
    
        try {
          const res = await axios.post('/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          const { fileName, filePath } = res.data;
          return filePath;
        } catch (err) {
        //   if (err.response.status === 500) {
        //     setMessage('There was a problem with the server');
        //   } else {
        //     setMessage(err.response.data.msg);
        //   }
        }
    }

    console.log(fields);
    console.log(userRole);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let resumeFilepath = '';
        let imageFilepath = '';
        if (resumeFile !== '') {
            resumeFilepath = await uploadResume();
        }
        if (imageFile !== '') {
            imageFilepath = await uploadImage();
        }
        const userInfo = {
            name: fields.firstName + " " + fields.lastName,
            email: fields.email,
            password: fields.password,
            isJobSeeker: userRole === "Job-Seeker" ? true : false,
            isProfessional: userRole === "Professional" ? true : false,
            resumeFilepath: resumeFilepath,
            headshotFilepath: imageFilepath
        };

        const user = await httpUser.signUp(userInfo);
        console.log(user);
        if (user === 200) {
            const loggedInUser = await httpUser.logIn({email: fields.email, password: fields.password });
            if (loggedInUser) {
                props.setCurrentUser(httpUser.getCurrentUser());
                props.history.push('/LinkedIn');
            }
        }
    }

    const onInputChange = (e) => {
        e.persist();
        setFields(fields => ({...fields, [e.target.name]: e.target.value}));
    }

    const onRadioChange = (e) => {
        setUserRole(e.target.value);
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

            <div className="rectSignIn"></div>
            <div className="signUpTitle">Sign Up</div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="signHeadingFirst">First Name</div>
                    <input className = "inputBoxFirst" type="text" name='firstName' value={fields.firstName} onChange={onInputChange}/>
                    <div className="signHeadingLast">Last Name</div>
                    <input className = "inputBoxLast" type="text" name='lastName' value={fields.lastName} onChange={onInputChange}/>
                    <div className="signHeadingEmail">Email</div>
                    <input className = "inputBoxEmailSignIn" type="text" name='email' value={fields.email} onChange={onInputChange}/>
                    <div className="signHeadingPass">Password</div>
                    <input className = "inputBoxPassSignIn" type="password" name='password' value={fields.password} onChange={onInputChange}/>
                    <div className="signHeadingInterested">Roles that I am Interested in:</div>
                    <input className = "inputBoxInterested" type="text"/>

                    <div className="signHeadingRole">I am a...</div>
                    <div className = "radioButtons" onChange={onRadioChange}>
                        <input name="userType" type="radio" value="Job-Seeker" className="job-seeker"/> Job-Seeker
                        <input name="userType" type="radio" value="Professional" className="professional"/> Professional
                    </div>
                        
                        <div className='addResume'>
                            <h1 className='txt'>
                                {resumeFilename}
                            </h1>
                            <span className='icon'>
                                {resumeIcon}
                            </span>
                            <Fragment>
                                <div className="input-group">
                                <div className='custom-file'>
                                    <input type='file' className='custom-file-input' id='customFile' onChange={onResumeChange} accept="application/PDF"/>
                                    <label className='custom-file-label'>
                                    {resumeFilename}
                                    </label>
                                </div>
                                </div>
                            </Fragment> 
                        </div>

                        <div className='addHeadshot'>
                            <h1 className='txt'>
                                {imageFilename}
                            </h1>
                            <span className='icon'>
                                {imageIcon}
                            </span>
                            <Fragment>
                                <div className="input-group">
                                <div className='custom-file'>
                                    <input type='file' className='custom-file-input' id='customFile' onChange={onImageChange} accept="image/*"/>
                                </div>
                                </div>
                            </Fragment>    
                        </div>
            
                    <div className='signBtnPosition'><Button className="signBtn" type='submit'>CREATE ACCOUNT</Button></div>
                </form>
            </div>
        </div>
    )
};

export default SignIn;