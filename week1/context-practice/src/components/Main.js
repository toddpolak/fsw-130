import React, {Component} from 'react'
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
        )
    }
}
export default Main
