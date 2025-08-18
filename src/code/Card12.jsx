import { useState, useEffect } from "react";

// Debounce utility
function debounce(func, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

export default function Card12() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Example word list
  const words = [ "apple", "ant",        // A
  "banana", "ball",      // B
  "cat", "car",          // C
  "dog", "doll",         // D
  "elephant", "egg",     // E
  "fish", "fan",         // F
  "grape", "goat",       // G
  "hat", "house",        // H
  "ice", "igloo",        // I
  "juice", "jelly",      // J
  "kite", "kangaroo",    // K
  "lion", "lamp",        // L
  "monkey", "milk",      // M
  "nest", "net",         // N
  "orange", "owl",       // O
  "pear", "pen",         // P
  "queen", "quilt",      // Q
  "rabbit", "rose",      // R
  "sun", "star",         // S
  "tiger", "tree",       // T
  "umbrella", "unicorn", // U
  "van", "vase",         // V
  "water", "wolf",       // W
  "xylophone", "x-ray",  // X
  "yak", "yarn",         // Y
  "zebra", "zoo"   ];

  // Function to filter suggestions
  const getSuggestions = (text) => {
    if (!text) return [];
    return words.filter((word) => word.toLowerCase().startsWith(text.toLowerCase()));
  };

  // Debounced search function
  const handleSearch = debounce((text) => {
    const results = getSuggestions(text);
    setSuggestions(results);
  }, 200); // 500ms interval

  // Whenever input changes → update query & trigger debounce
  const handleChange = (e) => {
    const text = e.target.value;
    setQuery(text);
    handleSearch(text);
  };

  return (
    <div className="flex flex-col items-center mt-10 text-white">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search fruits..."
        className="border border-gray-400 rounded px-3 py-2 w-64"
      />
      <ul className="mt-2 w-64 border border-gray-200 rounded bg-white">
        {suggestions.map((s, i) => (
          <li key={i} className="px-3 py-1 hover:bg-gray-100 cursor-pointer">
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
