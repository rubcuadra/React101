import axios from 'axios';
const ROOT_URL = 'http://localhost:3090';

//Podriamos pasarle la history para hacer el push...
export function signinUser({email, password }){
	//Submit email/password to the server

	//If request is gut
		//Update state Auth:True
		//Save token
		//Redirect	

	return function(dispatch){
		//Invocamos dispatch() con una action cuando queramos
		//Pasar un dict con los params
		//El endpoint recibe esos dos params
		axios.post( `${ROOT_URL}/signin`,{email,password})
		.then(response=>{
			console.log(response);
		}).catch(e=>{
			//Show error
			console.log(e);
		});
	}
}