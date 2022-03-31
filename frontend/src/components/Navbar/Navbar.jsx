import {AppBar, Box} from '@mui/material'

import Workspaces from '../Workspaces/Workspaces.js'
import WorkspaceForm from '../WorkspacesForm/Form.js'

function Navbar(){
	return(
		<AppBar position="fixed"  variant="dense">
			<Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'flex' } }}>
				<Workspaces/>
				<WorkspaceForm/>
			</Box>
		</AppBar>
	)
}

export default Navbar;
