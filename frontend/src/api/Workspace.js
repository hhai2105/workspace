import axios from 'axios';

const server = axios.create({ baseURL: 'http://localhost:5000' });

export const getWorkspaces = () => server.get('/workspaces');
export const createWorkspace = (newWorkspace) => server.post('/workspaces', newWorkspace);
export const updateWorkspace = (id, updateWorkspace) => server.patch(`/workspaces/${id}`, updateWorkspace);
export const deleteWorkspace = (id) => server.delete(`/workspaces/${id}`);
