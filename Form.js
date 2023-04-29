import { useState } from "react";
export default function Form(props) {
  const [enteredId, setEnteredId] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredName, setEnteredName] = useState("");



  const idHandler = (e) => {
    setEnteredId(e.target.value);
  };
  const priceHandler = (e) => {
    setEnteredPrice(e.target.value);
  };
  const nameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(enteredId.trim().length ===0 || enteredName.trim().length ===0 || enteredPrice.trim().length===0){
        return;
    }
    props.onAdd(enteredId, enteredName, enteredPrice)
    localStorage.setItem(enteredId, `${enteredName}-${enteredPrice}`)
    setEnteredId("");
    setEnteredPrice("");
    setEnteredName("");
  };

  return (
    <div className="form" onSubmit={submitHandler}>
      <form>
        <label>Product Id : </label>
        <input type="number" onChange={idHandler} value={enteredId}></input>
        <label>Selling Price : </label>
        <input
          type="number"
          onChange={priceHandler}
          value={enteredPrice}
        ></input>
        <label>Product Name : </label>
        <input type="text" onChange={nameHandler} value={enteredName}></input>
        <button type="submit">Add Product</button>
        <h1>Products</h1>
      </form>
    </div>
  );
}
