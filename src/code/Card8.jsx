import React, { useState } from 'react';

// Para generator
const Card8 = () => {
  const [input, setInput] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = () => {
    setType(input); // update type with input value
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <input
        type="text"
        placeholder="Type here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-white text-black p-2 rounded"
      />
      <button
        onClick={handleSubmit}
        className="text-black cursor-pointer p-2 bg-white w-fit rounded"
      >
        Submit
      </button>

      <p className="text-white">{type}</p>
    </div>
  );
};

export default Card8;
