import React from 'react'
import { Switch, Route } from "react-router-dom"
import NavBar from "../components/Navbar"
import Home from "../pages/Home"
import "../apps/App.css"

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home}></Route>
            </Switch>
        </div>
    )
}

export default App