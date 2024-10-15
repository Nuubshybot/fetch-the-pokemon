import HealthBar from "./HealthBar";


export default function BattlePokemon(props) {
  const flipped = props.className === "myPokemon";
  return <div className={props.className}>
    <h2>{props.pokemonObject.name}</h2>
    <img className="battlePokemonImage" style={{transform: `scaleX(${flipped? -1 : 1})`}} src={props.pokemonObject.images.front} alt=""></img>
    <HealthBar pokemonObject={props.pokemonObject}></HealthBar>
  </div>
}