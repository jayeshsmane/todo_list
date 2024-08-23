import React, { useEffect, useState } from 'react'
import { TodoCustomHook } from '../TodoContext/TodoContext';

function TodoHero() {
  const [completeTask, setCompleteTask] = useState(0);

  const todoCounter = TodoCustomHook()
  console.log(todoCounter);

  useEffect(() => {
    const completedTask = todoCounter.todoList.filter((item) => item.status).length;
    setCompleteTask(completedTask);
  }, [todoCounter.todoList])

  return (
    <section className="todohero_section">
      <div>
        <p className="text_large">Task Done</p>
        <p className="text_small">Keep it up</p>
      </div>
      <div>{completeTask} / {todoCounter.todoList.length}</div>   
    </section>
  )
}

export default TodoHero
