import React, { Component } from 'react'
import { withAppContext } from '../apps/withAppContext'

class Footer extends Component {
    render() {
        return (
            <footer className={`${this.props.context.theme}-theme`}>
                <div className='common'>
                    <span>The amazing Footer</span>
                </div>
            </footer>
        )
    }
}
    
export default withAppContext(Footer)
