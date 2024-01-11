import { Navigate, Route, Routes } from 'react-router-dom'
import {Login, Register, Recuperate } from '../index'
''
export const AuthRoutes = () => {
  
  return (
    <Routes>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='recuperate' element={<Recuperate/>}/>

      <Route path='/*' element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}