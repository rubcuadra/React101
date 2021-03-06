import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR,
	FETCH_MESSAGES
} from '../actions/types';

export default function(state={},action){
	switch(action.type){
		case AUTH_USER: //Fue exitosa la Auth
			return {...state, authenticated: true};
		case UNAUTH_USER:
			return {...state, authenticated: false};
		case AUTH_ERROR:
			return {...state, error: action.payload };
		case FETCH_MESSAGES: //ReduxPromise
			return {...state, message: action.payload.data.message};
	}
	return state;
}