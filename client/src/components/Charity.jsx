import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Charity = (props) =>{
let {id} = useParams()
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
return(
  <div>
    <img src={charity.image}/>
  </div>
)
}

export default Charity