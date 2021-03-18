import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Landing/Landing";
import PersonalProfile from "./views/PersonalProfile/PersonalProfile";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={PersonalProfile} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
