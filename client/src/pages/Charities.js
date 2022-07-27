import CharityForms from "../components/CharityForms";
import { useNavigate } from "react-router-dom";
const Charities = (props) => {
  let navigate = useNavigate();
  const showCharity = (id) => {
    navigate(`${id}`);
  };
  return (
    <div className="main">
      <div className="title">
        <h1>Charities</h1>
      </div>
      <div className="mapper">
        {props.charities.charity.map((charity, index) => (
          <div key={index}>
            <div className="charity">
              <img src={charity.image} alt="logo" />
              <h2>{charity.name}</h2>
              <h3>{charity.description}</h3>
              <a href={charity.link}>{charity.link}</a>
              <button onClick={() => showCharity(charity._id)}>
                Show details
              </button>
            </div>
          </div>
        ))}
      </div>
      <CharityForms />
    </div>
  );
};
export default Charities;
