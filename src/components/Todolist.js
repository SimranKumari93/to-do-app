
import React, { useState } from 'react';

function Todolist() {

    const [activity , setActivity ] = useState("")
    const [ listData, setlistData ] = useState([])
   
function addActivity(){
    // setlistData(...[listData, activity])
    // console.log(listData)
    setlistData((listData)=>{
      if(!activity.length)
      {
        setActivity([]);
      }
      const updatedList = [...listData, activity]
      console.log(updatedList)
      setActivity('')
      return updatedList
    })
}    

function removeActivity(i){
     const  updatedListData = listData.filter((elem, id)=>{
      return i!== id; 
     })
     setlistData(updatedListData)
}

function removeAll(){
  setlistData([])
}
  return (
    <>
    <div className='container'>
        <div className='header'>TO DO LIST</div>
        <div>
    <input type="text" placeholder="Add-activity" value={activity} onChange={(e)=> setActivity(e.target.value)}/>
   
    <button onClick={addActivity}>Add</button>
    <input type="date" className='input input-bordered input-secondary w-full max w-xs-schedule-date' />
    <button className='plus-button'>+</button>
    </div>
    
    {listData !=[] && listData.map((data, i)=> {
      return (
        <>
       <p key={i}>
          <div className='listData'>{data}</div>
          <button onClick={()=>removeActivity(i)}>Remove(-)</button>
          {listData.length>= 1 &&  <button onClick={removeAll}>Remove All</button>}
        </p>
        </>
      )
    })}
   
    <table className='table w-full'>
      <thead>
    <tr>
      <th>Task</th>
      <th>DueDate</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
    
    </thead>
    <tbody className='todo-list-body'>
      
      <tr class="todo-item" data-id="krsxse53yrj6fgt5jcbn17">
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editTodo('krsxse53yrj6fgt5jcbn17')">
                        <i class="bx bx-edit-alt bx-bx-xs"></i>    
                    </button>
                    <button class="btn btn-success btn-sm" onclick="toggleStatus('krsxse53yrj6fgt5jcbn17')">
                        <i class="bx bx-check bx-xs"></i>
                    </button>
                    <button class="btn btn-error btn-sm" onclick="deleteTodo('krsxse53yrj6fgt5jcbn17')">
                        <i class="bx bx-trash bx-xs"></i>
                    </button>
                </td>
            </tr>
    </tbody>
    </table>
   
    </div>
    
    </>
  )
}

export default Todolist


