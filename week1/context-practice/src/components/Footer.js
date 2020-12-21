import React from 'react'
import {ThemeContextConsumer} from "../apps/themeContext"

function Footer() {
    return (
        <ThemeContextConsumer>
            {context => (
                <footer className={`${context.theme}-theme`}>
                    <div className='common'>
                        <span>The amazing Footer</span>
                    </div>
                </footer>
            )}
        </ThemeContextConsumer>
    )
}

export default Footer
