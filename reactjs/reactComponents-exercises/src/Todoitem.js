import React from 'react'

export default function Todoitem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>{props.chore}</p>
        </div>
    )
}
