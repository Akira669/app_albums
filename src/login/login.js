import React, {Component} from 'react';
import firebase from '../config/firebase';

import {connect} from 'react-redux';
import {saveToken,clearToken} from '../config/actions';

import AuthElement from './authElements';

class login extends Component{

	constructor(props){
		super(props); //constructor del padre

		/**
		 * //para referirse que 'this' solo es de la clase login, sin entrno global
		 */
		this.login = this.login.bind(this);
		this.logoutApp = this.logoutApp.bind(this);

	}

	/**
	 * life cicles => metodos de ejecucion de ciertos puntos de la ejecucion
	 * componentDidMount => se ejecuta cuando todo el componenete se ha cargado
	 * onAuthStageChange => deteccion user login firebase
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
	*/

	componentDidMount(){
		console.log(this.props.token);
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
			let token = result.credential.accessToken;
			this.props.saveToken(token);
		}).catch(error =>{
			console.log(error);
		});
	}

	logoutApp(){
		firebase.auth().signOut().then(() => {
			this.props.clearToken();
		});
	}

	render(){
		return (
			<AuthElement
			login={this.login}
			logout={this.logoutApp}
			token={this.props.token}
			user={this.props.user}
			/>
		);
	}
}

const mapStateToProps = (state) =>{
	return {
		token: state.token,
		user: state.user
	}
}

const mapDispatchToProps =  {
	saveToken,
	clearToken
}

export default connect(mapStateToProps,mapDispatchToProps)(login);
