import React from 'react'

import { Link } from 'react-router-dom'
import icon from './transformed.png'
import './header.css'

const Header = () => {
    return (

        <div className="header d-flex">
            <Link to="/">
                <img className="logo-img" src={icon} alt="J&S Logo"/>
            </Link>
            <ul className="d-flex">
                <li>
                    <Link to="/">Negizgi bet</Link>
                </li>
                <div className="headert">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle nav-text">Juldızdı soğıstar</a>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item nav-text" to="/people/">Adamdar</Link>
                            <Link className="dropdown-item nav-text" to="/planets/">Ğalamşarlar</Link>
                            <Link className="dropdown-item nav-text" to="/starships/">Juldyzdy kemeler</Link>
                        </div>
                    </li>
                </div>


                <li>
                    <Link to="/info">Men turaly</Link>
                </li>


            </ul>
            <div className="head">
                <ul>
                    <li className="login-register">
                        <Link to="/login">Kiru</Link>
                    </li>
                    <li className="login-register">
                        <Link to="/register">Tirkelu</Link>
                    </li>
                </ul>
            </div>


        </div>

    )
}

export default Header