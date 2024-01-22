import { useDispatch, useSelector } from 'react-redux'
import { ThemeApp } from './Mui/ThemeApp'
import { PagesRoutes } from './pages/Routes/PagesRoutes'
import { AuthRoutes } from './pages/auth/Routes/AuthRoutes'
import {BrowserRouter as Router, Routes,Route, Navigate} from 'react-router-dom'
import { useEffect } from 'react'
import { fetchValidateToken } from './lib/slice/authSlice'

export const NotesApp = () => {
  
  const user = useSelector(state => state.auth.user)
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