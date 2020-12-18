import React, { Component } from 'react'
import { withAppContext } from '../apps/withAppContext'

class Navbar extends Component {
    render() {
        return (
            <div className={`${this.props.context.theme}-theme common`}>
                <span style={{padding: '10px'}}>Home</span>
                <span style={{padding: '10px'}}>About</span>
                <span style={{padding: '10px'}}>Contact</span>
            </div>
        )
    }
}
   
export default withAppContext(Navbar)
