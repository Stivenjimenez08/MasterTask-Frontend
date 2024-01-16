import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import { ThemeApp } from './Mui/ThemeApp'
import { AuthRoutes } from './pages/auth/Routes/AuthRoutes'
import { PagesRoutes } from './pages/Routes/PagesRoutes'

export const NotesApp = () => {
  return ( 
    <ThemeApp>
      <Router>
        <Routes>
          <Route path='/auth/*' element ={<AuthRoutes/>}/>
          <Route path='/notes/*' element ={<PagesRoutes/>}/>
        </Routes>
      </Router>
    </ThemeApp>
  )
}