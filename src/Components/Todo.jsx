import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { AiFillCloseSquare } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'


function Todo({ todos, completeTodo, removeTodo, editTodo }) {


    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitEdit = value => {
        editTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitEdit} />
    }


    return (
        <div className='todo-block'>
            {
                todos.map((todo, index) => (
                    <div className={todo.isDone ? 'todo__row done' : 'todo__row'} key={index}>
                        <div key={todo.id} onClick={() => completeTodo(todo.id)} className="todo__text">{todo.text}</div>
                        <div className="todo-icons">
                            <AiFillCloseSquare onClick={() => removeTodo(todo.id)} className='todo__delete' />
                            <FaRegEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className='todo__edit' />
                        </div>
                    </div>
                ))

            }
        </div>)
}

export default Todo