import React, { Component } from 'react'
import { withAppContext } from '../apps/withAppContext'

class Navbar extends Component {
    navLinks() {
        if (this.props.context.layout === 'vertical') {
            return (
                <span>
                    <span className='h-nav'>Home</span> |
                    <span className='h-nav'>About</span> |
                    <span className='h-nav'>Contact</span>
                </span>
            )
        } else {
            return (
                <ul className='v-nav'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            )
        }
    }
    render() {
        return (
            <nav className={this.props.context.layout}>
                <div className={`${this.props.context.theme}-theme common`}>
                    {this.navLinks()}
                </div>
            </nav>
        )
    }
}
   
export default withAppContext(Navbar)
