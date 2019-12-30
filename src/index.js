import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

/* EMG - Wrapping our App component around our BrowserRouter, allows us to use the other
   other components 'react-router-dom' comes with, inside of our App. In addition, when the 
   URL changes, the routing components will be notified of that. - Udacity classroom */
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root'))
