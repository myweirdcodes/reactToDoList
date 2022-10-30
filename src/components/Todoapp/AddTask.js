import React, { useState } from 'react'

const Addtask = ({addTask,items}) => {
  const [value,setValue] = useState("")
  const addItem =()=>{
    addTask(value);
    setValue("")
  }
  return (
    <>
      <div className='input-container'>
        <input type="text" value={value} className='input' placeholder='Add a new task' onChange={(e)=>{setValue(e.target.value)}}/>
        <button onClick={addItem} className='add-btn'>Add</button>
        <h1 className="items">PENDING : {items}</h1>
      </div>

    </>
  )
}

export default Addtask
