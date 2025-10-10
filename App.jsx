import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const[x,setx]=useState(0)
  useEffect(()=>{
    console.log('Executed...')
  },[x]);
  return(
    <>
    <div>
      <form>
        <label >First Name :-</label>
        <input type="text" /><br />
        <label >Last Name :-</label>
        <input type="text" /><br />
      </form>
    </div><br />
    <button onClick={()=>setx(x+1)}>Add Data</button>
    {x}
    </>
  )
  

}

export default App
