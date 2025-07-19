import React, { memo, useCallback, useState } from 'react'

 const BasicCount = () => {
     const [count, setCount] = useState(0)      
     const increament =   useCallback(()=>{
         setCount(count + 1)   
   } ,[count])

     const decreament =   useCallback(()=>{
       setCount(count - 1)   
     } ,[count])      

return (    
    
    <div>
        <p className='text-white'>{count}</p>
        <div className='flex gap-5 text-white mt-9'>
       <button onClick={increament} className='bg-zinc-600 p-2 rounded'>Increament</button>
       <button onClick={decreament} className='bg-zinc-600 p-2 rounded'>Decreament</button>

        </div>
    </div>  
    
  )
}

export default BasicCount
