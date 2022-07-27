

const CharityForms =()=>{

  const handleChange = (e) => {
    setNewCharity({ ...newCharity, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newCharity);
    setNewCharity(initialState);
  };
}

export default CharityForms