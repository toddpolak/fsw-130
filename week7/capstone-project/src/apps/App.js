import React from 'react'
import { Switch, Route } from "react-router-dom"
import NavBar from "../components/Navbar"
import Home from '../pages/Home'
import Skillset from '../pages/Skillset'
import WorkHistory from '../pages/WorkHistory'
import Summary from '../pages/Summary'

function App() {
    return (
        <div className='container'>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/skillset" component={Skillset}></Route>
                <Route path="/workhistory" component={WorkHistory}></Route>
                <Route path="/summary" component={Summary}></Route>
            </Switch>
        </div>
    )
}

export default App
