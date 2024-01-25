import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {LayoutPages} from '../Layout/LayoutPages'
import { TaskBoard } from '../../components/index'

export const Boardpage = () => {
  const user = useSelector(state => state.auth.user)
  const navigate = useNavigate()

  if(!user){
    navigate("/auth/login")
  }
  return (
    <LayoutPages>
        <TaskBoard/>
    </LayoutPages> 
 
  )
}