import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';


function App() {
    // HINT: each "item" in our list names a name, a boolean to tell if its been completed, and a quantity
    const [items, setItems] = useState([
       {itemName: 'item 1', quantity: 1, isSelected: false},
       {itemName: 'item 2', quantity: 4, isSelected: false},
       {itemName: 'item 3', quantity: 2, isSelected: false},
    ]);

    const [inputValue, setInputValue] = useState("");
    const [totalItemCount, setTotalItemCount] = useState(6);

    const handleAddButtonClick = () => {
        if(!inputValue) return;
        setItems([
            ...items,
            {itemName: inputValue, quantity: 1, isSelected: false}
        ])
        setInputValue("");

    }

    const handleQuantityIncrease = (index) => {
        const newItems = [...items];
        newItems[index].quantity++;
        setItems(newItems);
        calculateTotal();

    }

    const handleQuantityDecrease = (index) => {
        const newItems = [...items];
        newItems[index].quantity--;
        if (newItems[index].quantity < 0) {
            newItems[index].quantity = 0;
        }
        setItems(newItems);
        calculateTotal();

    }

    const handleToggleComplete = (index) => {
        const newItems = [...items];
        newItems[index].isSelected = !newItems[index].isSelected;
        setItems(newItems);
    }

  const calculateTotal = () => {
        const totalItemCount = items.reduce((total, item) => {
            return total + item.quantity;
      }, 0);
      setTotalItemCount(totalItemCount);
  }
  useEffect( () => {calculateTotal()}, []);
  return (
      <div className='app-background'>
        <div className='main-container'>
          <div className='add-item-box' >

            <input value={inputValue}
                   className='add-item-input'
                   placeholder='Add an item...'
                   onChange={(e) => setInputValue(e.target.value)} />

              <FontAwesomeIcon
                  icon={faPlus}
                  onClick={() => handleAddButtonClick() } />
          </div>
          <div className='item-list'>
            {items.map((item, index) => (
                <div className='item-container'>
                    <div className='item-name' onClick={() => handleToggleComplete(index)}>
                        {item.isSelected ? (
                            <>
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span className='completed'>{item.itemName}</span>
                            </>
                        ) : (
                            <>
                                <FontAwesomeIcon icon={faCircle} />
                                <span>{item.itemName}</span>
                            </>
                        )}
                    </div>
                    <div className='quantity'>
                        <button>
                            <FontAwesomeIcon
                                icon={faChevronLeft}
                                onClick={() => handleQuantityDecrease(index) }/>
                        </button>
                        <span> {item.quantity} </span>
                        <button>
                            <FontAwesomeIcon
                                icon={faChevronRight}
                                onClick={() => handleQuantityIncrease(index) } />
                        </button>
                    </div>
                </div>
                )
            )}
          </div>
          <div className='total'>Total: {totalItemCount}</div>
        </div>
      </div>
   )
  }


export default App;