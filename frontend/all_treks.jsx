import React from 'react'
import ReactDOM from 'react-dom'
import {signUp, login, logout} from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
    let root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to AllTreks</h1>, root)
})

window.signUp = signUp;
window.login = login;
window.logout = logout;