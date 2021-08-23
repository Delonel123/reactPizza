const initialState = {
    items: {},
    TotalCount: 0,
    TotalPrice: 0,
}
// Возарвщаем старый ...state.items,добавляем в конец объекта новый 
// 


export function addPizza(state = initialState, action) {
    if (action.type === 'ADD_PIZZA') {
        const addedItems = state.items[action.payload.id] ? [...state.items[action.payload.id].items, action.payload] : [action.payload];
        const newItem = {
            ...state.items, // Копируем старый state.items (... - это ЕБАНОЕ КОПИРОВАНИЕ)
            [action.payload.id]: {
                items: addedItems, // Если пиццы уже добавлялись, то скопируй старые значения, и добавь в конец новые, иначе просто добавь новые значения
                TotalCount: [].concat.apply([], Object.values(addedItems)).length,
                TotalPrice: [].concat.apply([], Object.values(addedItems)).reduce((acc, item) => { return acc + item.price }, 0)
            }
        }

        const keys = Object.values(newItem)
        let TotalCount = keys.reduce((acc, obj) => { return acc + obj.TotalCount }, 0)
        let total = [].concat.apply([], Object.values(newItem))


        const totalPrice = keys.reduce((acc, item) => {
            return acc + item.TotalPrice
        }, 0)
        return (
            {
                ...state,
                items: newItem,
                TotalCount: TotalCount,
                TotalPrice: totalPrice
            }
        )
    }
    if (action.type === 'DELETE__PIZZA_ITEM') {
        const oldItems = state.items
        let total = [].concat.apply([], Object.values(oldItems))
        let newItems = total.filter((item) => item.items[0].id !== action.payload)



        const keys = Object.values(newItems)
        let TotalCount = keys.reduce((acc, obj) => { return acc + obj.TotalCount }, 0)


        const totalPrice = keys.reduce((acc, item) => {
            return acc + item.TotalPrice
        }, 0)

        return (
            {
                ...state,
                items: newItems,
                TotalCount: TotalCount,
                TotalPrice: totalPrice
            }
        )
    }
    if (action.type === 'CLEAR_PIZZAS') {
        return (
            {
                ...state,
                items: [],
                TotalCount: 0,
                TotalPrice: 0
            }
        )
    }
    if (action.type === 'MINUS_PISSA') {
        const addedItems = state.items[action.payload].items.length > 1 ? [...state.items[action.payload].items.slice(1)] : [...state.items[action.payload].items]
        debugger
        const newItem = {
            ...state.items, // Копируем старый state.items (... - это ЕБАНОЕ КОПИРОВАНИЕ)
            [action.payload]: {
                items: addedItems, // Если пиццы уже добавлялись, то скопируй старые значения, и добавь в конец новые, иначе просто добавь новые значения
                TotalCount: [].concat.apply([], Object.values(addedItems)).length,
                TotalPrice: [].concat.apply([], Object.values(addedItems)).reduce((acc, item) => { return acc + item.price }, 0)
            }
        }

        const keys = Object.values(newItem)
        let TotalCount = keys.reduce((acc, obj) => { return acc + obj.TotalCount }, 0)
        let total = [].concat.apply([], Object.values(newItem))


        const totalPrice = keys.reduce((acc, item) => {
            return acc + item.TotalPrice
        }, 0)

        return (
            {
                ...state,
                items: newItem,
                TotalCount: TotalCount,
                TotalPrice: totalPrice
            }
        )
    }
    if (action.type === 'PLUS_PISSA') {
        const addedItems =  [...state.items[action.payload].items, state.items[action.payload].items[0]] 
        const newItem = {
            ...state.items, // Копируем старый state.items (... - это ЕБАНОЕ КОПИРОВАНИЕ)
            [action.payload]: {
                items: addedItems, // Если пиццы уже добавлялись, то скопируй старые значения, и добавь в конец новые, иначе просто добавь новые значения
                TotalCount: [].concat.apply([], Object.values(addedItems)).length,
                TotalPrice: [].concat.apply([], Object.values(addedItems)).reduce((acc, item) => { return acc + item.price }, 0)
            }
        }

        const keys = Object.values(newItem)
        let TotalCount = keys.reduce((acc, obj) => { return acc + obj.TotalCount }, 0)
        let total = [].concat.apply([], Object.values(newItem))


        const totalPrice = keys.reduce((acc, item) => {
            return acc + item.TotalPrice
        }, 0)

        return (
            {
                ...state,
                items: newItem,
                TotalCount: TotalCount,
                TotalPrice: totalPrice
            }
        )
    }
    return state
}
