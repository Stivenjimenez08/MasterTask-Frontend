import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CalendarComponent } from '../../components/index'
import {LayoutPages} from '../Layout/LayoutPages'

export const Calendarpage = () => {

  const user = useSelector(state => state.auth.user)
  const navigate = useNavigate()

  if(!user){
    navigate("/auth/login")
  }
  
  return (
    <LayoutPages>
        <CalendarComponent/>
    </LayoutPages> 
 
  )
}