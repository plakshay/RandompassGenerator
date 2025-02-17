import { useState, useCallback } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const[ checknum,setChecknum] = useState(false);
  const [character, setCharacter] = useState( false);
  const [password, setPassword] = useState("");

  const passwordgenerator = useCallback(()=>{
    let pass=""

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" // data which will help in generating password

    if(checknum) str+="0123456789"
    if(character) str+="!@#$%^&*_~(){}"

    for( let i=1;i<=array.length;i++){
      let char = Math.floor(Math.random()*str.length+1); // index value, we need to pick character on this index from the string
      pass = str.charAt(char);
    } 
    setPassword(pass)

  } , [length, checknum , character, setPassword])
  return (
    <>
      <h1 className='text-4xl text-center'>PASSWORD GENERATOR</h1>
    </>
  )
}

export default App
