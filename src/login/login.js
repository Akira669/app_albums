import React, {Component} from 'react';
import firebase from '../config/firebase';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import {withStyles} from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';

class login extends Component{
	/**
	 *
	 */
	constructor(props){
		super(props); //constructor del padre

		/**
		 * //para referirse que 'this' solo es de la clase login, sin entrno global
		 */
		this.login = this.login.bind(this);
		this.logoutApp = this.logoutApp.bind(this);

		this.state = {
			userLoggedIn : false,
			photoURL : ''
		};
	}

	/**
	 * life cicles => metodos de ejecucion de ciertos puntos de la ejecucion
	 * componentDidMount => se ejecuta cuando todo el componenete se ha cargado
	 * onAuthStageChange => deteccion user login firebase
	 */
	componentDidMount(){
		firebase.auth().onAuthStateChanged((user)=>{
			if(user){
				this.setState({
					userLoggedIn : true,
					photoURL : user.providerData[0].photoURL
				});
			}else{
				this.setState({
					userLoggedIn : false,
					photoURL : ''
				});
			}
		});
	}

	login(){
		/**
		 * proveedor de quien o como se iniciara session ´example:google´
		 */
		let provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly');

		/**
		 * Permite abrir un ´popup´ para iniciar session con gogole
		 */
		firebase.auth().signInWithPopup(provider).then(result =>{
			console.log('result');
			//let token = result.credential.accessToken;
		}).catch(error =>{
			console.log(error);
		});
	}

	logoutApp(){
		firebase.auth().signOut().then(console.log);
	}

	loginButton(){
		if(this.state.userLoggedIn) return (
			[
			<Avatar src={this.state.photoURL} />,
			<IconButton color='inherit' onClick={this.logoutApp}><ExitToApp /></IconButton>
			]
		);
		return (
			<Button variant="contained" onClick={this.login}>
				Iniciar Sesión
			</Button>
		);
	}

	render(){
		return (
			<div className={this.props.classes.container}>
				{this.loginButton()}
			</div>
		);
	}
}

export default withStyles({
	container:{
		display:'flex',
		flexDirection:'row'
	}
})(login);
