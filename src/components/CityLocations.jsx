import IMAGES from ".././pokemon-locations/loc";

function Cities(props) {
  const names = props.name.split("-").join(" ").toUpperCase();

  return (
    <div className="locationBox" onClick={props.click}>
      <img src={IMAGES[props.index]} alt={props.url}></img>
      <h3>{names}</h3>
    </div>
  );
}

export default Cities;
