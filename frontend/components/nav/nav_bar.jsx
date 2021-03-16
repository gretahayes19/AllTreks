import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faHiking, faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ currentUser, logout }) => {



    const userNav = (currentUser ? (
            <>      
                <h1>{currentUser.firstname}</h1>
                <ul className="user-dropdown">
                    <li>
                        <button className="login-button" onClick={logout}>Logout</button>
                    </li>
                </ul>
            </>
        ) : (
            <>
                <Link to="/signup" className="sign-up-button">Sign Up</Link>
                <Link to="/login" className="login-button">Log In</Link>
            </>
        ))

    return (
        <nav className="nav-bar">  
            <div className="nav-links"></div>
            <div className="logo-title-div">
                <Link to="/" className="logo-title">
                    <FontAwesomeIcon icon={faMountain} className="mountain-logo" />
                    <h2>AllTreks</h2>
                </Link>
            </div>
            <div className="user-nav">
                {userNav}
            </div>



        </nav>

    );
}


export default NavBar
