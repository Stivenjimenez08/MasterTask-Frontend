import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ShowTask } from '../../components/index'
import {LayoutPages} from '../Layout/LayoutPages'

export const Taskpage = () => {

  const user = useSelector(state => state.auth.user)
  const navigate = useNavigate()

  if(!user){
    navigate("/")
  }

  return (
    <LayoutPages>
      <ShowTask/>
    </LayoutPages> 
 
  )
}

