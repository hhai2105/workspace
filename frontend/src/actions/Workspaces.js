import { FETCH_ALL, OPEN, CREATE, DELETE } from '../constants/actions.js';
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

export const deleteWorkspace = (formData) => async (dispatch) => {
    try {
        console.log(formData)
	const { data } = await api.deleteWorkspace(formData);
	dispatch({ type: DELETE, payload: data });
    } catch (error) {
	console.log(error);
    }
};

export const openWorkspace = (workspace) => async (dispatch) => {
    try{
	dispatch({ type: open, payload: workspace });
    }catch (error){
        console.log(error)
    }
}
