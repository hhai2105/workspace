import { OPEN, FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actions.js';

const WorkspaceReducers = (state = {workspaces: [], openWorkspace: null},action) => {
    switch (action.type) {
    case FETCH_ALL:
        console.log(state)
        return {...state, workspaces: action.payload};
    case OPEN:
        return {...state, openWorkspace: action.payload}
    case CREATE:
	return {...state, workspaces: [...state.workspaces, action.payload]};
    case UPDATE:
	return {...state, workspaces: state.workspaces.map((post) => (post._id === action.payload._id ? action.payload : post))};
    case DELETE:
	return {...state, workspaces: state.workspaces.filter((post) => post._id !== action.payload)}
    default:
	return state
    }
};

export default WorkspaceReducers
