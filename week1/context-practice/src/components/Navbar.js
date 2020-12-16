import React from "react"
import ThemeContext from "../apps/themeContext"

function Navbar() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className={`${theme}-theme`}
                    style={{textAlign: "center", padding: "20px"}}>
                    <span style={{padding: "10px"}}>Navbar</span>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}

export default Navbar