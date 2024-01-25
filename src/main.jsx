import React from 'react'
import  store  from './lib/store.js'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { NotesApp } from './NotesApp.jsx'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <NotesApp/> 
    </Provider>
  </React.StrictMode>
)
