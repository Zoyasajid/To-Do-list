import React,{useState} from 'react'
import './App.css';
import {FaTrashAlt} from 'react-icons/fa'
let globalid=0
function App() {
const [task,checktask]=useState("")
const [todo , todoupdate ]=useState([ ])
function click(){
  
  todoupdate(oldtask=>{
    
    checktask('')
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
  return <div className='main-div'>
    <div className='field'>
    <div className='inputfield'>
    <h1><i>--TO-DO LIST--</i></h1>
    <input className='text'
    onKeyDown={enterkey}
    type="text" 
    value={task} 
    onChange={e=>checktask(e.target.value)}/>
    </div>
    <button onClick={click} className='btn'>Click to add</button>
    <hr/>
 </div>
    <ul>
      {todo.map((item,index)=>{
      return <div className='select' key={index}>
        <li>{item.todo}</li>
        <button className='delete' onClick={()=>Deletetheitem(item.id)}><FaTrashAlt/></button>

       </div>
})}
    </ul>
  </div>;
}

export default App; 
