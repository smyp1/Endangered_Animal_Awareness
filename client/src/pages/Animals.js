const Animals = (props) => {
  return (
    <body className="animal_page">
      <div>
        <h1>Animals</h1>
        <div className="animal">
          {props.animals.map((animals, index) => (
            <div key={index}>
              <div>
                <img
                  src={animals.image}
                  alt={animals.name}
                  style={{
                    maxWidth: "50%",
                    minWidth: "50%",
                    maxHeight: "50%",
                    minHeight: "50%",
                  }}
                />
                <h4>{animals.name}</h4>
                <h4>{animals.danger_level}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </body>
  );
};
export default Animals;
