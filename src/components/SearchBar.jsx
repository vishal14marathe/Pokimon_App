import React, { useState, useRef, useEffect } from 'react';

const types = [
  '', 'fire', 'water', 'grass', 'electric', 'bug', 'poison', 'ground',
  'fairy', 'normal', 'fighting', 'psychic', 'rock', 'ghost', 'ice', 'dragon'
];

const CustomSelect = ({ selectedType, setSelectedType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleOptionClick = (type) => {
    setSelectedType(type);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectRef]);

  return (
    <div className="relative w-full max-w-sm" ref={selectRef}>
      <button
        type="button"
        className="block w-full p-2 sm:p-3 border border-gray-300 rounded-lg bg-white text-gray-700 text-xs sm:text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red-400 flex justify-between items-center"
        onClick={toggleOpen}
      >
        {selectedType ? selectedType.charAt(0).toUpperCase() + selectedType.slice(1) : 'All Types'}
        <svg className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-md z-10 overflow-y-auto max-h-48">
          <button
            key=""
            onClick={() => handleOptionClick('')}
            className="block w-full text-left px-4 py-2 text-sm md:text-base text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
          >
            All Types
          </button>
          {types.map((type) => (
            type && (
              <button
                key={type}
                onClick={() => handleOptionClick(type)}
                className="block w-full text-left px-4 py-2 text-sm md:text-base text-gray-700 hover:bg-gray-300 focus:outline-none focus:bg-gray-100"
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            )
          ))}
        </div>
      )}
    </div>
  );
};

const SearchBar = ({ searchTerm, setSearchTerm, selectedType, setSelectedType }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 px-4 py-6 justify-center items-center bg-gray-200 shadow-inner w-full">

      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 sm:p-3 border border-gray-300 rounded-lg w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-red-400 text-sm md:text-base"
      />

      <CustomSelect selectedType={selectedType} setSelectedType={setSelectedType} />

    </div>
  );
};

export default SearchBar;