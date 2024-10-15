import { useEffect, useState } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon";
import FirstPage from "./components/FirstPage";
import BattlePage from "./components/BattlePage";
import TitleChoose from "./components/TitleChoose";

function App() {
  const [locations, setLocations] = useState([]);
  const [linkAreas, setLinkAreas] = useState(null);
  const [areaPokemons, setAreaPokemons] = useState(null);

  const [selectedUserPokemon, setSelectedUserPokemon] = useState(null);
  const [selectedAreaPokemon, setSelectedAreaPokemon] = useState(null);
  const [userPokemons, setUserPokemons] = useState(null);

  const [battleReady, setBattleReady] = useState(false);

  const handleSetAreaPokemons = (pokemons) => setAreaPokemons(pokemons);
  const handleSetLinkAreas = (areas) => setLinkAreas(areas);
  const handleSetSelectedUserPokemon = (pokemon) => setSelectedUserPokemon(pokemon);
  const handleSetSelectedAreaPokemon = (pokemon) => setSelectedAreaPokemon(pokemon);
  const handleSetBattleReady = (ready) => setBattleReady(ready);
  const handleSetUserPokemons = (pokemons) => setUserPokemons(pokemons);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://pokeapi.co/api/v2/location");
      const data = await response.json();
      setLocations(data.results);
      const userPokemonNames = ["bulbasaur", "charizard", "poliwhirl", "pikachu"];
      const userPokemons = [];
      for (const name of userPokemonNames) {
        userPokemons.push(
          await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
            (data) => data.json()
          )
        );
      }
      setUserPokemons(userPokemons);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      {battleReady ? (
        <BattlePage
          selectedUserPokemon={selectedUserPokemon}
          selectedAreaPokemon={selectedAreaPokemon}
          onSetSelectedUserPokemon={handleSetSelectedUserPokemon}
          onSetSelectedAreaPokemon={handleSetSelectedAreaPokemon}
          battleReady={battleReady}
          onSetBattleReady={handleSetBattleReady}
          onSetAreaPokemons={handleSetAreaPokemons}
          onSetUserPokemons={handleSetUserPokemons}
        />
      ) : areaPokemons ? (
        <>
          <TitleChoose
            selectedAreaPokemon={selectedAreaPokemon}
            selectedUserPokemon={selectedUserPokemon}
            onSetBattleReady={handleSetBattleReady}
            onSetAreaPokemons={handleSetAreaPokemons}
          />
          {userPokemons && (
            <Pokemon
              areaPokemons={areaPokemons}
              userPokemons={userPokemons}
              onSetSelectedUserPokemon={handleSetSelectedUserPokemon}
              onSetSelectedAreaPokemon={handleSetSelectedAreaPokemon}
            />
          )}
        </>
      ) : (
        <FirstPage
          locations={locations}
          linkAreas={linkAreas}
          onSetAreaPokemons={handleSetAreaPokemons}
          onSetLinkAreas={handleSetLinkAreas}
        />
      )}
    </div>
  );
}

export default App;
