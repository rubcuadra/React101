import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import SomeReducer from './reducer_some';

const rootReducer = combineReducers({
	// something: SomeReducer,
	form: formReducer  
});

export default rootReducer;