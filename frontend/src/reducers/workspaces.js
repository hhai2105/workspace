import {  FETCH_ALL_BIN, CREATE_BIN, UPDATE_BIN, DELETE_BIN, OPEN_WORKSPACE, FETCH_ALL_WORKSPACE, CREATE_WORKSPACE, UPDATE_WORKSPACE, DELETE_WORKSPACE} from '../constants/actions.js';

const WorkspaceReducers = (state = {workspaces: [], bins: [],openWorkspace: null},action) => {
    switch (action.type) {
    case FETCH_ALL_WORKSPACE:
        return {...state, workspaces: action.payload};
    case OPEN_WORKSPACE:
        return {...state, openWorkspace: action.payload};
    case CREATE_WORKSPACE:
	return {...state, workspaces: [...state.workspaces, action.payload]};
    case UPDATE_WORKSPACE:
	return {...state, workspaces: state.workspaces.map((post) => (post._id === action.payload._id ? action.payload : post))};
    case DELETE_WORKSPACE:
	return {...state, workspaces: state.workspaces.filter((post) => post._id !== action.payload)}
    case FETCH_ALL_BIN:
        return {...state, bins: action.payload}
    case CREATE_BIN:
	return {...state, workspaces: state.workspaces.map(workspace => {
            if(workspace._id === action.payload.workspaceId){workspace.bins.push(action.payload._id)}
            return workspace
        }), bins: [...state.bins, action.payload]}
    case UPDATE_BIN:
	return {...state, bins: state.bins.map(bin => bin._id === action.payload._id? action.payload : bin)};
    case DELETE_BIN:
	return {...state, bins: state.bins.filter(bin => bin._id !== action.payload._id)};
    default:
	return state
    }
};

export default WorkspaceReducers
