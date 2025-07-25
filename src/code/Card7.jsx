import React, { useState } from 'react'


//Color changer
const Card7 = () => {
 
    const [changer, setChanger] = useState(' ')

  return (
    <>  
    <div className=" w-full h-full flex flex-col ">
         <div className="bg-black h-full w-full p-5">
            <div className={`color bg-red-90 w-full h-full rounded-md   ${changer}`}></div>
         </div>
         <div className="  flex justify-between md:px-9   py-2 md:p-2  bg-red-0">
            <button onClick={()=> setChanger('bg-red-900')} className='p-1 bg-black text-white rounded-md md:px-2 cursor-pointer  '> Red</button>
            <button  onClick={()=> setChanger('bg-blue-950')} className='p-1 bg-black text-white rounded-md md:px-2 cursor-pointer  '>Blue</button>
            <button  onClick={()=> setChanger('bg-green-900')} className='p-1 bg-black text-white rounded-md md:px-2 cursor-pointer  '>Green</button>
            <button  onClick={()=> setChanger('bg-zinc-900')} className='p-1 bg-black text-white rounded-md md:px-2 cursor-pointer  '>Zinc</button>
            <button  onClick={()=> setChanger(' ')} className='p-1 bg-black text-white rounded-md md:px-2 cursor-pointer  '>Default</button>
         </div>
    </div>

    
    </>
  )
}

export default Card7