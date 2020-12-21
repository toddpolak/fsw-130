import React from 'react'
import {ThemeContextConsumer} from "../apps/themeContext"

function Navbar() {
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}-theme common`}>
                    <span className='nav-padding'>Home</span> |
                    <span className='nav-padding'>About</span> |
                    <span className='nav-padding'>Contact</span>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Navbar
