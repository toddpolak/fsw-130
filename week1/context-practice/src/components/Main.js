import React from 'react'
import ThemeContext from '../apps/themeContext'

function Main() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <main className={`${theme}-theme`}>
                    <div style={{textAlign: 'center', padding: '20px'}}>
                        <span >Main</span>
                    </div>
                </main>
            )}
        </ThemeContext.Consumer>
    )
}

export default Main