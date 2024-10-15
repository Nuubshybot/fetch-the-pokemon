function TitleBox(props) {
  return (
    <>
      <img src={props.logo} alt={"logo"} className="logo" onClick={() => props.onSetLinkAreas()}/>
      <div className="titleBox">
        <img src={props.src} alt={"pokeball"} className="firstBall" />
        {props.linkAreas ? (
          <h1 className="title">Choose your hunting area</h1>
        ) : (
          <h1 className="title">Choose your hunting locations</h1>
        )}
        <img src={props.src} alt={"pokeball"} />
      </div>
    </>
  );
}

export default TitleBox;
