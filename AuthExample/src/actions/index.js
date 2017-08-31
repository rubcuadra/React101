import axios from 'axios';
import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR
} from './types';
const ROOT_URL = 'http://localhost:3090';

//Debemos pasarle el push de la history...
//Submit email/password to the server
export function signinUser({ email, password, push }){
	return dispatch => {
		//Invocamos dispatch() con una action cuando queramos
		//Pasar un dict con los params
		//El endpoint recibe esos dos params
		axios.post( `${ROOT_URL}/signin`,{email,password})
		.then(response=>{
			dispatch({
				type: AUTH_USER,
				payload:{}
			});	//Update state
			//Save token
			localStorage.setItem('token',response.data.token);
			//Redirect
			push('/feature'); 
		})
		.catch( () => {
			//Show error
			dispatch( authError("Login error") );
		});
	};
}

export function authError(error){
	return {
		type: AUTH_ERROR,
		payload: error
	};
}
