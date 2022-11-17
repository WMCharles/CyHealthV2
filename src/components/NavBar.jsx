import React from 'react'
import '../styles/NavBar.css'
import { Link, Outlet } from 'react-router-dom'
export default function NavBar() {
    return (
        <div>
            <ul className="nav justify-content-end bg-secondary">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Statistics</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/history">History</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}
