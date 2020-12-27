import React, {Component} from 'react'
import {ContextConsumer} from '../context'

class UglyThings extends Component {
    constructor() {
        super()

        this.state = {}
    }

    render() {
        return (
            <ContextConsumer>
                {context => (
                    <div>
                        {context.uglyThings.map((item, index) => 
                            <div key={index}>
                                {item.title}
                            </div>
                        )}
                    </div>
                )}
            </ContextConsumer>
        )
    }

}

export default UglyThings