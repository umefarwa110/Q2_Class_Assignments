(page.tsx)
'use client';
import { useState } from "react";
import List from "./components/List";

export default function Todo() {
    const [currentItem, setcurrentItem] = useState(""); // Initialize with an empty string
    const [itemsList, setitemsList] = useState([]); // Start with an empty array

    // Handle input field changes
    const onChangeHandler = (e) => {
        setcurrentItem(e.target.value);
    };

    // Add a new item to the list
    const addItemstolist = () => {
        if (currentItem.trim() !== "") { // Prevent empty items
            setitemsList([
                ...itemsList,
                { item: currentItem, key: Date.now() }, // Add item with a unique key
            ]);
            setcurrentItem(""); // Clear the input field
        }
    };

    // Update the list (passed to the List component)
    const updateItemList = (newList) => {
        setitemsList(newList);
    };

    return (
        <div className="wrapper">
            <div className="Input-wrapper">
                <input
                    value={currentItem}
                    onChange={onChangeHandler}
                    placeholder="Add a task"
                />
                <button onClick={addItemstolist}>+</button>
            </div>
            <List itemList={itemsList} updateItemList={updateItemList} />
        </div>
    );
}


(componenet list.tsx)
export default function List({ itemList, updateItemList }) {
    const deleteItemfromList = (key) => {
        // Filter out the item with the matching key
        const newList = itemList.filter((itemObj) => itemObj.key !== key);
        updateItemList(newList); // Update the list in the parent
    };

    return (
        <div>
            {itemList.map((itemObj) => (
                <div key={itemObj.key} className="Item">
                    <p>{itemObj.item}</p>
                    <button onClick={() => deleteItemfromList(itemObj.key)}>x</button>
                </div>
            ))}
        </div>
    );
}

(css)

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Wrapper for the entire app */
.wrapper {
    background: #ffffff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    width: 400px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;
}

/* Input section styling */
.Input-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}

.Input-wrapper input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
}

.Input-wrapper input:focus {
    border-color: #007bff;
}

.Input-wrapper button {
    padding: 10px 20px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s;
}

.Input-wrapper button:hover {
    background: #0056b3;
}

/* List items container */
.list-container {
    flex-grow: 1; /* Ensures the list expands to available space */
    max-height: 300px; /* Limit height to prevent overflowing */
    overflow-y: auto; /* Add vertical scroll if content exceeds max height */
    border-top: 1px solid #ddd;
    padding-top: 10px;
}

/* List items styling */
.Item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f9f9f9;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.Item p {
    margin: 0;
    font-size: 16px;
    color: #333;
    word-break: break-word;
}

.Item button {
    padding: 5px 10px;
    background: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.3s;
}

.Item button:hover {
    background: #a71d2a;
}
