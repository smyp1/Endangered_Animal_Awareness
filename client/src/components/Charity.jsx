import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Charity = (props) =>{
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
  console.log(`http://localhost:3001/api/charities/${id}`)
  const getCharityId = async()=>{
    let res = await axios.get(`http://localhost:3001/api/charities/${id}`)
    console.log(res)
    
    setCharity(res.data.charity)
  }
  console.log(id)
  getCharityId()
},[])

const handleChange = (e) => {
    setUpdateCharity({ ...updateCharity, [e.target.id]: e.target.value });
  }; 
  const handleSubmit = async(event) => {
    event.preventDefault();
    let res = await axios.put(`http://localhost:3001/api/charities/${id}`, updateCharity)
    console.log(res);
    setUpdateCharity(initialState);
  };
  const deleteCharity = async(event) =>{
    let res = await axios.delete(`http:localhost:3001/api/charities/${id}`)
  }
return(
  <div className="main">
    <div>
    <img src={charity.image} style={{maxWidth:"50%"}}/>
    <h1>{charity.name}</h1>
    <h3>{charity.description}</h3>
    <a href={charity.link}>{charity.link}</a>
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