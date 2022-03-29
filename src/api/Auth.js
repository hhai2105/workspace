import axios from 'axios';

const instance = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchWorkspaces = () => instance.get('/workspaces');
export const createWorkspace = (newWorkspace) => instance.post('/workspaces', newWorkspace);
export const updateWorkspace = (id, updateWorkspace) => instance.patch(`/workspaces/${id}`, updateWorkspace);
export const deleteWorkspace = (id) => instance.delete(`/workspaces/${id}`);

export const signIn = (formData) => instance.post('/user/signin', formData);
export const signUp = (formData) => instance.post('/user/signup', formData);
