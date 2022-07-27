const Charities = (props) => {
  return (
    <div className="main">
      <div className="title">
        <h1>Charities</h1>
      </div>
      <div className="mapper">
        {props.charities.charity.map((props, index) => (
          <div key={index}>
            <div>
              <img src={props.image} alt="" />
              <h3>{props.name}</h3>
              <h3>{props.description}</h3>
              <h3>{props.link}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Charities;
