 import React, { useState, useEffect } from 'react';

function TodoApp() {
  // 1. State to manage the currently selected to-do ID
  const [selectedTodoId, setSelectedTodoId] = useState(1); // Start with Todo 1
  // State to hold the data of the currently displayed to-do
  const [currentTodo, setCurrentTodo] = useState(null);

  // Our sample to-do data
  const allTodos = [
    { id: 1, title: 'Learn React Hooks', description: 'Dive deep into useState and useEffect.' },
    { id: 2, title: 'Build a Portfolio', description: 'Showcase your best React projects.' },
    { id: 3, title: 'Understand State Management', description: 'Explore Redux or Context apps.' },
    { id: 4, title: 'Practice CSS Flexbox', description: 'Master layout techniques for responsive design.' },
  ];

  // 2. useEffect to update `currentTodo` based on `selectedTodoId`
  useEffect(() => {
    console.log(`useEffect running for todo ID: ${selectedTodoId}`);
    // Find the todo that matches the selectedTodoId
    const foundTodo = allTodos.find(todo => todo.id === selectedTodoId);
    setCurrentTodo(foundTodo);

    // Dependency Array: This effect will re-run ONLY when `selectedTodoId` changes
  }, [selectedTodoId]); // <-- IMPORTANT: `selectedTodoId` is in the dependency array

  return (
    <div className='text-white'>
      <h1>My React Todo Viewer</h1>

      {/* Buttons to change the selected todo */}
      <div>
        {[1, 2, 3, 4].map(id => (
          <button
            key={id}
            onClick={() => setSelectedTodoId(id)}
            style={{
              margin: '5px',
              padding: '10px 15px',
              backgroundColor: selectedTodoId === id ? '#007bff' : '#f0f0f0',
              color: selectedTodoId === id ? 'white' : 'black',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Show Todo {id}
          </button>
        ))}
      </div>

      <hr style={{ margin: '20px 0' }} />

      {/* Display the current todo details */}
      {currentTodo ? (
        <div>
          <h2>Todo {currentTodo.id}: {currentTodo.title}</h2>
          <p>{currentTodo.description}</p>
        </div>
      ) : (
        <p>Select a todo to view its details.</p>
      )}
    </div>
  );
}

export default  TodoApp
