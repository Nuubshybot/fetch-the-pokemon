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

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://pokeapi.co/api/v2/location");
      const data = await response.json();
      setLocations(data.results);
      const userPokemonNames = ["bulbasaur", "charizard", "poliwhirl"];
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
          setSelectedUserPokemon={setSelectedUserPokemon}
          setSelectedAreaPokemon={setSelectedAreaPokemon}
          battleReady={battleReady}
          setBattleReady={setBattleReady}
          setAreaPokemons={setAreaPokemons}
          setUserPokemons={setUserPokemons}
        />
      ) : areaPokemons ? (
        <>
          <TitleChoose
            selectedAreaPokemon={selectedAreaPokemon}
            selectedUserPokemon={selectedUserPokemon}
            setBattleReady={setBattleReady}
            setAreaPokemons={setAreaPokemons}
          />
          {userPokemons && (
            <Pokemon
              areaPokemons={areaPokemons}
              userPokemons={userPokemons}
              setSelectedUserPokemon={setSelectedUserPokemon}
              setSelectedAreaPokemon={setSelectedAreaPokemon}
            />
          )}
        </>
      ) : (
        <FirstPage
          locations={locations}
          linkAreas={linkAreas}
          setAreaPokemons={setAreaPokemons}
          setLinkAreas={setLinkAreas}
        />
      )}
    </div>
  );
}

export default App;
