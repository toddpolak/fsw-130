import React from 'react'
import ReactDOM from 'react-dom'
//import ThemeContext from './apps/themeContext'
import {ThemeContextProvider} from "./apps/themeContext"
import App from './apps/App'

ReactDOM.render(
    /*
    <ThemeContext.Provider value={'light'}>
        <App />
    </ThemeContext.Provider>,
    */
   <ThemeContextProvider>
        <App />
    </ThemeContextProvider>, 
    document.getElementById('root')
)
