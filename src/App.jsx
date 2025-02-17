import { useState } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const[ check,setCheck] = useState(false);
  const [character, setCharacter] = useState( false);
  const [password, setPassword] = useState("");

  const passwordgenerator =()=>{
    
  }

  return (
    <>
      <h1 className='text-4xl text-center'>PASSWORD GENERATOR</h1>
    </>
  )
}

export default App
