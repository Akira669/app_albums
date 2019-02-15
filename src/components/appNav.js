import React,{Component} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Login from '../login/login';

class appNav extends Component{
	render(){
		return (
			<div>
				<AppBar>
					<Toolbar>
						<p>Albums</p>
						<Login />
					</Toolbar>
				</AppBar>
			</div>
		);
	}
} 

export default appNav;