
import React, { useState, useRef, useEffect } from 'react';

export default function ToDoList() {
    const [todo, settodo] = useState([])
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (event) => {
        const data = new FormData(event.currentTarget)
        event.preventDefault();
        if (data.get('todo') == '') {
            return
        }
        let index = todo.length
        if (todo.length > 0) {
            const map = todo.map(x => x.id);
            index = Math.max.apply(null, map) + 1
        }
        let item = { id: index, stringElement: data.get('todo') }
        settodo([...todo, item]);

        // Reset Input Field handler
        setInputValue("");
    };

    const handleUserInput = (e) => {
        setInputValue(e.target.value);
    };

    //delete from list
    const deletetodo = (e) => {
        const id = e.target.getAttribute("name")
        settodo(todo.filter(item => item.id != id));
        console.log(todo)
    };


    useEffect(() => {

    },
        [todo]
    )

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>To Do List</h1>
                <input name="todo" value={inputValue} onChange={handleUserInput} placeholder="Type whatever you want"></input>
                <button type="submit">add</button>
            </form>
            <div>
                <ul className='todolist'>
                    {todo.map((item) =>
                        <li key={item?.id}> {item?.stringElement}
                            <button name={item?.id} type="submit" onClick={deletetodo}>delete</button>
                        </li>

                    )}
                </ul>
            </div>
        </>

    )
}