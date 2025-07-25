
import React, { useRef, useState } from 'react';

const Card9 = () => {
   const [otp, setOtp] = useState(["", "", "", "", ""]); //or useState(new Array(5).fill(""));
  const inputsRef = useRef([]);//This is a way to directly control each input box .

  const handleChange = (element, index) => {
    const value = element.value.replace(/\D/, ''); // Only digits
     // ✅ Use for loop to keep only digits
    // for (let i = 0; i < input.length; i++) {
    //   const char = input[i];
    //   if (char >= '0' && char <= '9') {
    //     value += char;
    //   }
    // }
    if (!value) return;

    const newOtp = [...otp];  // make a copy
    newOtp[index] = value;    // update the current box
    setOtp(newOtp);           // save the new state

    // Move to next input
    if (index < 4) {
      inputsRef.current[index + 1].focus();  // move to next box
    }

    // Auto-submit when full
    if (index === 4 && newOtp.every(val => val !== "")) {
      console.log("Code:", newOtp.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputsRef.current[index - 1].focus();
      }

      e.preventDefault(); // prevent default backspace behavior
    }
  };

  return (
    <div className="flex space-x-3 justify-center">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          maxLength={1}
          className="w-12 h-12 text-center border-2 rounded text-xl focus:outline-none focus:ring-2 ring-blue-400"
          value={digit}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputsRef.current[index] = el)}
        />
      ))}
    </div>
  );
};
export default Card9;
