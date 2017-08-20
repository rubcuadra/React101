//Es un ActionCreator, debe regresar un action, un object con propiedad type
export function selectBook(book){
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}