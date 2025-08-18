import React, { useEffect , useState} from 'react'

 
const useMouseMove = () => {
    const [mousePoint, setMousePoint] = useState({x:0, y:0})

    const handleMouseMove = (e) =>{
        setMousePoint({x: e.clientX, y: e.clientY})
    }

    useEffect(()=>{
        window.addEventListener('mousemove', handleMouseMove)
        return ()=>{

            window.removeEventListener('mousemove', handleMouseMove)
        }
         
    },[])

    return mousePoint;

}




const useTimeInterval = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, []); // empty dependency → run only once

  return count;
};
const Card11 = () => {
    const MouseMove = useMouseMove()
    const TimeInterval = useTimeInterval()
  return (
    <div className='flex flex-col gap-9'>
        <div className=""> seconds: {TimeInterval}</div>
       
        your position is x: {MouseMove.x} , y: {MouseMove.y} 
    </div>
  )
}



 


export default Card11