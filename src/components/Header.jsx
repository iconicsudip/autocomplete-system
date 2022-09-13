import React from 'react';
import {Link} from "react-router-dom";
// import {Button} from '@mui/material'
export default function Header() {
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <ul className="nav justify-content-center container-fluid">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/database">Database</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
