import React from 'react'
import ReactDOM from 'react-dom'
import {ThemeContextProvider} from "./apps/themeContext"
import App from './apps/App'

ReactDOM.render(
   <ThemeContextProvider>
        <App />
    </ThemeContextProvider>, 
    document.getElementById('root')
)
