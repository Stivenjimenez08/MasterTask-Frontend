import { Navigate, Route, Routes } from 'react-router-dom'
import { Taskpage, UserPage, Boardpage, Calendarpage, EditUser, EditPassw } from '../index'
import { FilterPage } from '../Task/FilterPage'

export const PagesRoutes = () => {
  return (
    <Routes>
      <Route path='Taskpage' element={<Taskpage/>}/>
      <Route path='Boardpage' element={<Boardpage/>}/>
      <Route path='Filterpage' element={<FilterPage/>}/>
      <Route path='Calendarpage' element={<Calendarpage/>}/>
      
      <Route path='Userpage' element={<UserPage/>}/>
      <Route path='EditUser' element={<EditUser/>}/>
      <Route path='EditPassword' element={<EditPassw/>}/>

      <Route path='/*' element={ <Navigate to="/notes/Taskpage"/> } />
    </Routes>
  )
}
