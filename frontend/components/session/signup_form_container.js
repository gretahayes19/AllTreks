import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import { signup, login } from "../../actions/session_actions";



const mSTP = (state) => ({
    errors: state.errors.session,
    formTitle: "Create your free account",
    formType: "Sign up",
    initialState: {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    }
})

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(login(user))
})

export default connect(mSTP, mDTP)(SessionForm)

