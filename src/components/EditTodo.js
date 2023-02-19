import React, { useState, useEffect } from "react";
import { getSingleTodo, deleteSingleTodo } from "../service/api/todo";
import { updateTodo } from "../service/api/todo";
export default function EditTodo({ match: { params }, history }) {
	const [isLoading, setIsLoading] = useState(true);
	const [todoDesc, setTodoDesc] = useState("");
	const [todoResponsible, setTodoResponsible] = useState("");
	const [todoPriority, setTodoPriority] = useState("");
	const [todoCompleted, setTodoCompleted] = useState(false);

	const getDataSingleTodo = async () => {
		try {
			const res = await getSingleTodo(params.id);
			const { todoCompleted, todoDesc, todoPriority, todoResponsible } =
				res.data.data;
			setTodoCompleted(todoCompleted);
			setTodoDesc(todoDesc);
			setTodoPriority(todoPriority);
			setTodoResponsible(todoResponsible);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getDataSingleTodo();
	}, [params.id]);

	const onSubmit = async (e) => {
		e.preventDefault();
		const newTodo = {
			todoDesc,
			todoResponsible,
			todoPriority,
			todoCompleted,
		};

		try {
			const res = await updateTodo(params.id, newTodo);
			console.log(res.data);
			history.push("/");
		} catch (error) {
			console.log(error);
		}
	};

	const deleteTodo = async (e) => {
		e.preventDefault();
		try {
			const res = await deleteSingleTodo(params.id);
			console.log(res.data);
			history.push("/");
		} catch (error) {
			console.log(error);
		}
	};

	return !isLoading ? (
		<div style={{ marginTop: 20 }}>
			<h3>Edit Todo</h3>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label>Description: </label>
					<input
						type="text"
						className="form-control"
						value={todoDesc}
						onChange={(e) => setTodoDesc(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Responsible: </label>
					<input
						type="text"
						className="form-control"
						value={todoResponsible}
						onChange={(e) => setTodoResponsible(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<div className="form-check form-check-inline">
						<input
							type="radio"
							className="form-check-input"
							name="priorityOptions"
							id="priorityLow"
							value="Low"
							checked={todoPriority === "Low"}
							onChange={(e) => setTodoPriority(e.target.value)}
						/>
						<label htmlFor="priorityLow" className="form-check-label">
							Low
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input
							type="radio"
							className="form-check-input"
							name="priorityOptions"
							id="priorityMedium"
							value="Medium"
							checked={todoPriority === "Medium"}
							onChange={(e) => setTodoPriority(e.target.value)}
						/>
						<label htmlFor="priorityMedium" className="form-check-label">
							Medium
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input
							type="radio"
							className="form-check-input"
							name="priorityOptions"
							id="priorityHigh"
							value="High"
							checked={todoPriority === "High"}
							onChange={(e) => setTodoPriority(e.target.value)}
						/>
						<label htmlFor="priorityHigh" className="form-check-label">
							High
						</label>
					</div>
				</div>
				<div className="form-check form-check-inline">
					<input
						type="checkbox"
						className="form-check-input"
						name="completedCheckbox"
						id="completedCheckbox"
						value={todoCompleted}
						checked={todoCompleted}
						onChange={(e) => setTodoCompleted(!todoCompleted)}
					/>
					<label htmlFor="completedCheckbox" className="form-check-label">
						Completed
					</label>
				</div>
				<br />
				<br />
				<div className="form-group">
					<input type="submit" className="btn btn-primary" value="Edit Todo" />

					<input
						type="button"
						className="btn btn-danger float-right"
						value="Delete Todo"
						onClick={deleteTodo}
					/>
				</div>
			</form>
		</div>
	) : (
		<div>Getting Todo</div>
	);
}
