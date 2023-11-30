
import React, { useState } from 'react';

function Todolist() {

    const [activity , setActivity ] = useState("")
    const [ listData, setlistData ] = useState([])
    const [ task, setTask ] = useState("")
    const [ taskList , settaskList ] = useState([])
    const [ edit, setEditid ] = useState(0)
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
// function handleSubmit(){
//   if(task !== ""){
//     settaskList([...taskList, { task, id : `${task}-${Date.now()}`}])
//     setTask("")
//   }
// }
function removeActivity(i){
     const  updatedListData = listData.filter((elem, id)=>{
      return i!== id; 
     })
     setlistData(updatedListData)
}
if(edit){
  const editTask = taskList.find((i) => i.id === edit)
  const updatedTask = taskList.map((t) => 
  t.id === editTask.id ? t={id : t.id, task} : {id: t.id, task : t.task} )
  settaskList(updatedTask)
  setEditid(0)
  return ;
}
function removeAll(){
  setlistData([])
}
function handleEdit(id){
  const editTask = taskList.find((i) => i.id === id)
  settaskList(editTask.task)
  setEditid(id)
}
  return (
    <>
    <div className='container'>
        <div className='header'>TO DO LIST</div>
        <div>
    <input type="text" placeholder="Add-activity" value={activity} onChange={(e)=> setActivity(e.target.value)}/>
   
    <button onClick={addActivity}>Add</button>
    <button onClick={() => handleEdit(task.id)} className='edit-btn'>Edit</button>
    <input type="date" className='input input-bordered input-secondary w-full max w-xs-schedule-date' />
    <button className='plus-button'>+</button>
    </div>
    
    {listData !=[] && listData.map((data, i)=> {
      return (
        <>
       <p key={i}>
          <div className='listData'>{data}</div>
          <button onClick={()=>removeActivity(i)}>Remove</button>
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
    </table>
   
    </div>
    
    </>
  )
}

export default Todolist
