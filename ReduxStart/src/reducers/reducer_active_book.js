//STATE no se refiere al estado de la aplicacion, se refiere al
//estado anterior de este mismo reducer, el valor anterior
export default function(state = null,action){
	switch(action.type){
		case 'BOOK_SELECTED':
			return action.payload;
	}

	return state;
}