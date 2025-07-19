import React from 'react'
import  { Fragment } from 'react'
import { useState } from 'react'


const Todo3 = () => {
  
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "learning react",
      description: "description first"
    },
    {
  id: 2,
      title: "learning DB",
      description: "description second"
    },{
        id: 3,
      title: "learning js",
      description: "description third"
    }
  ])


  
  function addTodo(){ 
    setTodos([...todos, {
      id: 4,
      title:" fourth title",
      description: "fourth description"
    }])
    
  }


return(
  <div className='text-white'>
    <button className='bg-zinc-600 rounded p-1' onClick={addTodo}>Add todo</button>
      {todos.map(todo =>
      <div className='bg-zinc-700 mt-4 rounded p-2'>
          <Todo title={todo.title} description={todo.description} />
        
      </div>
      )}
  </div>
  )


}

function Todo({title, description}) {
  return (
  <div>
  <h1>{title}</h1>
  
  <h1>{description}</h1>

  </div>
  )
}



export default Todo3 
