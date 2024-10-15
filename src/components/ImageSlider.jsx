import React, { useState } from "react";

function ImageSlider(props) {
  const [pokeIndex, setPokeIndex] = useState(0);

  function showNextImage() {
    setPokeIndex((index) => {
      if (index === props.pokemon.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setPokeIndex((index) => {
      if (index === 0) return props.pokemon.length - 1;
      return index - 1;
    });
  }

  return (
    <div className="slider">
      <img
        src={props.pokemon[pokeIndex].sprites.other.showdown.front_default}
        alt={props.pokemon[pokeIndex].name}
        onClick={() => {
          props.onSetSelectedPokemon(props.pokemon[pokeIndex]);
        }}
      />
      <button
        onClick={showPrevImage}
        className="sliderButton"
        style={{ left: 0 }}
      >
        &#x2190;
      </button>
      <button
        onClick={showNextImage}
        className="sliderButton"
        style={{ right: 0 }}
      >
        &#x2192;
      </button>
      <h3>{props.pokemon[pokeIndex].name}</h3>
    </div>
  );
}

export default ImageSlider;
