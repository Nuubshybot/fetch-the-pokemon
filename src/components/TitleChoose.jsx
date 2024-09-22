import logo from "../image/pokemon logo.png";
import pokeball from "../image/pokeball.png";

function TitleChoose(props) {
  return (
    <>
      <img
        src={logo}
        alt={"logo"}
        className="logo"
        onClick={() => props.setAreaPokemons(null)}
      />
      <div className="titleBox">
        <img src={pokeball} alt={"pokeball"} className="firstBall" />
        {props.selectedAreaPokemon && props.selectedUserPokemon ? (
          <div className="title">
            {" "}
            <button
              className="button-85 fight"
              onClick={() => props.setBattleReady(true)}
            >
              Fight!
            </button>
          </div>
        ) : (
          <div className="title">
            <h1>Please choose the pokemon!</h1>
          </div>
        )}
        <img src={pokeball} alt={"pokeball"} />
      </div>
    </>
  );
}

export default TitleChoose;
