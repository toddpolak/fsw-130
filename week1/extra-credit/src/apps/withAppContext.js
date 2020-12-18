import React from 'react'
import { AppContext } from '../apps/AppProvider'

export function withAppContext(Component) {
    return function WrapperComponent(props) {

        console.log({...props})

        return (
            <AppContext.Consumer>
                {state => <Component {...props} context={state} />}
            </AppContext.Consumer>
        )
    }
}
