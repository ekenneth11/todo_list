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
  };
  //adding the delete button for heading
  const handleDeleteTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  }

  //adding an item to the todo list with the given heading
  const handleAddList = (index) => {
    //check if the index exists and if the input is valid
    if (listInputs[index] && listInputs[index].trim() !== ''){
      const newTodo = [...todos];
      newTodo[index].lists.push(listInputs[index]);
      setTodo(newTodo);
      setListInputs({...listInputs, [index]:''});
    }
  };
  const handleListInputChange = (index, value) => {
    setListInputs({...listInputs, [index]:value});
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
            <ul>
              {todo.lists.map((lists, listIndex) => (
                <li key={listIndex} className='todo_inside_list'>
                <p>{lists}</p>
                </li>
              ))}
            </ul>
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

//in the future, we add a checkbox for each item in the list, and add a text-decoration: line-through
//make a drop down option for each headings make it collapsable
//change the background for the app