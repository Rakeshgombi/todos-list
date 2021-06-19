import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
	const todosStyle = {
			minHeight: "50vh",
			background: "#ddd"
	}
	return (
		<div className="container my-3 p-3" style={todosStyle}>
			<h2 className="r">Todos List</h2>
			{props.todos.length===0? "NO TODOS TO LISTS":
			props.todos.map((todo) => {
				return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
			})}
		</div>
	)
}