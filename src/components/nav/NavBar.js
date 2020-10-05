import React from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBookOpen, faSearch, faUsers, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

import "./NavBar.css"

export const NavBar = (props) => {
    return (
    <>
        <header>
            <ul className="navbar">
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/"><FontAwesomeIcon icon={faHome} size="2x" color="#88aee9"/></Link>
                    
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/books"><FontAwesomeIcon icon={faSearch} size="2x" color="#88aee9"/></Link>
                    
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/library"><FontAwesomeIcon icon={faBookOpen} size="2x" color="#88aee9"/></Link>
                    
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/clubs"><FontAwesomeIcon icon={faUsers} size="2x" color="#88aee9"/></Link>
                    
                </li>
                <li className="navbar__item">
                <Link className="navbar__link" to="/logout"><FontAwesomeIcon icon={faSignOutAlt} size="2x" color="#88aee9"/></Link>
                
                </li>
                
            </ul>
        </header>
        <div className="nav__text">
            <div className="nav__title">Home</div> 
            <p className="nav__title">Search</p>
            <p className="nav__title">Library</p>
            <p className="nav__title">Clubs</p>
            <p className="nav__title">Logout</p>
        </div>   
        
    </>
    )
}