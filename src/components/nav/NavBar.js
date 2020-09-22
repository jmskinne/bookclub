import React from "react"
import { Link } from "react-router-dom"

import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <footer>
            <ul className="navbar">
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/">Home</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/books">Book Search</Link>

                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/library"> Your Library</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/clubs">Clubs</Link>
                </li>
            </ul>
        </footer>
        

    )
}