import React from 'react'

export default function Todo(props) {
    return (
        <div className="container">
            {/* <h2>My To do app</h2> */}
            <form>
                <input type="checkbox" checked={props.checked} onChange={props.handleComplete} />
                <span style={props.handleCompleteStyle}>{props.myTask}</span>
                <div className="btn">
                    <button onClick={console.log(props.removeItem)}>Delete Task</button>
                </div>
                
            </form>
        </div>
    )
}
