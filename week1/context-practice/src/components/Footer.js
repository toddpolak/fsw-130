import React from 'react'
//import ThemeContext from '../apps/themeContext'
import {ThemeContextConsumer} from "../apps/themeContext"

function Footer() {
    return (

        <ThemeContextConsumer>
            {context => (
                <footer className={`${context.theme}-theme`}>
                    <div style={{textAlign: 'center', padding: '20px'}}>
                        <span>The amazing Footer</span>
                    </div>
                </footer>
            )}
        </ThemeContextConsumer>

        /*
        <ThemeContext.Consumer>
            {theme => (
                <footer className={`${theme}-theme`}>
                    <div style={{textAlign: 'center', padding: '20px'}}>
                        <span>The amazing Footer</span>
                    </div>
                </footer>
            )}
        </ThemeContext.Consumer>
        */
    )
}

export default Footer