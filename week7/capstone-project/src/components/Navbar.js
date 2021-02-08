import React from "react"
import { Link } from "react-router-dom"

function Navbar() {

    return (
        <div className='navbar'>
            <span className='navlink'>
                <Link to="/">Home</Link>
            </span>
            <span className='navlink'>
                <Link to="/skillset">Skillset</Link>
            </span>
            <span className='navlink'>
                <Link to="/workhistory">Work History</Link>
            </span>
            <span className='navlink'>
                <Link to="/summary">Summary</Link>
            </span>
        </div>
    )
}

export default Navbar
