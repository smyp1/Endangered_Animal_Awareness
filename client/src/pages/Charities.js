const Charities = (props) => {
  return (
    <div className="main">
      <div className="title">
        <h1>Charities</h1>
      </div>
      <div className="mapper">
        {props.charities.charity.map((props, index) => (
          <div key={index}>
            <div className="charity">
              <img src={props.image} alt="logo" />
              <h2>{props.name}</h2>
              <h3>{props.description}</h3>
              <h4>{props.link}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Charities;
