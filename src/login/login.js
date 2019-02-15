import React, {Component} from 'react';
import firebase from '../config/firebase';

import Button from '@material-ui/core/Button';

export default class login extends Component{
	constructor(props){
		super(props);
		this.login = this.login.bind(this);
	}

	login(){
		let provider = new firebase.auth.GoogleAuthProvider();

		provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly');

		firebase.auth().signInWithPopup(provider).then(result =>{
			let token = result.credential.accessToken;
		}).catch(error =>{
			console.log(error);
		});
	}

	render(){
		return (
			<div>
				<Button variant="contained" onClick={this.login}>Iniciar Sesión</Button>
			</div>
		);
	}
}
