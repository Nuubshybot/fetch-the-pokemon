import pokeball from "../image/pokeballGif.gif";

function returnToAreas(
  setBattleReady,
  setAreaPokemons,
  setSelectedUserPokemon,
  setSelectedAreaPokemon
) {
  setBattleReady(false);
  setAreaPokemons(null);
  setSelectedUserPokemon(null);
  setSelectedAreaPokemon(null);
}

export default function BattleEnd(props) {
  return (
    <div className="BattleEnd">
      <p>
        {`${props.battle.loser} fainted!
      ${props.battle.winner} wins!`}
      </p>
      {/^your /.test(props.battle.winner) && (
        <><p>
          {props.selectedAreaPokemon.name} has been added to your pokéballs!</p><img alt= "pokeball" src={pokeball} /></>
      )}
      <button
        className="button-85"
        onClick={() => {
          returnToAreas(
            props.onSetBattleReady,
            props.onSetAreaPokemons,
            props.onSetSelectedUserPokemon,
            props.onSetSelectedAreaPokemon
          );
        }}
      >
        Return
      </button>
    </div>
  );
}
