import Areas from "./Areas";
import Cities from "./CityLocations";
import pokeball from "../image/pokeball.png";
import TitleBox from "./TitleBox";
import logo from "../image/pokemon logo.png";

function FirstPage(props) {
  return (
    <div>
      {props.linkAreas ? (
        <>
          <TitleBox
            src={pokeball}
            logo={logo}
            linkAreas={props.linkAreas}
            onSetLinkAreas={props.onSetLinkAreas}
          />
          <Areas
            url={props.linkAreas}
            onSetAreaPokemons={props.onSetAreaPokemons}
            onSetLinkAreas={props.onSetLinkAreas}
          />
        </>
      ) : (
        <>
          <TitleBox
            src={pokeball}
            logo={logo}
            linkAreas={props.linkAreas}
            onSetBattleReady={props.onSetBattleReady}
          />
          <div className="allLocations">
            {props.locations.map((city, index) => (
              <Cities
                url={city.url}
                key={index}
                index={index}
                name={city.name}
                click={() => props.onSetLinkAreas(city.url)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default FirstPage;
