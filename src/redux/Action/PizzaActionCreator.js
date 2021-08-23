function setPizza(items){
    return(
        {
            type : 'SET__PIZZAS',
            payload: items,
        }
    )
}
export function setLoadedActionCreator(bol){
    return(
        {
            type : 'SET_LOADED',
            payload: bol,
        }
    )
}
export default setPizza