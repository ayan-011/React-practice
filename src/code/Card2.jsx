import React, { useState } from 'react';

const CardSwitcher = () => {
  const [activeCard, setActiveCard] = useState('card1'); // default is card1

  return (
    <div className="flex flex-col items-center p-4">
      {/* Buttons */}
      <div className="mb-4 space-x-4">
        <button
          className="text-white bg-zinc-500 px-4 py-2 rounded"
          onClick={() => setActiveCard('card1')}
        >
          Btn1
        </button>
        <button
          className="text-white bg-zinc-500 px-4 py-2 rounded"
          onClick={() => setActiveCard('card2')}
        >
          Btn2
        </button>
        <button
          className="text-white bg-zinc-500 px-4 py-2 rounded"
          onClick={() => setActiveCard('card3')}
        >
          Btn3
        </button>
      </div>

      {/* Card Display */}
      <div className="w-64 h-40 rounded shadow-lg p-4 bg-zinc-600 text-white border">
        {activeCard === 'card1' && <div  >This is Card 1</div>}
        {activeCard === 'card2' && <div>Hello World</div>}
        {activeCard === 'card3' && <div>This is Card 3</div>}
      </div>
    </div>
  );
};

export default CardSwitcher;
