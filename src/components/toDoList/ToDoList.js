import { React, useState, useEffect } from 'react'
// import { RiDeleteBack2Line } from "react-icons/fa";

export default function ToDoList({ todo, setTodo }) {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    const [filtered, setFiltered] = useState(todo)

    useEffect(() => {
        setFiltered(todo)
    }, [todo])
    function deleteToDo(id) {
        let newTodo = [...todo].filter(item => item.id != id)
        console.log(newTodo)
        setTodo(newTodo)
    }
    function editToDo(id, title) {
        setEdit(id)
        setValue(title)
    }
    function todoFilter(status) {
        if (status == 'all') {
            setFiltered(todo)
        }
        else {
            let newTodo = todo.filter(item => item.status == status)
            setFiltered(newTodo)
        }
    }

    function saveTodoEdited(id) {
        let newTodo = [...todo].map(item => {
            if (item.id == id) {
                item.title = value
            }

            return item

        })
        setTodo(newTodo)
        setEdit(null)
    }
    function statusToDo(id) {
        let newTodo = [...todo].filter(item => {
            if (item.id == id) {
                item.status = !item.status;
            }
            return item
        })
        setTodo(newTodo)
        console.log(newTodo)
        setTodo(newTodo)
    }
    return (
        <div>
            <div className="btn-container">
                <button onClick={() => todoFilter('all')}>All</button>
                <button onClick={() => todoFilter(true)}>Opened</button>
                <button onClick={() => todoFilter(false)}>Closed</button>
            </div>
            {

                filtered.map(item => (

                    <div className="todos" key={item.id}>
                        {
                            edit == item.id ?
                                <div className="edit">
                                    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />

                                </div>
                                : <div className={!item.status ? 'close text' : 'open text'}>{item.title}</div>


                        }
                        {
                            edit == item.id ?
                                <div>
                                    <button onClick={() => saveTodoEdited(item.id)}>Save</button>
                                </div>
                                :
                                <div className='btnCont'>
                                    <button onClick={() => deleteToDo(item.id)}>Delete</button>
                                    <button onClick={() => editToDo(item.id, item.title)}>Edit</button>
                                    {
                                        item.status == false ?
                                            < button onClick={() => statusToDo(item.id)}> Closed</button>
                                            :
                                            < button onClick={() => statusToDo(item.id)}>Opened</button>
                                    }
                                </div>
                        }



                    </div>


                ))

            }


        </div >
    )
}
