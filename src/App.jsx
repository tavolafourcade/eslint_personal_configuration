import React, { useState } from 'react'

function App () {
  const [todos, setTodos] = useState([])

  const handleAddTodo = (e) => {
    e.preventDefault()
    const text = e.target.text.value

    if (!text || todos.includes(text)) return
    setTodos(todos => todos.concat(text))
    e.target.text.value = ''
  }

  const handleRemoveTodo = (index) => {
    setTodos(todos => todos.filter((todo, _index) => _index !== index))
  }
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="text"/>
        <button>Add todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}<button onClick={() => handleRemoveTodo(index)}>X</button></li>
        })}
      </ul>
    </div>
  )
}

export default App
