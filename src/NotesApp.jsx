import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchValidateToken } from './index'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

import { ThemeApp } from './Mui/ThemeApp'
import { PagesRoutes } from './pages/Routes/PagesRoutes'
import { AuthRoutes } from './pages/auth/Routes/AuthRoutes'

export const NotesApp = () => {
  
  const dispatch = useDispatch()

  useEffect(()=>{
    const fetchData = async () =>{
      const response = await dispatch(fetchValidateToken())
    }
    fetchData()
  },[])

  return ( 
    <ThemeApp>
      <Router>
        <Routes>
           <Route path='/notes/*' element ={<PagesRoutes/>}/> 
           <Route path='/auth/*' element ={<AuthRoutes/>}/>
        </Routes>
      </Router>
    </ThemeApp>
  )
}