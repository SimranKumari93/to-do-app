import React, { useState } from 'react';

function Todolist() {

    const [activity , setActivity ] = useState("")
    const [ listData, setlistData ] = useState([])
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
function removeAll(){
  setlistData([])
}
  return (
    <>
    <div className='container'>
        <div className='header'>TO DO LIST</div>
    <input type="text" placeholder="Add-activity" value={activity} onChange={(e)=> setActivity(e.target.value)}/>
    <button onClick={addActivity}>Add</button>
    <p className='List-heading'>Here's your List :{")"}</p>
    {listData !=[] && listData.map((data, i)=> {
      return (
        <>
        <p key={i}>
          <div className='listData'>{data}</div>
          <button onClick={()=>removeActivity(i)}>Remove(-)</button>
        </p>
        </>
      )
    })}
    {listData.length>= 1 &&  <button onClick={removeAll}>Remove All</button>}
   
    </div>

    </>
  )
}

export default Todolist