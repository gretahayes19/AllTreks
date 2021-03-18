import React from "react";
import { Route } from "react-router-dom";
import SignUpFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import NavBarContainer from './nav/nav_container'
import HomeContainer from './home/home_container'
import ParksContainer from './parks/parks_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'

const App = () => (
    <div>
        <header>
            <NavBarContainer />
        </header>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/parks/:parkId" component={ParksContainer} />
        <AuthRoute path="/signup" component={SignUpFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
    </div>
);

export default App;