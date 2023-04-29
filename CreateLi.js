import { useState } from "react";
export default function CreateLi(props) {

    const[currItems, setCurrItems]=useState(props.items);


    const deleteHandler=(Id)=>{
        const newItems=currItems.filter((l)=> l.id !== Id);
        setCurrItems(newItems);
        console.log(Id);
    }

     
  return (
    <div>
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          {item.price}-{item.name} <button onClick={()=>deleteHandler(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
    </div>
    
  );
}
