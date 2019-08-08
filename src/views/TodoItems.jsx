import React from 'react'


const TodoItems = (props) =>{
    const todo = props.todo
    const listItems = todo.map((item)=>(
        <li key={item.id}>
            {item.text} <button>X</button>
        </li>
    ))

    return (
    <div>
        <ul>
            {listItems}
        </ul>
    </div>
    )
}

export default TodoItems