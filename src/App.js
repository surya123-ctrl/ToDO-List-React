import React, { useState } from "react";
import "./ToDoList"
import ToDoList from "./ToDoList";
const App = () => {
  const [inputList, setInputList] = useState("");
  const [itemList, setItemList] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  }
  const listOfItems = () => {
    setItemList((oldItems) => {
      return [...oldItems, inputList];
    })
    setInputList("");
  }
  const deleteItem = (id) => {
    setItemList((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      })
    })
  }
  return (
    <>
      <div className="main-div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add an item." onChange={itemEvent} value={inputList} />
          <button onClick={listOfItems}>+</button>
          <ol>
            {itemList.map((item, index) => {
              return <ToDoList key={index} id={index} text={item} onSelect={deleteItem} />
            })}
          </ol>
        </div>
      </div>
    </>
  )
}
export default App;