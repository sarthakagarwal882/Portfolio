import React from "react";
import "./NavbarStyles.css"
import { AiOutlineInstagram, AiOutlineTwitter,AiFillLinkedin } from "react-icons/ai"

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Sarthak</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Skills</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <div className="nav-social">
                <AiOutlineInstagram className="nav-social-link"/>
                <AiOutlineTwitter className="nav-social-link"/>
                <AiFillLinkedin className="nav-social-link"/>
            </div>
        </div>
    );
};
export default Navbar;