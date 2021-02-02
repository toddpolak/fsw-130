import React from "react"
import { Link } from "react-router-dom"

function Navbar() {

    return (
        <div className='navbar'>
            <span className='navlink'>
                <Link to="/">Home</Link>
            </span>
            <span className='navlink'>
                <Link to="/summer">Summer</Link>
            </span>
            <span className='navlink'>
                <Link to="/winter">Winter</Link>
            </span>
        </div>
    )
}

export default Navbar
