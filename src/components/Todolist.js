
import React, { useState } from 'react';
import Task from './Task';
function Todolist() {

  const [activity, setActivity] = useState('')
  const [listData, setlistData] = useState([])

  // const [ edit, setEdit ] = useState([])
  const [editId, setEditId] = useState(0);
  function addActivity() {
    // setlistData(...[listData, activity])
    // console.log(listData)

    if (activity !== "") {

      setlistData([...listData, { activity, id: `${Date.now()}` }]);
      setActivity('');
      /*setlistData((listData)=>{
        const updatedList = [...listData, activity]
        console.log(updatedList)
        setActivity('')
        return updatedList
      })*/
    }

    if (editId) {
      const editTask = listData.find((i) => i.id === editId);
      const updatedTasks = listData.map((t) =>
        t.id === editTask.id ? t = { id: t.id, activity } : { id: t.id, activity: t.activity });
      setlistData(updatedTasks);
      setEditId(0);
      return;
    }

  }

  const removeActivity = (i) => {

  
    const updatedListData = listData.filter((elem, id) => {
      return i !== id;
    })
    setlistData(updatedListData);


  }
  /*function addEdit(){
           const updatedEdit = ((edit)=>{
            console.log(setEdit)
           })
  }*/
  const Handledit = (id) => {
    const editTask = listData.find((i) => i.id === id);
    setActivity(editTask.activity);
    setEditId(id);

  }
  function removeAll() {
    setlistData([])
  }

  return (
    <>
      <div className='container'>
        <div className='header'>TO DO LIST</div>
        <div>
          <input type="text" placeholder="Add-activity" value={activity} onChange={(e) => setActivity(e.target.value)} />


          <button onClick={addActivity}>Add</button>
          {/*<button onClick={addEdit}>Edit</button>*/}


          <input type="date" className='input input-bordered input-secondary w-full max w-xs-schedule-date' />
          <button className='plus-button'>+</button>
        </div>

        {/*{listData !=[] && listData.map((data, i)=> {
      return (
        <>
       <p key={i}>
          <div className='listData'>{data}</div>

          <button onClick={()=>removeActivity(i)}>Remove(-)</button>
          <button onClick={()=>Handledit(i)}>Edit</button>

          <button onClick={()=>removeActivity(i)}>Remove</button>

          {listData.length>= 1 &&  <button onClick={removeAll}>Remove All</button>}
      </p>*
       
        </>
      )
    })}*/}

        {listData.map((activity) => {
          return <Task activity={activity.activity} removeActivity={removeActivity} removeAll={removeAll}
            id={activity.id} Handledit={Handledit} />
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
