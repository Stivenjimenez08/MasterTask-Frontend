import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {LayoutPages} from '../Layout/LayoutPages'
import { FilterTask } from '../../components/index'

export const FilterPage = () => {

  const user = useSelector(state => state.auth.user)
  const navigate = useNavigate()

  if(!user){
    navigate("/auth/login")
  }

  return (
    <LayoutPages>
      <FilterTask/>
    </LayoutPages>
  )
}