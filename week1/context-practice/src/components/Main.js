import React, {Component} from 'react'
import ThemeContext from '../apps/themeContext'

class Main extends Component {
    render() {
        return (
            <main className={`${this.context}-theme`}>
                <div style={{textAlign: 'center', padding: '20px'}}>
                    <h2>Click the button to toggle the Dark theme!</h2>
                    <button>Toggle Theme</button>
                </div>
            </main>
        )
    }
}

Main.contextType = ThemeContext

export default Main