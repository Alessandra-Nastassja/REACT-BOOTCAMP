import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { addTodo } from "../actions";

const ToDoList = () => {
    const [todoItem, setTodoItem] = useState('');
    const dispatch = useDispatch()

    const addTodoItem = () => dispatch(addTodo(todoItem))

    return (
        <>
            <input type="text" onChange={({target: { value }}) => setTodoItem(value)}/>
            <button onClick={addTodoItem}>Add To do</button>
        </>
    )
}

export default ToDoList;