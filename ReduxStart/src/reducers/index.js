import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//ESTE ES EL state QUE USARAN LOS CONTAINERS
const rootReducer = combineReducers({
  activeBook: ActiveBook,
  books: BooksReducer
});

export default rootReducer;
