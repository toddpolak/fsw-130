import React from 'react'
import ContactForm from '../components/ContactForm'
import ContactList from '../components/ContactList'
import './App.css';

function App() {
    return (
        <div className='container'>
            <h2>Contact Management</h2>
            <ContactForm />
            <ContactList />
        </div>
    )
}

export default App
