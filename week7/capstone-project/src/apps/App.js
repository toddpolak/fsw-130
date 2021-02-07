import React from 'react'
import { Switch, Route } from "react-router-dom"
import NavBar from "../components/Navbar"
import Home from '../pages/Home'
import Skills from '../pages/Skills'
import WorkHistory from '../pages/WorkHistory'
import Summary from '../pages/Summary'

function App() {
    return (
        <div className='container'>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/skillset" component={Skills}></Route>
                <Route path="/workhistory" component={WorkHistory}></Route>
                <Route path="/summary" component={Summary}></Route>
            </Switch>
        </div>
    )
}

export default App
