import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import { login } from "../../actions/session_actions";



const mSTP = (state) => ({
    errors: state.errors.session,
    formTitle: "Log in and let's get going",
    formType: "Log in",
    initialState: {
        email: "",
        password: ""
    },
    otherFormText: "Don't have an account?",
    otherFormLink: <Link to="/signup" className="inline-link">Sign up</Link>
})

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
})

export default connect(mSTP, mDTP)(SessionForm)

