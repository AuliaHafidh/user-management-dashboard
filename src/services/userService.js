import axios from "axios";

const API_URL = "https://695b68a51d8041d5eeb6a5b2.mockapi.io/users";

export const getUsers = () => axios.get(API_URL);
export const getUserById = (id) => axios.get(`${API_URL}/${id}`);
export const addUser = (data) => axios.post(API_URL, data);
export const updateUser = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteUsers = (id) => axios.delete(`${API_URL}/${id}`);
