import React, {Component} from 'react'

class UglyThing extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
}

export default UglyThing
