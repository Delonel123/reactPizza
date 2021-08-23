export function addPizzaActionCreator(obj){
    return(
        {
            type : 'ADD_PIZZA',
            payload: obj,
        }
    )
}
export function clearPizzaActionCreator(){
    return(
        {
            type : 'CLEAR_PIZZAS'
        }
    )
}
export function clearPizzaItemActionCreator(id){
    return(
        {
            type : 'DELETE__PIZZA_ITEM',
            payload: id
        }
    )
}
export function plusPissaActionCreator(id){
    return(
        {
            type : 'PLUS_PISSA',
            payload: id
        }
    )
}
export function minusPissaActionCreator(id){
    return(
        {
            type : 'MINUS_PISSA',
            payload: id
        }
    )
}