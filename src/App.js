import React,{useState} from 'react'
// import './App.css';
let globalid=0
function App() {
const [task,checktask]=useState("")
const [todo , todoupdate ]=useState([ ])
function click(){
  todoupdate(oldtask=>{
    checktask('')
    // return [...oldtask ,task]
    return [...oldtask ,{todo:task,id:globalid++}]
  })
}
function Deletetheitem(itemID){
  todoupdate(oldtask => oldtask.filter(item => item.id !== itemID))
}

function enterkey(er){
if (er.keyCode===13){
  click()
}}
  return <div style={{backgroundColor: "purple"}}>
    <h1>TO DO LIST</h1>
    <input 
    onKeyDown={enterkey}
     type="text" 
     value={task} 
     onChange={e=>checktask(e.target.value)}/>
    <button onClick={click}>Click to add</button>
 
    <ul>
      {todo.map((item,index)=>{
      return <div key={index}>
        <li>{item.todo}</li>
        <button onClick={()=>Deletetheitem(item.id)}>Delete</button>

       </div>
})}
    </ul>
  </div>;
}

export default App; 
