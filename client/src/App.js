import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import {Switch} from "react-router";

import NavBar from './components/navbar.component';
import ListPost from './components/list-post.component'
import EditPost from './components/edit-post.component';
import CreatePost from './components/create-post.component';
import CreateUser from './components/create-user.component';

function App() {
	return (
		<Router>
			<NavBar />
			<br/>
				<Routes>
					<Route path="/" element={<ListPost/>} />
					<Route path="/user"  element={<CreateUser/>} />
					<Route path="/create" element= {<CreatePost/>} />
					<Route path="/edit/:id" element={<EditPost/>} />
				</Routes>
		</Router>
	);
}

export default App;
