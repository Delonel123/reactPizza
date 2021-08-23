export function setCategories(categories){
    return(
        {
            type : 'SET__CATEGORIES',
            payload: categories,
        }
    )
}
export function setSortBy(sortBy){
    return(
        {
            type : 'SET__SORT_BY',
            payload: sortBy,
        }
    )
}
