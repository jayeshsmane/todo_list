import TodoItem from '../TodoItem';
import { TodoCustomHook } from '../TodoContext/TodoContext';

function TodoList() {
   const todoLists = TodoCustomHook();
   return (
      <ol className="todo_list">
         {todoLists.todoList?.map((item, index) => {
            return <TodoItem key={index} item={item} />
         })}

      </ol>
   )
}

export default TodoList
