 import React, { useState, useEffect } from 'react'

 function useDebounce (value , timeout){
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(()=>{
        setTimeout(()=>{
         setDebounceValue(value)
        }, timeout)

    }, [value])
    return debounceValue   
    
 }
 
 const Experimnt = () => {
    const [value, setValue] = useState(0)
    const debounce = useDebounce(value, 500)
   return (
     <div className='flex flex-col gap-9 p-5 w-full h-screen'>
        your debounce value is here:  {debounce}
        <input className='bg-zinc-200 p-2 rounded text-black w-1/6 ' type="text" placeholder='type' onChange={e => setValue(e.target.value)} />
     </div>
   )
 }
 
 export default Experimnt





 