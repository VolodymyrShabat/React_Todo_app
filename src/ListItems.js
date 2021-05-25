import React from "react";
import './ListItems.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function ListItems(props){
    const items=props.items;
    const listItems = items.map(item=>
        {

            return <div className="list" key={item.key}>
                
                    <p className= {item.completed!==true?"":"completed"}>{item.text}
                    <input type="checkbox" onChange={()=>props.toggleComplete(item.key)} checked={items.completed}></input>
                    <span>
                        <FontAwesomeIcon className="faicons" 
                        icon='trash' 
                        onClick={()=>props.deleteItem(item.key)}/>
                    </span>
                    </p>
                    </div>
        });
    return (
        <div>{listItems}</div>
    )
}
export default ListItems;