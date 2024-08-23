import React, { useReducer } from 'react'
import TodoHeader from '../../component/TodoHeader/TodoHeader'
import TodoHero from '../../component/TodoHero/TodoHero'
import TodoForm from '../../component/TodoForm/TodoForm'
import TodoList from '../../component/TodoList/TodoList'
import { TodoProvider } from '../../component/TodoContext/TodoContext'

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state, todoList: [...state.todoList, { task: action.data.task, status: false, id: Math.floor(Math.random() * 1000), isEditing: false }]
      }
    case "DELETE":
      return {
        ...state, todoList: state.todoList.filter((item) => item.id !== action.data.id)
      }
    case "COMPLETE":
      return {
        ...state, todoList: state.todoList.map((item) => item.id === action.data.id ? { ...item, status: !item.status } : item)
      }

    default:
      return {...state}
  }
}

function TodoApp() {

  const [state, dispatch] = useReducer(reducer, {
    todoList: []
  })

  // const [todoList, setTodoList] = useState([]);

  const addTask = (task) => {
    dispatch({
      type: "ADD",
      data: { task }
    })
    // setTodoList((prev) => [...prev, { task, status: false, id: Math.floor(Math.random() * 1000), isEditing: false }]);
  }

  const deleteTask = (id) => {
    dispatch({
      type: "DELETE",
      data: { id }
    })
    // return setTodoList((prev) => prev.filter((item) => item.id !== id))
  }

  const completeTask = (id) => {
    dispatch({
      type: "COMPLETE",
      data: { id }
    })
    // setTodoList((prev) => prev.map((item) => item.id === id ? { ...item, status: !item.status } : item))
  }

  return (
    <div className='todo'>
      <TodoProvider
        value={{
          todoList : state.todoList,
          addTask,
          deleteTask,
          completeTask,
        }
        }
      >
        <TodoHeader />
        <TodoHero />
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div >
  )
}

export default TodoApp
