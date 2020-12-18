import React, { Component } from 'react'
import { withAppContext } from '../apps/withAppContext'

class Navbar extends Component {
    render() {
        return (
            <div className={`${this.props.context.theme}-theme`}
                style={{textAlign: 'center', padding: '20px'}}>
                <span style={{padding: '10px'}}>Home</span>
                <span style={{padding: '10px'}}>About</span>
                <span style={{padding: '10px'}}>Contact</span>
            </div>
        )
    }
}
   
export default withAppContext(Navbar)
