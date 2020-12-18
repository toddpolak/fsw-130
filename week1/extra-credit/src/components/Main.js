import React from 'react'
import {ThemeContextConsumer} from "../apps/themeContext"

function Main() {
    return (
        <ThemeContextConsumer>
            {context => (
                <main className={`${context.theme}-theme`}>
                    <div style={{textAlign: 'center', padding: '20px'}}>
                        <h2>Select a theme from the menu!</h2>
                        <select value={context.theme} onChange={context.selectTheme}>
                            <option value='dark'>Dark</option>
                            <option value='light'>Light</option>
                            <option value='red'>Red</option>
                            <option value='pink'>Pink</option>
                            <option value='purple'>Purple</option>
                            <option value='blue'>Blue</option>
                        </select>
                    </div>
                </main>
            )}
        </ThemeContextConsumer>
    )
}
export default Main
