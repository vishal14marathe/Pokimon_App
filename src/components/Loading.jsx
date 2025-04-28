import React from 'react';

const pokemonImages = [
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',  

  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',  
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',   
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',  

  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',  
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png', 
];

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-cyan-100 via-indigo-100 to-purple-200 overflow-hidden">
      <div className="relative w-80 h-80 animate-spin-slow"> 
        {pokemonImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Pokémon Loading"
            className="absolute w-24 h-24"    
            style={{
              top: `${50 + 40 * Math.sin((index / pokemonImages.length) * 2 * Math.PI)}%`,
              left: `${50 + 40 * Math.cos((index / pokemonImages.length) * 2 * Math.PI)}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>
      <h2 className="text-3xl mt-10 font-bold text-indigo-700 tracking-wide animate-pulse">
        Loading Pokémon...
      </h2>
    </div>
  );
};

export default Loading;
