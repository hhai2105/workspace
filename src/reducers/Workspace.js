import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actions.js';

const WorkspaceReducers = (workspaces = [], action) => {
	switch (action.type) {
    case FETCH_ALL:
		console.log("reducers run");
		return action.payload;
    case CREATE:
		return [...workspaces, action.payload];
    case UPDATE:
		return workspaces.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
		return workspaces.filter((post) => post._id !== action.payload);
    default:
		return workspaces;
	}
};

export default WorkspaceReducers
