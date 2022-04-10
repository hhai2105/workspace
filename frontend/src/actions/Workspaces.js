import { FETCH_ALL, CREATE, DELETE } from '../constants/actions.js';
import * as api from '../api/Workspace.js';

export const getWorkspaces = () => async (dispatch) => {
    try {
	const { data } = await api.getWorkspaces();
	dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
	console.log(error);
    }
};


export const createWorkspace = (formData) => async (dispatch) => {
    try {
	const { data } = await api.createWorkspace(formData);
	dispatch({ type: CREATE, payload: data});
    } catch (error) {
	console.log(error);
    }
};

export const deleteWorkspace = (workspace) => async (dispatch) => {
    try {
	const { data } = await api.deleteWorkspace({});
	dispatch({ type: DELETE, data });
    } catch (error) {
	console.log(error);
    }
};
