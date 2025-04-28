import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';
import Loading from './components/Loading';
import NoResults from './components/NoResults';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const data = await response.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );

        setPokemons(pokemonDetails);
        setFilteredPokemons(pokemonDetails);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching pokemons:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    let filtered = pokemons;

    if (searchTerm) {
      filtered = filtered.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType) {
      filtered = filtered.filter(pokemon =>
        pokemon.types.some(typeInfo => typeInfo.type.name === selectedType)
      );
    }

    setFilteredPokemons(filtered);
  }, [searchTerm, selectedType, pokemons]);

  if (loading) return <Loading />;
  if (error) return <div className="text-center mt-8">Something went wrong. Please try again.</div>;

  return (
    <div>
      <Header />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      {filteredPokemons.length > 0 ? (
        <PokemonList pokemons={filteredPokemons} />
      ) : (
        <NoResults />
      )}
    </div>
  );
};

export default App;
