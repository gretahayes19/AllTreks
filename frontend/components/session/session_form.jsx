import React from 'react'


class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.initialState;
    
        this.handleSubmit = this.handleSubmit.bind(this)
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

    render() {


        const {formTitle, formType} = this.props;

        const additionalFields = (formType === "Sign Up" ? (
            <>
                <label>
                        <input
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.update("email")}
                        required />
                </label>
                <label>
                        <input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.update("password")}
                        required />
                </label>
            </>
        ) : "" )

        return(
            <div>
                <h1>{formTitle}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input 
                            type="text" 
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.update("email")}
                            required/>
                    </label>
                    <label>
                        <input 
                            type="password" 
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.update("password")}
                            required/>
                    </label>
                    <button>{formType}</button>
                </form>
            </div>
        )
    }
}

export default SessionForm