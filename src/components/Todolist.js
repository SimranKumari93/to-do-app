
import React, { useState } from 'react';

function Todolist() {

    const [activity , setActivity ] = useState("")
    const [ listData, setlistData ] = useState([])
    const [ edit, setEdit ] = useState([])
function addActivity(){
    // setlistData(...[listData, activity])
    // console.log(listData)
    setlistData((listData)=>{
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
function addEdit(){
         const updatedEdit = ((edit)=>{
          console.log(setEdit)
         })
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
    <button onClick={addEdit}>Edit</button>
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
    <tbody className='todo-list-body'></tbody>
    </table>
   
    </div>

    </>
  )
}

export default Todolist





















// import React, { useState } from 'react';

// function Todolist() {

//     const [activity , setActivity ] = useState("")
//     const [ listData, setlistData ] = useState([])
//     const [ value, setValue ] = useState(text)

// }
// function addActivity(){
//     // setlistData(...[listData, activity])
//     // console.log(listData)
//     setlistData((listData)=>{
//       const updatedList = [...listData, activity]
//       console.log(updatedList)
//       setActivity('')
//       return updatedList
//     })
// }    

// function removeActivity(i){
//      const  updatedListData = listData.filter((elem, id)=>{
//       return i!== id; 
//      })
//      setlistData(updatedListData)
// }
// function removeAll(){
//   setlistData([])
// }

//   return (
//     <>
//     <div className='container'>
//         <div className='header'>TO DO LIST</div>
//         <div>
//     <input type="text" placeholder="Add-activity" value={activity} onChange={(e)=> setActivity(e.target.value)}/>
   
//     <button onClick={addActivity}>Add</button>
//     <input type='text' value={value} onChange={(e) => setIsEditing(e.target.value)}/>
//     <input type="date" className='input input-bordered input-secondary w-full max w-xs-schedule-date' />
//     <button className='plus-button'>+</button>
//     </div>
    
//     {listData !=[] && listData.map((data, i)=> {
//       return (
//         <>
//         <p key={i}>
//           <div className='listData'>{data}</div>
//           <button onClick={()=>removeActivity(i)}>Remove(-)</button>
//           {listData.length>= 1 &&  <button onClick={removeAll}>Remove All</button>}
//         </p>
//         </>
//       )
//     })}
   
//     <table className='table w-full'>
//       <thead>
//     <tr>
//       <th>Task</th>
//       <th>DueDate</th>
//       <th>Status</th>
//       <th>Actions</th>
//     </tr>
//     </thead>
//     <tbody className='todo-list-body'></tbody>
//     </table>
   
//     </div>

//     </>
//   )
//   }


// export default Todolist