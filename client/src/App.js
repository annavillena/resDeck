import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound";
import NavBar from "./components/Header/NavBar";
import SignIn from "./components/SignIn";
import Feed from "./components/Feed";
import Login from "./components/Login";


const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Home" component={Feed} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/">
          <Redirect to="/Login" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
