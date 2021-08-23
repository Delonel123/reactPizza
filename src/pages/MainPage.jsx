import { useDispatch, useSelector } from 'react-redux';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import SortPopup from '../components/SortPopup';
import { setCategories, setSortBy } from '../redux/Action/FilterActionCreator';
import { Loader } from '../components/Loader'
import { useEffect } from 'react';
import { fetchPizza } from '../redux/reducer/Pizza-reducer';
import {addPizzaActionCreator} from '../redux/Action/AddPizzaActionCreator'
const ManiPage = () => {
    const dispatch = useDispatch();
    let items = useSelector((state) => {
        return (state.pizzas.items)
    })
    let isLoaded = useSelector((state) => {
        return (state.pizzas.isLoaded)
    })
    const {cortBy,categories} = useSelector((state) =>{
        return (state.filter)
    })
    const onSelectSortBy = (sort) => {
        dispatch(setSortBy(sort))
    }
    const onSelectCategory = (index) => {
        dispatch(setCategories(index))
    }
    useEffect(() => {
        dispatch(fetchPizza(cortBy,categories))
    }, [cortBy,categories])

    const buyItems = useSelector( ({addPizza}) =>{
        return addPizza.items
    })
    const addPizzas = (obj) =>{
        dispatch(addPizzaActionCreator(obj))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories item={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} onSelect={onSelectCategory} />
                <SortPopup item={{name: ['популярности', 'цене', 'алфавиту'],type : ['rating','price','name']}} onSelect={onSelectSortBy} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded ?
                        items.map((item, index) => {
                            return <PizzaBlock addedCount = {buyItems[item.id]}  addPizza = {addPizzas} key={index} item={item} />
                        })
                        : Array(12).fill(<Loader />)
                }

            </div>
        </div>
    )
}
export default ManiPage
