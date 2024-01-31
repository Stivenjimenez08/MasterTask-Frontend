import { Navigate, Route, Routes } from 'react-router-dom'
import {Login, Register, Recuperate, RecoveryPassword } from '../index'

export const AuthRoutes = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/recuperate' element={<Recuperate/>}/>
      <Route path='/RecoveryPassword/:id' element={<RecoveryPassword/>}/>

      {/* <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='recuperate' element={<Recuperate/>}/>
          <Route path='RecoveryPassword/:id' element={<RecoveryPassword/>}/> 
          <Route path='/*' element={ <Navigate to="/auth/login" /> } />
      */}

    </Routes>
  )
}
      