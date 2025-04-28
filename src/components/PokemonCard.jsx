import React from 'react';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl p-6 flex flex-col items-center">
      <div className="bg-gray-100 p-4 rounded-full mb-4">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-24 h-24 object-contain"
        />
      </div>
      <h2 className="text-xl capitalize font-bold text-gray-800">{pokemon.name}</h2>
      <p className="text-sm text-gray-500 mb-2">ID: #{pokemon.id}</p>
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {pokemon.types.map((typeInfo) => (
          <span
            key={typeInfo.type.name}
            className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
              typeColors[typeInfo.type.name] || 'bg-gray-300 text-gray-700'
            }`}
          >
            {typeInfo.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

// Dynamic color by type
const typeColors = {
  fire: 'bg-red-400 text-white',
  water: 'bg-blue-400 text-white',
  grass: 'bg-green-400 text-white',
  electric: 'bg-yellow-400 text-black',
  bug: 'bg-green-300 text-black',
  poison: 'bg-purple-400 text-white',
  ground: 'bg-yellow-600 text-white',
  fairy: 'bg-pink-300 text-white',
  normal: 'bg-gray-300 text-black',
  fighting: 'bg-red-700 text-white',
  psychic: 'bg-pink-500 text-white',
  rock: 'bg-yellow-700 text-white',
  ghost: 'bg-purple-700 text-white',
  ice: 'bg-blue-200 text-black',
  dragon: 'bg-indigo-600 text-white'
};

export default PokemonCard;
