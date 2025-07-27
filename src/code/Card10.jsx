import React, { useEffect, useRef, useState } from 'react'

const Card10 = () => {
    const [phoneNumber, setPhoneNumber] = useState(" ")
    const [showOtpInput , setShowOtpInput] = useState(false)

    const handlePhoneNumber = (event) =>{
        setPhoneNumber(event.target.value)
    }
    const handelPhoneSubmit = (event) =>{
       event.preventDefault()  // its prevent from page reloading.
         
       const regex = /^[0-9]{11}$/;
       if(phoneNumber.length> 11 || regex.test(phoneNumber)){
        alert("Invalid phone number")
        return ;
       }


       // call API 
       // Show OTP field
   
       setShowOtpInput(true)
    }

      
    const onOtpSubmit = (otp) => {

console.log("otp send successfully", otp)
    }



  return ( 
    <div > 

   { !showOtpInput? <form action="" onSubmit={handelPhoneSubmit} >

        <div className='flex gap-5 '>
        <input className='bg-white rounded '
        placeholder='type here'
          type="number"
          onChange={handlePhoneNumber}  
          value={phoneNumber}  />

          <input type="Submit"  value="Submit" className='bg-zinc-950 p-1 rounded cursor-pointer text-white' />

        </div>


        </form > :
        
        <div className=''>
            <div className="flex wifull  justify-center">
            <p className='text-white flex gap-2'  >Enter OTP sent to :  <p className='underline text-blue-600'>  { phoneNumber}</p> </p>
            </div>
          
          <OtpInput length={4} onSubmit={onOtpSubmit}/>

        </div>
        
    }
    </div>
  )
}

export default Card10



export const OtpInput  = (length = 4, onOtpSubmit= ()=>{}) =>{

    const [otp, setOtp] = useState(["", "", "", ""])

    const inputRefs = useRef([]) //auto focus on first idex, without click (for fast login)

    useEffect(()=>{
      if(inputRefs.current[0]){
        inputRefs.current[0].focus()
      }
    })

    const handleChange =(index, e)=>{

      const value = e.target.value  

      if(isNaN(value)) return; //just return not do anything.
      
      const newOtp = [...otp]
      
      //Allow only one input
      newOtp[index]= value.substring(value.length-1)
      setOtp(newOtp)
              
      //submit trigger
      const combinedOtp = newOtp.join('')
      // console.log(newOtp, combinedOtp)
      if(combinedOtp.length === length) onOtpSubmit(combinedOtp)

        //move to the next input after type.
        if(value && index<length-1 && inputRefs.current[index + 1]){
          inputRefs.current[index + 1].focus();
        }
    }
    const handleClick =()=>{

    }
    const handleKeyDown =()=>{

    }

    return (
           <div className='w-full flex justify-center py-10'>
            
            {
                otp.map((value, index)=>{
                 
                    return <input type="text"
                    ref={(input) => (inputRefs.current[index] = input)}
                    key={index}
                    value={value}
                    onChange={(e)=> handleChange(index, e)}
                    onClick={()=> handleClick(index)}
                    onKeyDown={(e)=> handleKeyDown(index, e)}
                       
                    className='otpInput bg-zinc-950  text-white p-3 w-12 ml-2  '
                    /> 

                })
            }
           </div>
    )
}




 