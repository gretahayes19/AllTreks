import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import { signUp, login } from "../../actions/session_actions";



const mSTP = (state) => ({
    errors: state.errors.session,
    formTitle: "Create your free account",
    formType: "Sign up",
    initialState: {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    },
    otherFormText: "Don't have an account?",
    otherFormLink: <Link to="/signup" className="inline-link">Sign up for free</Link>
})

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(signUp(user)),
    login: (user) => dispatch(login(user)),
})

export default connect(mSTP, mDTP)(SessionForm)

