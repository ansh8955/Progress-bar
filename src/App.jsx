import { useEffect, useState } from 'react'
import './App.css';
import Progressbar from './Components/Progressbar';

function App() {

  const [state,setState] = useState(0);

  useEffect(()=>{

setInterval(()=>{

  setState((prev)=>prev+1)
},100)

  },[])

  return (
    <>
     <Progressbar value={state}/>
    </>
  )
}

export default App
