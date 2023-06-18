import React from "react";

import './header.css';


function Header (props) {
    return(
        <header>
            <nav>
        <a href="./">Home</a>
        {props.loggedIn ? <>
        <a href="http://www/apple.com">My Events</a>
        <a href="http://www/apple.com">New Event</a>
        <a href="http://www/apple.com">My Account</a>
        </> : <></>}
    </nav>
        </header>
    )
}

export default Header;