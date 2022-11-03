import { React, useState } from 'react'

export default function AddToDo({ todo, setTodo }) {

    const [value, setValue] = useState('')
    let [id, setId] = useState('')


    function saveToDo() {
        if (value) {
            setId(id = id + 1)
            setTodo(
                [...todo, {
                    id: id,
                    title: value,
                    status: true,

                }]
            )
            setValue('')
        }
    }
    return (
        <div>

            <input type="text" placeholder="add what to do" value={value} onChange={(e) => setValue(e.target.value)} />

            <button onClick={saveToDo}>Add</button>



        </div>
    )
}
