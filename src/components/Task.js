import React from 'react';

const Task = ({activity , removeActivity ,removeAll, id, Handledit}) => {

  return (
    <div className='task'>
        <h2 className='listData'> {activity} </h2>
        <button className='delete-btn' onClick={() => removeActivity(id)}> DeleteButton </button>
        <button className='edit-btn' onClick={() => Handledit(id)}> Edit </button>
        <button className='edit-btn' onClick={() => removeAll(id)}> RemoveAll </button>

    </div>
  )
}

export default Task;