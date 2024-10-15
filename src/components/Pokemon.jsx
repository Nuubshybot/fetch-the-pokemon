import React from "react";
import ImageSlider from "./ImageSlider";

function Pokemon(props) {
  const areaPokemons = props.areaPokemons;
  const userPokemons = props.userPokemons;
  const onSetSelectedUserPokemon = props.onSetSelectedUserPokemon;
  const onSetSelectedAreaPokemon = props.onSetSelectedAreaPokemon;
  return (
    <div className="pokemonSlider">
      <div className="userPokemonSlider">
        <h3>Your Pokemons</h3>
        {
          <ImageSlider
            pokemon={userPokemons}
            onSetSelectedPokemon={onSetSelectedUserPokemon}
          />
        }
      </div>
      <div className="areaPokemonSlider">
        <h3>Enemy Pokemons</h3>
        {
          <ImageSlider
            pokemon={areaPokemons}
            onSetSelectedPokemon={onSetSelectedAreaPokemon}
            
          />
        }
      </div>
    </div>
  );
}

export default Pokemon;
