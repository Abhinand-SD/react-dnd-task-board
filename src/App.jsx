import React, { useState } from 'react'
import { closestCorners, DndContext } from '@dnd-kit/core'
import Column from './components/Column'

const App = () => {

  const [task, setTask] = useState([
    { id: 1, title: "Add tests to homepage" },
    { id: 2, title: "Fix styling in about section" },
    { id: 3, title: "Learn how to center a div" },
  ])
  return (
    <div className='main'>
      <h1>My Task</h1>
      <DndContext collisionDetection={closestCorners} className='col-container'>
        <Column tasks={task}/>
      </DndContext>

    </div>
  )
}

export default App
