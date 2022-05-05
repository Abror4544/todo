import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const change = e => {
        setInput(e.target.value)
    }

    const handleSubmit = y => {

        y.preventDefault()

        props.onSubmit({
            id: Math.random().toString(36).substr(2),
            text: input
        })

        setInput('')
    }



    return (
        <form className='todo-form' onSubmit={handleSubmit}>

            {props.edit ? (
                <>
                    <input type="text" placeholder='Change your todo' value={input} name="text" className='todo__input edit' onChange={change} ref={inputRef} />
                    <button className='todo__button edit'>Edit</button>
                </>
            ) : (
                <>
                    <input type="text" placeholder='Here is todo' value={input} name="text" className='todo__input' onChange={change} ref={inputRef} />
                    <button className='todo__button'>Add</button>
                </>
            )}

        </form>
    )
}

export default TodoForm