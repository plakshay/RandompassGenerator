import { useState, useCallback, useEffect } from 'react'



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

    for( let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1); // index value, we need to pick character on this index from the string
      pass += str.charAt(char);
    } 
    setPassword(pass)

  } , [length, checknum , character, setPassword])

//call password generator
// introduction to useEffect hook for the calling of the function as if we call it as it is, it will end up in the infinite loop of callback and hence will not be rendered according to the scope of react
useEffect(()=>{
  passwordgenerator()
},[length,checknum,character,passwordgenerator])



  return (
    <><div className="flex items-center justify-center h-screen">
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-3xl text-center font-bold my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg bg-white overflow-hidden mb-4'>
          <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          />
        <button
        
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        </div>

         <div
      className='flex text-sm gap-x-2'
      >
        <div className='flex items-center gap-x-1'>
          <input // range input
              type="range" 
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setlength(e.target.value)}} //e = event that will call setLength property
          />
        <label htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type ="checkbox"
          defaultChecked={checknum}
          id="numberInput"
          onChange={()=>{
            setChecknum((prev)=>!prev); // will change the status from false to true and vice-versa
          }}
          />
          <label htmlFor="number">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>

          <input
          type="checkbox"
          defaultChecked={character}
          id="characteInput"
          onChange={()=>{
            setCharacter((prev)=>!prev);
          }}
          />
        </div>
        <label htmlFor="charInput">Sp. Character</label>
        
        </div>
      </div>
      </div>
    </>
  )
}

export default App
