import React, { useState } from 'react'
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import Column from './components/Column/Column'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import Input from './components/Input/Input'

const App = () => {

  const [tasks, setTask] = useState([
    { id: 1, title: "Add tests to homepage" },
    { id: 2, title: "Fix styling in about section" },
    { id: 3, title: "Learn how to center a div" },
  ])

  const addTask = (title) => {
    setTask((task) => [...task, {id: task.length + 1, title}]);
  }

  const getTaskPos = id => tasks.findIndex(task =>
    task.id === id
  )

  const handleDragEnd = event => {
    const { active, over } = event

    if (active.id === over.id) return;

    setTask((tasks) => {
      const originalpos = getTaskPos(active.id)
      const newPos = getTaskPos(over.id)

      return arrayMove(tasks, originalpos, newPos);
    })
  }


  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates,
  })
);


  return (
    <div className='main'>
      <h1>My Task</h1>
      <DndContext sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners} className='col-container'>
        
        <Input onSubmit={addTask}/>

        <Column tasks={tasks} />
      </DndContext>

    </div>
  )
}

export default App;
