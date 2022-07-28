import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Charity = (props) =>{
  let navigate = useNavigate()
  let {id} = useParams()
  const initialState = {
    name: "",
    link: "",
    description: "",
    image: "",
  }; 
  const [updateCharity, setUpdateCharity] = useState(initialState); 
  const [charity, setCharity]=useState("")

useEffect(()=>{

  const getCharity = async()=>{
    let res = await axios.get(`http://localhost:3001/api/charities/${id}`)
    setCharity(res.data.charity)
  }
  getCharity()
},[id])

const handleChange = (e) => {
    setUpdateCharity({ ...updateCharity, [e.target.id]: e.target.value });
  }; 

  const handleSubmit = async(event) => {
    event.preventDefault();
    let res = await axios.put(`http://localhost:3001/api/charities/${id}`, updateCharity)
    setUpdateCharity(res.data.charity);
    navigate("/charities")
    window.location.reload(false)
  };

  const deleteCharity = async()=>{
      let res = await axios.delete(`http://localhost:3001/api/charities/${id}`)
    setCharity(res.data.charity)
    navigate("/charities")
    window.location.reload(false)
  }
return(
  <div className="main">
    <div>
    <img src={charity.image} style={{maxWidth:"50%"}  } alt="Logo"/>
    <h1>{charity.name}</h1>
    <h3>{charity.description}</h3>
    <a href={charity.link}>{charity.link}</a>
    <h1> </h1>
  <button onClick={()=> deleteCharity()}> delete</button>
  </div>
<div>
<form onSubmit={handleSubmit}>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" onChange={handleChange} value={updateCharity.name}></input>
    <label htmlFor="link">Link:</label>
    <input type="text" id="link" onChange={handleChange} value={updateCharity.link}></input>
    <label htmlFor="description">Description:</label>
    <textarea id="description" cols="20" rows="10" onChange={handleChange} value={updateCharity.description}></textarea>
    <label htmlFor="image">Image:</label>
    <input type="text" id="image" onChange={handleChange} value={updateCharity.image}></input>
    <button type="submit">Submit</button>
  </form>
</div>
</div>
)
}

export default Charity