import React from 'react'
import iconbluebig from "../../pic/iconbluebig.svg"
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div className="logo">
            <Link to="/">
                <img src={iconbluebig} alt="logo" className="TaiwanLogo" />
            </Link>
        <ul>
            <li className="TaiwanE">Taiwan</li>
            <li className="TaiwanC toggleTextNameC">島遊</li>
        </ul>
    </div>
    )
};

export default Logo
