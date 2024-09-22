import React from "react";
import ImageSlider from "./ImageSlider";

function Pokemon(props) {
  const areaPokemons = props.areaPokemons;
  const userPokemons = props.userPokemons;
  const setSelectedUserPokemon = props.setSelectedUserPokemon;
  const setSelectedAreaPokemon = props.setSelectedAreaPokemon;
  return (
    <div className="pokemonSlider">
      <div className="userPokemonSlider">
        <h3>Your Pokemons</h3>
        {
          <ImageSlider
            pokemon={userPokemons}
            setSelectedPokemon={setSelectedUserPokemon}
          />
        }
      </div>
      <div className="areaPokemonSlider">
        <h3>Enemy Pokemons</h3>
        {
          <ImageSlider
            pokemon={areaPokemons}
            setSelectedPokemon={setSelectedAreaPokemon}
            
          />
        }
      </div>
    </div>
  );
}

export default Pokemon;
