import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound";
import NavBar from "./components/Header/NavBar";
import SignIn from "./components/SignIn";
import Feed from "./components/Feed";


const App = () => {
  return (
    <div>
   
    <Switch>
      <Route exact path="/Home" component={SignIn} />
      <Route exact path="/">
        <Redirect to="/Home" />
      </Route>
      <Route component={NotFound}/>
    </Switch>
    <SignIn/>
  </div>
  );
}

export default App;
