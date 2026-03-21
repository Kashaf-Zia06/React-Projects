const TodoCard = ({ todos, setToDos }) => {

  const handleDelete = (id) => {
    setToDos(todos.filter(todo => todo.id !== id));
  };

  const toggleCheck = (id) => {
    const newTodos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setToDos(newTodos);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {todos.map(todo => (
        <div key={todo.id} className='bg-purple-500 text-white p-4 rounded-lg shadow-md flex flex-col justify-between'>
          <div>
            <p className='font-semibold'>ID: {todo.id}</p>
            <p className={`${todo.completed ? 'line-through opacity-70' : ''}`}>{todo.text}</p>
            <p className='mt-2 text-sm'>
              Status: {todo.completed ? "Completed ✅" : "Not Completed ❌"}
            </p>
          </div>

          <div className="flex items-center justify-between mt-3">
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => toggleCheck(todo.id)} 
            />
            <button 
              onClick={() => handleDelete(todo.id)}
              className='bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition'
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodoCard;