import React, { useState } from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Landing/Landing";
import NotFound from "./views/NotFound";
import SignIn from "./components/SignIn";
import Feed from "./components/Feed";
import httpUser from "./httpUser";
import NavBar from "./components/NavBar/NavBar";
import Logout from "./Logout";
import Login from "./components/Login";
import LinkedIn from "./components/LinkedIn"
import SavedResumes from "./components/SavedResumes"
import resume1 from './uploads/sample_1.pdf'
import resume2 from './uploads/sample_2.pdf'
import resume3 from './uploads/sample_3.pdf'
import resume4 from './uploads/sample_4.pdf'
import resume5 from './uploads/sample_5.pdf'
import resume6 from './uploads/sample_6.pdf'
import resume7 from './uploads/sample_7.pdf'
import resume8 from './uploads/sample_8.pdf'
import resume9 from './uploads/sample_9.pdf'
import resume10 from './uploads/sample_10.pdf'
import resume11 from './uploads/sample_11.pdf'
import resume12 from './uploads/sample_12.pdf'

const App = () => {
  const [sResumes, setSavedResumes] = useState([])
  const [resumes, setResumes] = useState([
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
  ]);
  const [currentUser, setCurrentUser] = useState(httpUser.getCurrentUser());
  const [chatIsOpen, setChatIsOpen] = useState(false);
  const OnLogout = () => {
    httpUser.logOut();
    setCurrentUser(null);
  };

  return (
    <div>
      {
        currentUser && !chatIsOpen &&
        <NavBar currentUserName={currentUser.name}/>
      }
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route path="/Signup" render={(props) => {
            return <SignIn {...props} setCurrentUser={setCurrentUser}/>
        }} />
        <Route path="/Feed" render={(props) => {
            return <Feed {...props} currentUserName={currentUser.name} setChatIsOpen={setChatIsOpen} resumes={resumes} setResumes={setResumes} savedResumes={sResumes} setSavedResumes={setSavedResumes}/>
        }} />
        <Route exact path="/saved-resumes" render={(props) => {
            return <SavedResumes {...props} resumes={sResumes} setSavedResumes={setSavedResumes}/>
        }} />
        <Route path="/Logout" render={(props) => {
            return <Logout Logout={OnLogout} />
        }}/>
        <Route path="/Login" render={(props) => {
            return <Login {...props} setCurrentUser={setCurrentUser}/>
        }} />
        <Route path="/LinkedIn" render={(props) => {
            return <LinkedIn {...props} currentUserID={currentUser._id}/>
        }} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
