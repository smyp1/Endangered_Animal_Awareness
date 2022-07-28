import CharityForms from "../components/CharityForms";
import { useNavigate } from "react-router-dom";

const Charities = (props) => {
  let navigate = useNavigate();
  const showCharity = (id) => {
    navigate(`${id}`);
  };

  return (
    <body className="charity_page">
      <div className="main">
        <div className="title">
          <h1>Charities</h1>
        </div>
        <div className="mapper">
          {props.charities.map((charity, index) => (
            <div key={index}>
              <div className="charity">
                <img src={charity.image} alt="logo" />
                <h2>{charity.name}</h2>
                <h3>{charity.description}</h3>
                <h5>{charity.link}</h5>
                <button onClick={() => showCharity(charity._id)}>
                  Show details
                </button>
              </div>
            </div>
          ))}
        </div>
        <CharityForms />
      </div>
    </body>
  );
};
export default Charities;
