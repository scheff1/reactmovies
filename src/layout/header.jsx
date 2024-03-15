import React from "react";

import cinemaico from '../img/cinema.svg';

function Header() {
    return <nav className="grey darken-4">
        <div className="container">
            <div className="nav-wrapper">
                <div className="nav-block">
                    <a href='#!' className='brand-logo'>ReactMov</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href='!#'>Repository</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
}

export { Header };