import React, { useState, useEffect } from "react";
import { getAllTodos,deleteAllTodo } from "../service/api/todo";
import Todo from "./Todo";
import { Link } from "react-router-dom";
export default function TodosList() {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
  const [counter,setCounter] = useState(0)
	async function fetchTodos() {
		try {
			const res = await getAllTodos();
			setTodos(res.data.data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchTodos();
		setIsLoading(false);
	}, [counter]);

  const deleteAllTodoData = async() =>{
    	try {
			const res = await deleteAllTodo();
      setCounter(counter+1)
		  console.log(res)		
    } catch (error) {
			console.log(error);
		}
  } 

	return isLoading ? (
		<div>Loading...</div>
	) : todos.length ? (
		<div>
			<h3>Todos List</h3>
			<table className="table table-striped" style={{ marginTop: 20 }}>
				<thead>
					<tr>
						<th>Description</th>
						<th>Responsiblity</th>
						<th>Priority</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{todos.map((todo) => {
						return <Todo key={todo._id} todo={todo} />;
					})}
				</tbody>
			</table>
      				<div className="form-group">
		    <Link to="/create">			<input type="submit" className="btn btn-primary" value="+ Add Todo" />       </Link>

					<input
						type="button"
						className="btn btn-danger float-right"
						value="Delete All Todo"
						onClick={deleteAllTodoData}
					/>

				</div>
		</div>
	) : (
		<>
			<div>There are no Todos yet</div>
			<div className="form-group">
            <Link to="/create">
				<input
					type="button"
					className="btn btn-primary float-right"
					value="+ Add Todo"
				
            />
        </Link>
			</div>
		</>
	);
}
