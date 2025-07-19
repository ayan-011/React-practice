 
import React, { useState } from 'react'

 const Factor = () => {
        const [input, setInput] = useState(0)
        let expensiveValue = 1
        for(let i=1; i<=input; i++){
            expensiveValue = expensiveValue * i
        }
  return (
    <div className='text-white'>        
        <input className='bg-zinc-600 rounded p-1 outline-none' type="number" value={input} onChange={(e)=> setInput(Number(e.target.value))} />
    <div className='mt-4'>
        The factor is: {expensiveValue}
    </div>    
        </div>
  )
}

export default Factor
