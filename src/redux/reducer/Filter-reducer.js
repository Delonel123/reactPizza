const initialState = {
    cortBy: 'rating',
    categories: null,
}


export const filterReducer = (state = initialState,action) =>{
    if(action.type === 'SET__CATEGORIES'){
        return(
            {
                ...state,
                categories : action.payload

            }
        )
    }
    if(action.type === 'SET__SORT_BY'){
        return(
            {
                ...state,
                cortBy : action.payload
            }
        )
    }
    return state;
}


