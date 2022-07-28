const Animals = (props) => {
  return (
    <div>
      <h1>Animals</h1>
      <div>
        {props.animals.map((animals, index) => (
          <div key={index}>
            <div>
              <img src={animals.image} alt={animals.name} />
              <h4>{animals.name}</h4>
              <h4>{animals.danger_level}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Animals;
