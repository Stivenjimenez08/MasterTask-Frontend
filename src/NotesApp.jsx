import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import {Home} from '/src/pages/home/Home'
import { ThemeApp } from './Mui/ThemeApp'
import { AuthRoutes } from './pages/auth/Routes/AuthRoutes'


export const NotesApp = () => {
  return ( 
    <ThemeApp>
      <Router>
        <Routes>
          <Route path='/auth/*' element ={<AuthRoutes/>}/>
          <Route path='/*' element ={<Home/>}/>

        </Routes>
      </Router>
    </ThemeApp>
  )
}