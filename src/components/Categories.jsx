import { useState } from "react";

const Categories = (props) => {
    const [selectedItem, changeSelectedItem] = useState(null);
    const activeItem = (index) => {
        changeSelectedItem(index);
        props.onSelect(index)
    }
    return (
        <div className="categories">
            <ul>
                <li className={selectedItem === null && 'active'} onClick = {() =>activeItem(null)}>Все</li>
                {props.item.map((item,index) =>{
                    return <li className = {selectedItem === index && 'active'} onClick = {() => activeItem(index)} key = {index}>{item}</li>
                })}
            </ul>
        </div>
    )
}
export default Categories