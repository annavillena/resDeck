import React, { useState } from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Landing/Landing";
import NotFound from "./views/NotFound";
import SignIn from "./components/SignIn";
import Feed from "./components/Feed";
import httpUser from "./httpUser";
import NavBar from "./components/NavBar/NavBar";
import Logout from "./Logout";

const App = () => {
  const [currentUser, setCurrentUser] = useState(httpUser.getCurrentUser());
  const OnLogout = () => {
    httpUser.logOut();
    setCurrentUser(null);
  };

  return (
    <div>
      {
        currentUser && 
        <NavBar currentUserName={currentUser.name}/>
      }
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route path="/Signup" render={(props) => {
            return <SignIn {...props} setCurrentUser={setCurrentUser}/>
        }} />
        <Route exact path="/Feed" component={Feed} />
        <Route path="/Logout" render={(props) => {
            return <Logout Logout={OnLogout} />
        }}/>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
