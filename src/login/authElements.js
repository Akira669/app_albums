import React from 'react';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import {withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';
//mport { FormHelperText } from '@material-ui/core';

const authElements = (props) => {
    const loginButton = () =>{
		if(props.user) return (
			[
			<Avatar src={props.user.providerData[0].photoURL} />,
			<IconButton color='inherit' onClick={props.logout}>
                <ExitToApp />
            </IconButton>
			]
		);
		return (
			<Button variant="contained" onClick={props.login}>
				Iniciar Sesión
			</Button>
		);
	}

    return (
        <div className={props.classes.container}>
            {loginButton()}
        </div>
	);

}

export default withStyles({
    container:{
        display:'flex',
        flexDirection:'row'
    }
})(authElements);
