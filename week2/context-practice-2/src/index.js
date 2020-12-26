import React from 'react'
import ReactDOM from 'react-dom'
import {AnimalContextProvider} from "./animalContext"
import App from './apps/App'

ReactDOM.render(
    <AnimalContextProvider>
         <App />
     </AnimalContextProvider>, 
     document.getElementById('root')
 )
