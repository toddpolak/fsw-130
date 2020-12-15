import React from "react"
import { Link } from "react-router-dom"
import "../apps/App.css"

function Navbar (props) {

    const style = {
        padding: "10px"
    }

    return (
        <div style={{textAlign: "center", padding: "20px"}}>
            <span style={style}>
                <Link to="/">Home</Link>
            </span>
        </div>
    )
}

export default Navbar