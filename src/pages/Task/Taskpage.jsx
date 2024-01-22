import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {LayoutPages} from '../Layout/LayoutPages'
import { ShowTask } from '../../components/molecules/Task/GetTask/ShowTask'

export const Taskpage = () => {

  const user = useSelector(state => state.auth.user)
  const navigate = useNavigate()

  if(!user){
    navigate("/auth/login")
  }

  return (
    <LayoutPages>
      <ShowTask/>
    </LayoutPages> 
 
  )
}

