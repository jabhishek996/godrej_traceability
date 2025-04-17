import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom';
import GodrejLogo from '../../Assets/Godrej-Logo.jpg'

const navbar = () => {
  return (
    <div className="nav">
        <img src={GodrejLogo} alt="" />
<ul className="navlinks">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'active_link' : 'inactive_link')}
                            end
                        >
                             Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Product-tracibility"
                            className={({ isActive }) => (isActive ? 'active_link' : 'inactive_link')}
                        >
                             Tracibility
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Download"
                            className={({ isActive }) => (isActive ? 'active_link' : 'inactive_link')}
                        >
                            Download
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/About"
                            className={({ isActive }) => (isActive ? 'active_link' : 'inactive_link')}
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
    </div>
  )
}

export default navbar