import React from 'react'

const DeleteButton = () => {
    const [message, setMessage] = useState()
 
    const deleteTask = (id) => {
        setTasks(tasks.filter((task)=> task.id !== id))
      }

    return (
    <div>
        
    <button
    className='delete-btn'
    >
        X
        
        
    </button>    
    </div>
  )
}

export default DeleteButton