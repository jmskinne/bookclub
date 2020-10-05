import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import { BookClub} from './components/BookClub.js'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BookClub />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')

);

