import React, { Component } from 'react'
import { withAppContext } from '../apps/withAppContext'

class Footer extends Component {
    render() {
        return (
            <footer className={`${this.props.context.theme}-theme`}>
                <div style={{textAlign: 'center', padding: '20px'}}>
                    <span>The amazing Footer</span>
                </div>
            </footer>
        )
    }
}
    
export default withAppContext(Footer)
