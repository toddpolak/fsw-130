import React, { Component } from 'react'
import { withAppContext } from '../apps/withAppContext'

class Navbar extends Component {
    render() {
        return (
            <nav className={this.props.context.layout}>

                <div className={`${this.props.context.theme}-theme common`}>

                    <span style={{padding: '10px'}}>
                        Home About Contact
                    </span>



                </div>
            </nav>
        )
    }
}
   
export default withAppContext(Navbar)
