import React, {Component} from 'react'
//import ThemeContext from '../apps/themeContext'
import {ThemeContextConsumer} from "../apps/themeContext"

class Main extends Component {
    render() {
        return (

            <ThemeContextConsumer>
                {context => (
                    <main className={`${context.theme}-theme`}>
                        <div style={{textAlign: 'center', padding: '20px'}}>
                            <h2>Click the button to toggle the Dark theme!</h2>
                            <button onClick={context.toggleTheme}>Toggle Theme</button>
                        </div>
                    </main>
                )}
                
            </ThemeContextConsumer>

            /*
            <main className={`${this.context}-theme`}>
                <div style={{textAlign: 'center', padding: '20px'}}>
                    <h2>Click the button to toggle the Dark theme!</h2>
                    <button>Toggle Theme</button>
                </div>
            </main>
            */
        )
    }
}

//Main.contextType = ThemeContext

export default Main