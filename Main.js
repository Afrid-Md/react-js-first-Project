import Form from "../Form/Form";
import CreateLi from "../Li's/CreateLi";
import { useState } from "react";
export default function Main() {
  const [itemsList, setItemsList] = useState([]);
  let amount=0;
  const addItemsHandler = (iId, iName, iPrice) => {
    setItemsList((prev) => {
      return [...prev, { id: iId, price: iPrice, name: iName }];
    });
    amount=amount+iPrice;
  };


  return (
    <div>
      <Form onAdd={addItemsHandler} />
      <CreateLi items={itemsList}/>
      <h3>Total amount : {amount}</h3>
    </div>
  );
}
