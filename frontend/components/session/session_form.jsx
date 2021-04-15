import React from 'react'


class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.initialState;
    
        this.handleSubmit = this.handleSubmit.bind(this)
        this.demo = this.demo.bind(this)
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    demo(e) {
        e.preventDefault();

        const demoUser = { email: "demo@alltreks.com", password: "password123" };

        if (this.props.formType === "Sign up")
            this.props.login(demoUser);
        else (this.props.processForm(demoUser))
          

    }


    render() {


        const { errors, formTitle, formType, otherFormText, otherFormLink } = this.props;

        const additionalFields = (formType === "Sign up" ? (
            <>
                <label className="text-input">
                        <input
                        type="text"
                        placeholder="First name"
                        value={this.state.firstname}
                        onChange={this.update("firstname")}
                        required />
                </label>
                <label className="text-input">
                        <input
                        type="text"
                        placeholder="Last name"
                        value={this.state.lastname}
                        onChange={this.update("lastname")}
                        required />
                </label>
            </>
        ) : "" )

        const passwordError = (errors ? (
            errors.map((error, idx) => {
                if (error.includes("Password")) {
                    return (<ul className="form-errors">
                        <li key={idx}>{error}</li>
                    </ul>)
                } 
            })
        ) : "")

        const emailError = (errors ? (
            errors.map((error, idx) => {
                if (error.includes("Email")) {
                    return (<ul className="form-errors">
                        <li key={idx}>You already have an accoount.  Please log in.</li>
                    </ul>)
                }
            })
        ) : "")

        const errorsComp = (errors ? (
            <ul className="form-errors">
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
        ) : "")

        return(
            <div className="session-background">
                <div className="session-form">
                    <h1>{formTitle}</h1>
                    <form onSubmit={this.handleSubmit}>
                        {additionalFields}
                            <label className="text-input">
                                <input
                                    // id="email"
                                    type="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.update("email")}
                                    required />
                            </label>
                        <label className="text-input">
                            <input 
                                type="password" 
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.update("password")}
                                required/>
                        </label>
                        {passwordError}
                        {emailError}
                        {(formType === "Log in") ? errorsComp : null}
                        {/* {errorsComp} */}
                        <button className="primary-button">{formType}</button>
                    </form>
                    <p>{otherFormText} {otherFormLink}</p>
                    <p>Just exploring? Hit the trail as a <button className="inline-link" onClick={this.demo}>demo user</button></p>
                </div>
            </div>
        )
    }
}

export default SessionForm