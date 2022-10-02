import React from 'react'

export function TodoItem({todo, toggleTodo}) {
    const { id, task, completed} = todo

    const handleTodoClick= () => {
        toggleTodo(id);
    };
  return <li className='todo-form'>
    <input type='checkbox' id='check' checked={completed} onChange={handleTodoClick}/>
    <span className='todo'>{task}</span>
    </li>
}
