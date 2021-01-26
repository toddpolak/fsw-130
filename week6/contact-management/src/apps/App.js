import React from 'react';
import Contacts from '../components/Contacts'
//import { connect } from 'react-redux'
import './App.css';

function App() {
    return (
        <Contacts />
    )
}

export default App


/*
function App(props) {

    console.log(props)

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
*/
