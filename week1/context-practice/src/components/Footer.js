import React, {Component} from 'react'
//import ThemeContext from '../apps/themeContext'
import {ThemeContextConsumer, ThemeContextProvider} from "../apps/themeContext"

class Footer extends Component {

    //static contextType = ThemeContextConsumer

    render() {
        return(
            <footer className={`${this.context}-theme`}>
                <div style={{textAlign: 'center', padding: '20px'}}>
                    <span>The amazing Footer</span>
                </div>
            </footer>
        )
    }

}

Footer.contextType = ThemeContextConsumer

//function Footer() {
    //return (

        /*
        <ThemeContextConsumer>
            {context => (
                <footer className={`${context.theme}-theme`}>
                    <div style={{textAlign: 'center', padding: '20px'}}>
                        <span>The amazing Footer</span>
                    </div>
                </footer>
            )}
        </ThemeContextConsumer>
        */

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
    //)
//}

export default Footer