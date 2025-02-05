import React, { useState } from 'react'
import { TodoCustomHook } from '../TodoContext/TodoContext';

function TodoForm() {

   const todoAdd = TodoCustomHook();

   const [taskInput, setTaskInput] = useState('');

   const handleSubmit = (event) => {
      event.preventDefault();
      if (taskInput.trim()) {
        todoAdd.addTask(taskInput);
        setTaskInput('');
      }
    };

   return (
      <form className="form" onSubmit={handleSubmit}>
         <label htmlFor="todo">
            <input type="text" id="todo" placeholder="Write your next task" name="todo" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
         </label>
         <button>
            <span className="visually-hidden">Submit</span>
            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
               <path d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fillRule="nonzero"></path>
            </svg>
         </button>
      </form>
   )
}

export default TodoForm
