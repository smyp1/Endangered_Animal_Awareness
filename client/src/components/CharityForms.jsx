import { useState } from "react";

const CharityForms =()=>{
const initialState = {
    name: "",
    link: "",
    description: "",
    image: "",
  }; 
  const [newCharity, setNewCharity] = useState(initialState);
  const handleChange = (e) => {
    setNewCharity({ ...newCharity, [e.target.id]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newCharity);
    setNewCharity(initialState);
  };


return (
  <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" onChange={handleChange} value={newCharity.name}></input>
    <label htmlFor="link">Link:</label>
    <input type="text" id="link" onChange={handleChange} value={newCharity.link}></input>
    <label htmlFor="description">Description:</label>
    <textarea id="description" cols="20" rows="10"vonChange={handleChange} value={newCharity.description}></textarea>
    <label htmlFor="image">Image:</label>
    <input type="text" id="image" onChange={handleChange} value={newCharity.image}></input>
    <button type="submit">Submit</button>
  </form>
)


}

export default CharityForms