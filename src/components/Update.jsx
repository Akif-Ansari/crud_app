import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../style/update.css";
import axios from 'axios';

const Update = () => {
      const [id,setId] = useState(0);
      const [name,setName] = useState("");
      const [email,setEmail] = useState("");
      const history = useNavigate();
  const getData = () => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
  }
  const updateData = (e) => {
         e.preventDefault();
      axios.put(`https://64ba6a3e5e0670a501d620a4.mockapi.io/crud-app/${id}`,{name:name,email:email})
      .then(() => history("/read"));
  }

  useEffect(() => {
     getData();
  },[])
  return (
    <div>
        <h2>Update data</h2>
       <form className='update-form'>
       <div className="group-update">
       <input type="text" placeholder='enter new name'
        value={name}
        onChange={(e)=>setName(e.target.value)}
       />
       </div>
       <div className="group-update">
       <input type="email" placeholder='enter new email' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
       />
       </div>
         <div className="group">
         <button type='submit' className='btn update-btn'
         onClick={updateData}>Update</button>
         <Link to="/read">
         <button className='btn back-btn-update'>Back</button>
         </Link>

         </div>
       </form>
    </div>
  )
}

export default Update
