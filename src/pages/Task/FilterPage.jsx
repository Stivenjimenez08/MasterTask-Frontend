import React from 'react'
import {LayoutPages} from '../Layout/LayoutPages'
import { FilterTask } from '../../components/molecules/Task/FilterTask/FilterTask'

export const FilterPage = () => {
  return (
    <LayoutPages>
      <FilterTask/>
    </LayoutPages>
  )
}