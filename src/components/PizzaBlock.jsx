import { useState } from "react"
import classNames from "classnames";
const PizzaBlock = (props) => {
    const [activeTypes, setActiveTypes] = useState(props.item.types[0]);
    const [activeSize, setActiveSize] = useState(props.item.sizes[0]);
    const types = ['тонкое', 'традиционное']
    const sizes = [26,30,40]
    const toggleActiveTypes = (index) =>{
        setActiveTypes(index);
    }
    const toggleActiveSize = (size) =>{
        setActiveSize(size);
    }
    console.log()
    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={props.item.imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{props.item.name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {types.map((type,index) =>{
                        return <li 
                        onClick={() => toggleActiveTypes(index)}
                        className = {classNames({
                            'active': index === activeTypes,
                            'disabled': !props.item.types.includes(index)
                        })}
                        >{type}</li>
                    })}
                </ul>
                <ul>
                {sizes.map((sizes,index) =>{
                        return <li 
                        onClick={() => toggleActiveSize(sizes)}
                        className = {classNames({
                            'active': sizes === activeSize,
                            'disabled': !props.item.sizes.includes(sizes)
                        })}
                        >{sizes} см.</li>
                    })}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{props.item.price} ₽</div>
                <div className="button button--outline button--add" onClick={ () =>props.addPizza({ name:props.item.name, id: props.item.id,imageUrl:props.item.imageUrl, type: types[activeTypes], size: activeSize,price: props.item.price,rating: props.item.rating})}>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {props.addedCount ? <i>{props.addedCount.TotalCount}</i> : '' }

                </div>
            </div>
        </div>
    )
}

export default PizzaBlock