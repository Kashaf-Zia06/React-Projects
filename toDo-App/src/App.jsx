import './App.css'
import TodoCard from './components/TodoCard'
import Addtodo from './components/Addtodo'
import { useState } from 'react'

function App() {
  const dummyTodos = [
    { id: 1, text: "Learn React basics", completed: false },
    { id: 2, text: "Build Todo App", completed: true },
    { id: 3, text: "Practice JavaScript problems", completed: false },
    { id: 4, text: "Watch React hooks tutorial", completed: true },
    { id: 5, text: "Revise SQL queries", completed: false }
  ];

  const [showAdd, setShowAdd] = useState(false)
  const [toDos, setToDos] = useState(dummyTodos);

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className='text-4xl font-bold text-center text-gray-800 mb-6'>My Todo App</h1>

      {/* Todo List */}
      <TodoCard todos={toDos} setToDos={setToDos} />

      {/* Add Todo Button */}
      <div className="text-center mt-6">
        <button
          onClick={() => setShowAdd(true)}
          className='bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition'
        >
          Add TODO
        </button>
      </div>

      {/* Add Todo Modal/Card */}
      {showAdd && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/3 relative">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowAdd(false)}
            >
              ✖
            </button>

            <Addtodo toDos={toDos} setToDos={setToDos} closeModal={() => setShowAdd(false)} />
          </div>
        </div>
      )}
    </div>
  )
}

export default App