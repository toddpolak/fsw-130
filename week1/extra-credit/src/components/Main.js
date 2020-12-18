import React, { Component } from 'react'
import { withAppContext } from '../apps/withAppContext'

class Main extends Component {
    render() {
        return (
            <main className={`${this.props.context.theme}-theme`}>
                <div className='common'>
                    <h2>Select a theme from the menu!</h2>
                    <select 
                        value={this.props.context.theme} 
                        onChange={this.props.context.selectTheme}>
                        <option value='dark'>Dark</option>
                        <option value='light'>Light</option>
                        <option value='red'>Red</option>
                        <option value='pink'>Pink</option>
                        <option value='purple'>Purple</option>
                        <option value='blue'>Blue</option>
                    </select>
                </div>
            </main>
        )
    }
}
export default withAppContext(Main)
