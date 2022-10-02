import React from 'react'
import { TodoItem } from './TodoItem';

export  function TodoList({todos, toggleTodo}) {
  return (
    <ul  className="todos">
        {todos.map((todo)=>(
        <TodoItem key={todo.id} className="todo" todo={todo} toggleTodo={toggleTodo}/>
        ))}
    </ul>
  );
}
