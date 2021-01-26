import React from 'react';
import { connect } from 'react-redux'
import './App.css';

function App(props) {
    return (
        <div></div>
      )
}

function mapStateToProps(state) {
    return {
        contacts: state
    }
}

export default connect(mapStateToProps, {}) (App);
