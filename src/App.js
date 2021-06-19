// import React from 'react';
import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { TodoItem } from "./MyComponents/TodoItem";
import { AddToDo } from "./MyComponents/AddToDo";
import { Footer } from "./MyComponents/Footer";

import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

function App() {
	let initTodo;
	if (localStorage.getItem("todos") === null) {
		initTodo = [];
	}
	else {
		initTodo = JSON.parse(localStorage.getItem("todos"));
	}

	const onDelete = (todo) => {
		setTodos(todos.filter((e) => {
			return e !== todo;
		}))
		localStorage.setItem("todos", JSON.stringify(todos));
	}
	const addTodo = (title, desc) => {
		let sno;
		if (todos.length === 0) {
			sno = 0;
		}
		else {
			sno = todos[todos.length - 1].sno + 1;
		}
		const myTodo = {
			sno: sno,
			title: title,
			desc: desc
		}
		setTodos([...todos, myTodo])
	}
	const [todos, setTodos] = useState(initTodo);
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos])

	return (
		<>
			<Router>
      <Header title="My Todos List" searchBar={false} /> 
      <Switch>
          <Route exact path="/todos-list" render={()=>{
            return(
            <>
            <AddToDo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>
          <Route exact path="/todos-list/about">
            <About />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
		</>
	);
}

export default App;
