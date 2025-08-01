import React, { memo, useCallback, useState } from 'react'
 

const Card6 = () => {
    const [count, setCount] = useState(0)    

         const increament =   useCallback(()=>{
             setCount(count + 1)   
       } ,[count]) 
    
         const decreament =   useCallback(()=>{
           setCount(count - 1)   
         } ,[count]) 

         let message = ""

         if( count %2 ==0 ){
            message = `${count}: is Even `
         }else{
             message =` ${count}: is Odd ` 
         }

        
  return (    
    
    <div>
        <p className='text-white'>{count}</p>
        <div className='flex gap-5 text-white mt-9'>
       <button onClick={decreament} className='bg-zinc-600 p-2 rounded'>Decreament</button>
       <button onClick={increament} className='bg-zinc-600 p-2 rounded'>Increament</button>

        </div>

        <p className='mt-6 text-white'> {message} </p>
        
    </div>  
    
  )
}

export default Card6