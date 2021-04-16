import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faHiking, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Footer = () => {

    return (
        <footer>
            <div className="footer-content">
                <div className="footer-logo">
                    <Link to="/">
                        <FontAwesomeIcon icon={faMountain} className="footer-mountain-logo" />
                        <h2>AllTreks</h2>
                    </Link>
                </div>
                <div class="footer-logo links">
                    <p></p>
                    <a href="https://www.linkedin.com/in/greta-hayes-4a5b4559/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com/gretahayes19/bltbonanza" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="https://www.gretahayes.com" target="_blank"><i class="far fa-smile-beam"></i></a>
                    <a href="https://angel.co/u/greta-hayes-1" target="_blank"><i class="fab fa-angellist"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer