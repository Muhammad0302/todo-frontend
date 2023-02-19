import { baseUrl } from "../../utils/baseUrl";
import axios from "axios";
const url = baseUrl();
export const getAllTodos = async () => {
	let res;
	try {
		res = axios.get(`${url}/todo/ViewAll`);
	} catch (error) {
		console.log("error", error.response);
	}
	return res ? res : "";
};

export const addTodo = async (todo) => {
	let res;
	try {
		res = axios.post(`${url}/todo/add`, todo);
	} catch (error) {
		console.log("error", error.response);
	}
	return res ? res : "";
};

export const getSingleTodo = async (id) => {
	let res;
	try {
		res = axios.get(`${url}/todo/get/${id}`);
	} catch (error) {
		console.log("error", error.response);
	}
	return res ? res : "";
};

export const updateTodo = async (id, newTodo) => {
	let res;
	try {
		res = axios.put(`${url}/todo/update/${id}`, newTodo);
	} catch (error) {
		console.log("error", error.response);
	}
	return res ? res : "";
};

export const deleteSingleTodo = async (id) => {
	let res;
	try {
		res = axios.delete(`${url}/todo/delete/${id}`);
	} catch (error) {
		console.log("error", error.response);
	}
	return res ? res : "";
};

export const deleteAllTodo = async () => {
	let res;
	try {
		res = axios.delete(`${url}/todo/deleteAll`);
	} catch (error) {
		console.log("error", error.response);
	}
	return res ? res : "";
};
