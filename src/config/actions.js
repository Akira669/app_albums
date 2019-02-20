export const saveToken = (token) =>{
	return {
		type : 'SET_TOKEN',
		token : token
	}
}

export const clearToken = () =>{
    return {
		type : 'CLEAR_TOKEN'
	}
}

export const setUser = (user) =>{
	return {
		type: 'LOGGED_IN',
		user
	};
}

export const clearUser = () =>{
	return {
		type: 'SIGN_OUT'
	};
}