import React, { useState } from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Landing/Landing";
import NotFound from "./views/NotFound";
import SignIn from "./components/SignIn";
import Feed from "./components/Feed";
import httpUser from "./httpUser";

const App = () => {
  const [currentUser, setCurrentUser] = useState(httpUser.getCurrentUser());

  return (
    <div>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route path="/Signup" render={(props) => {
            return <SignIn {...props} setCurrentUser={setCurrentUser}/>
        }} />
        <Route exact path="/Feed" component={Feed} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
