import React, {useState, useRef, useEffect}  from "react";
import { TodoList } from "./components/TodoList";
import {v4 as uuidv4} from 'uuid';
import './app.css';

const KEY = 'todoApp.todos'

export function App(){
    const [todos, setTodos] = useState([{id: 1, task: 'Tarea 1', completed: false}])

const todoTaskRef = useRef();

useEffect(() =>{
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if(storedTodos){
        setTodos(storedTodos)
    }
}, [])

useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos))
}, [todos]);

const toggleTodo = (id) => {
    const newTodos= [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
}

const handleTodoAdd= () => {
    const task = todoTaskRef.current.value;
    if (task === '') return;

    setTodos((prevTodos) =>{
        return[...prevTodos, {id: uuidv4(), task, completed: false}];
    });

    todoTaskRef.current.value=null;
} ;

    const handleClearAll = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    }

    return (
        <>
        <h1 className="titulo">TO DO LIST</h1>
            <div className="container">
                <TodoList todos={todos} toggleTodo={toggleTodo}/>
                <input ref={todoTaskRef} type='text' name="inputTarea" className="inputTarea"></input>
                <br></br>
                <button onClick={handleTodoAdd} className="btn-hover color-1" id="botonAgregar">Agregar tarea</button>
                <button onClick={handleClearAll} className="btn-hover color-2" id="botonBorrar">Eliminar completadas</button>
                <div className="restantes">Te quedan {todos.filter((todo)=> !todo.completed).length} tareas por terminar</div>
            </div>
            </>
            
    )
}