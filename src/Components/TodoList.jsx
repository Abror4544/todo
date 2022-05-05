import React, { useState, useEffect } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {

    const [todos, setTodos] = useState(() => {
        const storeTodos = localStorage.getItem("todos")
        if (storeTodos) {
            return JSON.parse(storeTodos)
        } else {
            return []
        }
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = item => {
        if (!item.text || /^\s*$/.test(item.text)) {
            return
        }

        const newTodos = [item, ...todos]

        setTodos(newTodos)
    }


    const editTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isDone = !todo.isDone
            }

            return todo
        })

        setTodos(updatedTodos)
    }


    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }



    return (
        <div className='todo-container'>
            <h1>Essential tasks for today</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} editTodo={editTodo} />
        </div>
    )
}

export default TodoList