import { useEffect, useState } from "react";
import BattlePokemon from "./BattlePokemon";

function calcDamage(attack, defense) {
  const z = Math.floor(Math.random()*39)+217;
  return Math.round((2.88*attack/defense + 2 ) * z/255);
}


function playCombatRound(myPokemon, enemyPokemon, battle, setBattle, setMessage, setDisabled, setUserPokemons, selectedAreaPokemon) {
  setMessage(m => '\n'+m);

  const enemyFainted = attack(myPokemon, enemyPokemon, setBattle, setMessage, setUserPokemons, selectedAreaPokemon);
  if (enemyFainted) return;

  setDisabled(true);
  setTimeout(() => {
    setDisabled(false);
    const playerFainted = attack(enemyPokemon, myPokemon, setBattle, setMessage, setUserPokemons, selectedAreaPokemon);
    if (playerFainted) return;
    setBattle(b => ({...b, round: b.round+1}));
  }, 100);

}

function attack(attacker, defender, setBattle, setMessage, setUserPokemons, selectedAreaPokemon) {
  let dmg = calcDamage(attacker.attack, defender.defense);
  defender.hp -= dmg;
  setMessage(m => `${attacker.name} attacks ${defender.name} for ${dmg} damage!'\n'${m}`);
  if (defender.hp <= 0) {
    setBattle({over: true, winner: attacker.name, loser: defender.name});
    if (/^your /.test(attacker.name)) setUserPokemons(uP => [...uP, selectedAreaPokemon]);
    setMessage(m => `${defender.name} fainted! '\n'${m}`);
    return true;
  }
  return false;
}

export default function Battle(props) {
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (props.battle === 0) {
      setMessage('');
    }
  }, [props.battle])

  return <div className="Battle">
    <BattlePokemon pokemonObject={props.myPokemon} className="myPokemon"></BattlePokemon>
    <BattlePokemon pokemonObject={props.enemyPokemon} className="enemyPokemon"></BattlePokemon>
    <button className="attackButton button-85" disabled={disabled} onClick={
      () => playCombatRound(
        props.myPokemon,
        props.enemyPokemon,
        props.battle,
        props.setBattle,
        setMessage,
        setDisabled,
        props.onSetUserPokemons,
        props.selectedAreaPokemon,
      )
    }>
      {(props.battle.round === 0) ? "Attack" : "Attack again"}
    </button>
    <div className="battleLog">
      <p>{message}</p>
    </div>
  </div>;
}