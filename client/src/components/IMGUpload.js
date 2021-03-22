import React, { Fragment, useState } from 'react';
import Message from './Message';
import axios from 'axios';
import {Button, ButtonGroup, ToggleButton, Radio} from 'react-bootstrap'
import './FileUpload.css';

// Code from https://www.youtube.com/watch?v=b6Oe2puTdMQ (Tutorial on File Uploading using React)

const IMGUpload = (props) => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose Profile Image');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const icon = <svg width="58" height="56" viewBox="0 0 58 56" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M52.9016 9H5.81117C4.80937 9 4 9.7689 4 10.7206V45.1328C4 46.0846 4.80937 46.8535 5.81117 46.8535H52.9016C53.9034 46.8535 54.7128 46.0846 54.7128 45.1328V10.7206C54.7128 9.7689 53.9034 9 52.9016 9ZM50.6376 42.9821H8.07513V40.8367L15.9141 32.0024L24.4096 41.5733L37.6255 26.69L50.6376 41.3475V42.9821ZM50.6376 36.0028L37.9708 21.7325C37.7896 21.5282 37.4614 21.5282 37.2803 21.7325L24.4096 36.2287L16.2594 27.0503C16.0782 26.846 15.75 26.846 15.5688 27.0503L8.07513 35.492V12.8714H50.6376V36.0028ZM17.5838 24.9157C18.2379 24.9157 18.8855 24.7933 19.4898 24.5555C20.0941 24.3177 20.6432 23.9692 21.1057 23.5298C21.5682 23.0904 21.9351 22.5688 22.1854 21.9947C22.4357 21.4206 22.5645 20.8053 22.5645 20.184C22.5645 19.5626 22.4357 18.9473 22.1854 18.3732C21.9351 17.7992 21.5682 17.2775 21.1057 16.8382C20.6432 16.3988 20.0941 16.0503 19.4898 15.8125C18.8855 15.5747 18.2379 15.4523 17.5838 15.4523C16.2628 15.4523 14.9959 15.9508 14.0619 16.8382C13.1278 17.7255 12.6031 18.9291 12.6031 20.184C12.6031 21.4389 13.1278 22.6424 14.0619 23.5298C14.9959 24.4171 16.2628 24.9157 17.5838 24.9157ZM17.5838 18.6784C18.4611 18.6784 19.1686 19.3506 19.1686 20.184C19.1686 21.0174 18.4611 21.6895 17.5838 21.6895C16.7065 21.6895 15.999 21.0174 15.999 20.184C15.999 19.3506 16.7065 18.6784 17.5838 18.6784Z" fill="#3F6699"/>
  </svg>;

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  async function onSubmit() {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

     // setMessage('File Uploaded');
    } catch (err) {
    //   if (err.response.status === 500) {
    //     setMessage('There was a problem with the server');
    //   } else {
    //     setMessage(err.response.data.msg);
    //   }
    }
  };

  if(props.upload == 'yes'){
    onSubmit();
  }

  return (
    <>
        <h1 className='txt'>
            {filename}
        </h1>
        <span className='icon'>
          {icon}
        </span>
    <Fragment>
      {/* {message ? <Message msg={message} /> : null} */}
        <div className="input-group">
          <div className='custom-file'>
            
            <input type='file' className='custom-file-input' id='customFile' onChange={onChange} accept="image/*"/>
            
          </div>
        </div>
    </Fragment>
    </>
  );
};

export default IMGUpload;
