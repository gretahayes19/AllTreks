import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import { signUp, login, clearErrors } from "../../actions/session_actions";



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
    otherFormText: "Already have an account?",
    otherFormLink: <Link to="/login" className="inline-link">Log in</Link>
})

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(signUp(user)),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())

})

export default connect(mSTP, mDTP)(SessionForm)

