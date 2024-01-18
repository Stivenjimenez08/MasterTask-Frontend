import { useNavigate } from 'react-router-dom'
import { ShowTask } from '../../components/molecules/Task/ShowTask'
import {LayoutPages} from '../Layout/LayoutPages'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'

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

