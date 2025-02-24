import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  //creating hooks
  const [todos, setTodo] = useState([]); //empty list for the todos
  const [headingInput, setHeadingInput] = useState(''); //empty string for heading
  const [listInputs, setListInputs] = useState({}); //empty dictionary for listInputs
  const handleAddTodo = () => {
    if (headingInput.trim !== ''){ //check if the input is not empty
      setTodo([...todos, {heading: headingInput, lists: []}]); //copy the current todo lists and append the new added list to the copied one
      //heading: headingInput is just heading pointing the value to headingInput, same with lists
      setHeadingInput('');
    }

  //adding the delete button for heading
  const handleDeleteTodo = () => {
    //check if 
  }

  
  };
  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput} //make the input the haeadingInput
            onChange={(e) => {setHeadingInput(e.target.value);}} //it sets the headingInput everytime it changes
          />
          
          <button className="add-list-button" 
              onClick={handleAddTodo} //added the onClick function
              >
            Add Heading
            </button>
        </div>
      </div>
  
      <div className="todo_main">
        {/**we need to display the todos in this area */}
        {todos.map((todo, index) => (
          <div key={index} className='todo-card'>
            <div className='heading_todo'>
              <h3>{todo.heading}</h3> {/**This displays the heading */}
              <button className='delete-button-heading' onClick={() => handleDeleteTodo(index)}>Delete Heading</button>
            </div>
            <div className='add_list'>
              <input 
                type="text"
                className='list-input'
                placeholder='Add List'
                value={listInputs[index] || ''}
                onChange={(e) => handleListInputChange(index, e.target.value)}
              />
              <button className='add-list-button' onClick={() => handleAddList(index)}>Add List</button>

            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
