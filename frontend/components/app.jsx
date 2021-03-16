import React from "react";
import SessionForm from './session/session_form'
import { Route } from "react-router-dom";
import SignUpFormContainer from './session/signup_form_container'

const App = () => (
    <div>
        <h1>Welcome to AllTreks!!!</h1>
        <SignUpFormContainer />
    </div>
);

export default App;