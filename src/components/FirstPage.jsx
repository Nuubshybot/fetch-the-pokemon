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
            setLinkAreas={props.setLinkAreas}
          />
          <Areas
            url={props.linkAreas}
            setAreaPokemons={props.setAreaPokemons}
            setLinkAreas={props.setLinkAreas}
          />
        </>
      ) : (
        <>
          <TitleBox
            src={pokeball}
            logo={logo}
            linkAreas={props.linkAreas}
            setBattleReady={props.setBattleReady}
          />
          <div className="allLocations">
            {props.locations.map((city, index) => (
              <Cities
                url={city.url}
                key={index}
                index={index}
                name={city.name}
                click={() => props.setLinkAreas(city.url)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default FirstPage;
