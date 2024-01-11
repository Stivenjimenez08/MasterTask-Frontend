import { Navigate, Route, Routes } from 'react-router-dom'
import { Taskpage, UserPage, Dragpage, Calendarpage } from '../index'

export const PagesRoutes = () => {
  return (
    <Routes>
      <Route path='Taskpage' element={<Taskpage/>}/>
      <Route path='Userpage' element={<UserPage/>}/>
      <Route path='Dragpage' element={<Dragpage/>}/>
      <Route path='Calendarpage' element={<Calendarpage/>}/>

      <Route path='/*' element={ <Navigate to="/notes/Taskpage"/> } />
    </Routes>
  )
}
