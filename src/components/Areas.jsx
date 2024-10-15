import { useState, useEffect } from "react";

async function fetchAreasPokemons(pokemon_encounters) {
  const areaPokemons = [];
  for (const poke of pokemon_encounters) {
    const res = await fetch(poke.pokemon.url);
    const pokemonData = await res.json();
    areaPokemons.push(pokemonData);
  }
  return areaPokemons;
}

function Areas(props) {
  const [areas, setAreas] = useState([]);
  const [linkPokemons, setLinkPokemons] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(props.url);
      const data = await response.json();
      setAreas(data.areas);
    }
    fetchData();
  }, [props.url]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(linkPokemons);
      const data = await response.json();
      const areaPokemons = await fetchAreasPokemons(data.pokemon_encounters);
      props.onSetAreaPokemons(areaPokemons);
    }
    if(linkPokemons != null){
      fetchData();
    }
  }, [linkPokemons, props]);

  const joinNames = (names) => {
    return names.split("-").join(" ").toUpperCase();
  };

  return (
    <div className="listAreas">
      {areas.map((area, index) => (
        <div
          key={index}
          className="areaBox"
          onClick={() => setLinkPokemons(area.url)}
        >
          <h2>{joinNames(area.name)}</h2>
        </div>
      ))}
      <button className="button-85" onClick={() => props.onSetLinkAreas(null)}>
        Back{" "}
      </button>
    </div>
  );
}

export default Areas;
