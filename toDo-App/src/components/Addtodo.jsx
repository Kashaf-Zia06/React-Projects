import { useState } from 'react'

const Addtodo = ({ toDos, setToDos, closeModal }) => {
  const [title, setTitle] = useState("")
  const [id, setId] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)

  const handleAdd = () => {
    if (!id || !title) return; // simple validation
    const newTodo = { id, text: title, completed: isCompleted }
    setToDos([...toDos, newTodo])

    // Clear form
    setId("")
    setTitle("")
    setIsCompleted(false)

    // Close modal after adding
    closeModal()
  }

  return (
    <div className='flex flex-col'>
      <input
        className='mb-3 p-2 border rounded w-full'
        type="text"
        placeholder='Add ID'
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        className='mb-3 p-2 border rounded w-full'
        type="text"
        placeholder='Add Todo'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="flex items-center mb-3">
        <input
          type='checkbox'
          checked={isCompleted}
          onChange={(e) => setIsCompleted(e.target.checked)}
          className='mr-2'
        />
        <label>Completed?</label>
      </div>

      <button
        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
        onClick={handleAdd}
      >
        Add Task
      </button>
    </div>
  )
}

export default Addtodo