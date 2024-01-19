import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import  store  from './lib/store.js'
import { NotesApp } from './NotesApp.jsx'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <NotesApp/> 
    </Provider>
  </React.StrictMode>
)
