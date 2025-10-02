import React from 'react'
import './Column.css'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import Task from '../Task/Task'

const Column = ({ tasks }) => {
  return (
    <div className='column'>
    <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
    {
      tasks.map((item) =>(
        <Task id={item.id} title={item.title} key={item.id}/>
      ))
    }
    </SortableContext>
    </div>
  )
}

export default Column
