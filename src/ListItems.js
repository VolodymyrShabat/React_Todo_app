import React from "react";
import './ListItems.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function ListItems(props){
    const items=props.items;
    const listItems = items.map(item=>
        {
            if(item.completed!==true)
            {
                return <div className="list" key={item.key}>
                    
                        <p>{item.text}
                        <input type="checkbox" onChange={()=>props.toggleComplete(item.key)} checked={items.completed}></input>
                        <span>
                            <FontAwesomeIcon className="faicons" 
                            icon='trash' 
                            onClick={()=>props.deleteItem(item.key)}/>
                        </span>
                        </p>
                        </div>
            }
            return <div className="list" key={item.key}>
                    <p className="completed">{item.text}
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