import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchValidateToken } from './index'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

import { ThemeApp } from './Mui/ThemeApp'
import { Boardpage, Calendarpage, EditPassw, EditUser, FilterPage, Login, 
RecoveryPassword, Recuperate, Register, Taskpage, UserPage } from './pages'

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
          <Route path='/' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Recuperate' element={<Recuperate/>}/>
          <Route path='/RecoveryPassword/:id' element={<RecoveryPassword/>}/>

          <Route path='/Taskpage' element={<Taskpage/>}/>
          <Route path='/Boardpage' element={<Boardpage/>}/>
          <Route path='/Filterpage' element={<FilterPage/>}/>
          <Route path='/Calendarpage' element={<Calendarpage/>}/>
          
          <Route path='/Userpage' element={<UserPage/>}/>
          <Route path='/EditUser' element={<EditUser/>}/>
          <Route path='/EditPassword' element={<EditPassw/>}/>
        </Routes>
      </Router>
    </ThemeApp>
  )
}