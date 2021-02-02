import React from 'react'
import { Switch, Route } from "react-router-dom"
import NavBar from "../components/Navbar"
import Home from '../pages/Home'
import Summer from '../pages/Summer'
import Winter from '../pages/Winter'

function App() {
    return (
        <div className='container'>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/summer" component={Summer}></Route>
                <Route path="/winter" component={Winter}></Route>
            </Switch>
        </div>
    )
}

export default App
