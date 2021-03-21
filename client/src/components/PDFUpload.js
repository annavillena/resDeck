import React, { Fragment, useState } from 'react';
import Message from './Message';
import axios from 'axios';
import {Button, ButtonGroup, ToggleButton, Radio} from 'react-bootstrap'
import './FileUpload.css';

// Code from https://www.youtube.com/watch?v=b6Oe2puTdMQ (Tutorial on File Uploading using React)

const PDFUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose Resume PDF');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const icon = <svg width="58" height="56" viewBox="0 0 58 56" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M54.4083 31.4944V28.0532H43.7224V45.2593H47.2844V38.3769H52.6273V34.9357H47.2844V31.4944H54.4083Z" fill="#3F6699"/>
  <path d="M34.8174 45.2593H27.6935V28.0532H34.8174C36.234 28.0546 37.5922 28.5989 38.5939 29.5666C39.5956 30.5343 40.159 31.8465 40.1604 33.2151V40.0975C40.159 41.4661 39.5956 42.7782 38.5939 43.746C37.5922 44.7137 36.234 45.258 34.8174 45.2593ZM31.2555 41.8181H34.8174C35.2896 41.8177 35.7423 41.6362 36.0762 41.3137C36.4101 40.9911 36.5979 40.5537 36.5984 40.0975V33.2151C36.5979 32.7589 36.4101 32.3215 36.0762 31.9989C35.7423 31.6763 35.2896 31.4949 34.8174 31.4944H31.2555V41.8181Z" fill="#3F6699"/>
  <path d="M20.5696 28.0532H11.6647V45.2593H15.2266V40.0975H20.5696C21.5139 40.0961 22.419 39.7331 23.0867 39.0881C23.7544 38.443 24.1301 37.5685 24.1316 36.6563V31.4944C24.1306 30.5821 23.755 29.7073 23.0872 29.0621C22.4194 28.417 21.514 28.0541 20.5696 28.0532ZM15.2266 36.6563V31.4944H20.5696L20.5714 36.6563H15.2266Z" fill="#3F6699"/>
  <path d="M40.1604 24.612V17.7296C40.1667 17.5035 40.1222 17.2787 40.03 17.0708C39.9378 16.8629 39.8 16.6767 39.6262 16.5252L27.1593 4.48088C27.0025 4.31285 26.8098 4.17969 26.5946 4.09057C26.3793 4.00146 26.1467 3.95851 25.9126 3.9647H8.10274C7.15891 3.96742 6.25455 4.33085 5.58716 4.97562C4.91977 5.62038 4.54359 6.49409 4.54077 7.40592V48.7006C4.54077 49.6133 4.91605 50.4886 5.58405 51.1339C6.25205 51.7793 7.15805 52.1418 8.10274 52.1418H36.5985V48.7006H8.10274V7.40592H22.3506V17.7296C22.3534 18.6414 22.7296 19.5151 23.397 20.1599C24.0644 20.8047 24.9688 21.1681 25.9126 21.1708H36.5985V24.612H40.1604ZM25.9126 17.7296V8.09417L35.8861 17.7296H25.9126Z" fill="#3F6699"/>
</svg>;

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
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

      setMessage('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            {icon}
          </div>
          <div className='custom-file'>
            <input type='file' className='custom-file-input' id='customFile' onChange={onChange} accept="application/PDF"/>
            <label className='custom-file-label'>
              {filename}
            </label>
          </div>
        </div>

        {/* submit upload button: <input type='submit' value='Upload' className='btn btn-primary btn-block mt-4'/> */}
      </form>
      {/* file preview after submission: {uploadedFile ? (
        <object data={uploadedFile.filePath} type="application/pdf" width="200" height="259">
        </object>
      ) : null} */}
    </Fragment>
  );
};

export default PDFUpload;
