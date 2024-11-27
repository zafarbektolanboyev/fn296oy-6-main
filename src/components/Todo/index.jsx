import React, {useState} from 'react'
import './index.css'
import trash from '../../assets/trash.svg'

function Todo() {
  const [inpValue, setInpValue] = useState('')
  const [todo, setTodo] = useState([])

  function handleInput(event){
    setInpValue(event.target.value)
  }
  function handleTodoAdd(){
    if (inpValue.trim() !== '') {
      setTodo((prevTasks) => [...prevTasks, inpValue]);
      setInpValue('');
    }
  }

  return (
    <div className='todo'>
      <h3 className='title'>Todo List</h3>

      <div className="inputs">
        <input type="text" onChange={handleInput} value={inpValue} className='input' placeholder='Enter todo'/>
        <button className='btn' onClick={handleTodoAdd}>Add</button>
      </div>
      <ul className='todos'>
          {
            todo.map((task, index) => (
              <li key={index}>
                {task}
                <img src={trash} alt="" />
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default Todo
