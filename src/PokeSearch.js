import React from 'react';
import { useEffect, useState } from 'react';
import { getPokemon } from './services/fetch-utils';

export default function PokeSearch() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonQuery, setPokemonQuery] = useState([]);

  useEffect(() => {
    fetchAndStorePokemon();
  }, []); //eslint-disable-line

  async function fetchAndStorePokemon() {
    const data = await getPokemon(pokemonQuery);

    setPokemon(data.results);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await fetchAndStorePokemon();
    setPokemonQuery('');
  }

  return (
    <div>
      <div className="pokemon-search">
        <form onClick={handleSubmit}>
          <input onChange={(e) => setPokemonQuery(e.target.value)} />
          <button>Search</button>
        </form>
        {pokemon.map((poke, i) => (
          <div key={poke.pokemon + i} className="pokemon">
            <p>{poke.pokemon}</p>
            <img src={poke.url_image} />
          </div>
        ))}
      </div>
    </div>
  );
}
